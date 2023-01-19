import { gql } from '@apollo/client';

export const SUBMIT_MULTI_CHOICE_PROBLEM = gql`
  mutation submitChoice($activityId: ID!, $problemId: ID!, $answer: [Boolean!]!) {
    submitAnswerToMCQForCurrentStudent(activityId: $activityId, problemId: $problemId, answer: $answer) {
      id
      verdict {
        name
      }
    }
  }
`;
