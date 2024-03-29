import { useMutation } from '@apollo/client';
import Button from 'components/Button';
import { S } from 'globalstyles/index';
import { useToast } from 'hooks/useToast';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { IMCContent } from '../ProblemDetails/Submissions/Contstants';
import Choice from './Choice';
import { SUBMIT_MULTI_CHOICE_PROBLEM } from './Contstants';
import {
  Container,
  ProblemContainer,
  ProblemText,
  ProblemTitle,
  ProblemSubTitle,
  ChoicesContainer,
  Wrapper,
  ButtonContainer
} from './MultiChoices.Style';

const MultiChoices = ({
  content,
  activityId,
  problemId,
  refetch
}: {
  refetch: any;
  content: IMCContent;
  activityId: number;
  problemId: number;
}) => {
  const { data: session } = useSession();
  const toast = useToast();
  const [choicesRes, setChoicesRes] = useState(content.answers.map((t) => ({ selected: false, title: t })));
  const [submitMutate] = useMutation<{ submitAnswerToMCQForCurrentStudent: { id: number; verdict: { name: string } } }>(
    SUBMIT_MULTI_CHOICE_PROBLEM,
    {
      context: {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${session?.user.access_token}`
        }
      }
    }
  );
  const [value] = useState(false);
  const onSubmit = async () => {
    try {
      const res = await submitMutate({
        variables: {
          activityId: activityId,
          problemId: problemId,
          answer: choicesRes.map((t) => t.selected)
        }
      });
      let status: 'correct' | 'wrong' | 'waiting' = 'waiting';
      if (res.data?.submitAnswerToMCQForCurrentStudent.verdict.name == 'WRONG ANSWER') status = 'wrong';
      else if (res.data?.submitAnswerToMCQForCurrentStudent.verdict.name == 'ACCEPTED') status = 'correct';
      else status = 'waiting';
      refetch();
      toast.open(
        <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
          <div>
            <S.TextButtonMedium>{res.data?.submitAnswerToMCQForCurrentStudent.verdict.name}</S.TextButtonMedium>
          </div>
          {/* <ToastMessage>Try Again!</ToastMessage> */}
        </S.Flex>,
        status,
        5000
      );
    } catch (error: any) {
      toast.open(
        <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
          <div>
            <S.TextButtonMedium>{error?.message ?? 'something went wrong'}</S.TextButtonMedium>
          </div>
          {/* <ToastMessage>Try Again!</ToastMessage> */}
        </S.Flex>,
        'wrong',
        5000
      );
    }
  };
  const onClick = async (
    id: number,
    t: {
      selected: boolean;
      title: string;
    }
  ) => {
    const temp = [...choicesRes];
    temp[id] = { selected: !t.selected, title: t.title };
    setChoicesRes(temp);
  };
  useEffect(() => {
    setChoicesRes(content.answers.map((t) => ({ selected: false, title: t })));
  }, [problemId]);

  return (
    <Wrapper>
      <Container>
        <ProblemContainer>
          <ProblemText>
            <ProblemTitle>{content.question}</ProblemTitle>
            <ProblemSubTitle>Select multiple options from the list.</ProblemSubTitle>
          </ProblemText>
          <ChoicesContainer>
            {choicesRes.map((t, id) => (
              <Choice text={t.title} key={id} isSelected={t.selected} onClick={() => onClick(id, t)} />
            ))}
          </ChoicesContainer>
        </ProblemContainer>
      </Container>
      <ButtonContainer>
        <div style={{ padding: '24px' }}>
          <Button outline={value} component={value ? 'Test Code' : 'Submit attempt'} onClick={onSubmit} />
        </div>
      </ButtonContainer>
    </Wrapper>
  );
};

export default MultiChoices;
