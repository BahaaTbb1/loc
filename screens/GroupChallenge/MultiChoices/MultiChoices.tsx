import { useMutation } from '@apollo/client';
import Button from 'components/Button';
import { S } from 'globalstyles/index';
import { useToast } from 'hooks/useToast';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
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
  content: { question: string; answers: string[]; correct_answer: boolean[] };
  activityId: number;
  problemId: number;
}) => {
  const { data: session } = useSession();
  const toast = useToast();

  const [submitMutate] = useMutation(SUBMIT_MULTI_CHOICE_PROBLEM, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    }
  });
  const [value] = useState(false);
  const onSubmit = async () => {
    try {
      await submitMutate({
        variables: {
          activityId: activityId,
          problemId: problemId,
          answer: [true, false, false]
        }
      });
      refetch();
      toast.open(
        <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
          <div>
            <S.TextButtonMedium>Everything went well </S.TextButtonMedium>
          </div>
          {/* <ToastMessage>Try Again!</ToastMessage> */}
        </S.Flex>,
        'correct',
        5000
      );
    } catch (error) {
      toast.open(
        <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
          <div>
            <S.TextButtonMedium>Something went wrong </S.TextButtonMedium>
          </div>
          {/* <ToastMessage>Try Again!</ToastMessage> */}
        </S.Flex>,
        'wrong',
        5000
      );
    }
  };
  return (
    <>
      <Wrapper>
        <Container>
          <ProblemContainer>
            <ProblemText>
              <ProblemTitle>{content.question}</ProblemTitle>
              <ProblemSubTitle>Select multiple options from the list.</ProblemSubTitle>
            </ProblemText>
            <ChoicesContainer>
              {content.answers.map((t, id) => (
                <Choice text={t} key={id} />
              ))}
            </ChoicesContainer>
          </ProblemContainer>
        </Container>
        <ButtonContainer>
          <Button outline={value} component={value ? 'Test Code' : 'Submit attempt'} onClick={onSubmit} />
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default MultiChoices;
