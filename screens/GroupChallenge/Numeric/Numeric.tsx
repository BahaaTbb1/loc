import { useMutation } from '@apollo/client';
import Button from 'components/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { S } from 'globalstyles/index';
import { useToast } from 'hooks/useToast';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { INQContent } from '../ProblemDetails/Submissions/Contstants';
import { SUBMIT_NUMIERC_PROBLEM } from './Contstants';
import {
  Container,
  ProblemContainer,
  ProblemText,
  ProblemTitle,
  ProblemSubTitle,
  Wrapper,
  ButtonContainer,
  DataInput
} from './Numeric.Style';

yup.setLocale({
  mixed: {
    required: 'Required Field'
  }
});

const MultiChoices = ({
  content,
  activityId,
  problemId,
  refetch
}: {
  refetch: any;
  content: INQContent;
  activityId: number;
  problemId: number;
}) => {
  const { data: session } = useSession();
  const toast = useToast();

  const [submitMutate] = useMutation<{ submitAnswerToNQForCurrentStudent: { id: number; verdict: { name: string } } }>(
    SUBMIT_NUMIERC_PROBLEM,
    {
      context: {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${session?.user.access_token}`
        }
      }
    }
  );
  const onSubmit = async (value: number) => {
    try {
      const res = await submitMutate({
        variables: {
          activityId: activityId,
          problemId: problemId,
          answer: value
        }
      });

      let status: 'correct' | 'wrong' | 'waiting' = 'waiting';
      if (res.data?.submitAnswerToNQForCurrentStudent.verdict.name == 'WRONG ANSWER') status = 'wrong';
      else if (res.data?.submitAnswerToNQForCurrentStudent.verdict.name == 'ACCEPTED') status = 'correct';
      else status = 'waiting';
      refetch();
      toast.open(
        <S.Flex justifyContent="space-between" alingItems="center" style={{ flex: '1', width: '300px' }}>
          <div>
            <S.TextButtonMedium>{res.data?.submitAnswerToNQForCurrentStudent.verdict.name}</S.TextButtonMedium>
          </div>
          {/* <ToastMessage>Try Again!</ToastMessage> */}
        </S.Flex>,
        status,
        5000
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const formik = useFormik({
    initialValues: {
      value: ''
    },
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      onSubmit(Number(values.value));
      onSubmit;
    },
    validationSchema: yup.object({
      value: yup.number().typeError('Input must be a valid number').required('Input is required')
    })
  });

  return (
    <Wrapper>
      <Container>
        <ProblemContainer>
          <ProblemText>
            <ProblemTitle>{content.question}</ProblemTitle>
            <ProblemSubTitle>{content.precision} digits of precision is required</ProblemSubTitle>
          </ProblemText>
          {formik.errors.value && <div style={{ color: 'red' }}>{formik.errors.value}</div>}
          <DataInput value={formik.values.value} onChange={(e) => formik.setFieldValue('value', e.target.value)} />
        </ProblemContainer>
      </Container>
      <ButtonContainer>
        <div style={{ padding: '24px' }}>
          <Button outline={false} component={'Submit attempt'} onClick={() => formik.handleSubmit()} />
        </div>
      </ButtonContainer>
    </Wrapper>
  );
};

export default MultiChoices;
