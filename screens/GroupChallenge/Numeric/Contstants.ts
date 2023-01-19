import { gql } from '@apollo/client';

export const SUBMIT_NUMIERC_PROBLEM = gql`
  mutation submitChoice($activityId: ID!, $problemId: ID!, $answer: Float!) {
    submitAnswerToNQForCurrentStudent(activityId: $activityId, problemId: $problemId, answer: $answer) {
      verdict {
        name
      }
    }
  }
`;
