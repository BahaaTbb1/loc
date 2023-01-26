import { gql } from '@apollo/client';

export const SUBMIT_MULTI_CODDING_PROBLEM = gql`
  mutation ($activityId: ID!, $problemId: ID!, $answer: String!, $language: String!) {
    submitAnswerToCQForCurrentStudent(
      activityId: $activityId
      problemId: $problemId
      answer: $answer
      language: $language
    ) {
      id

      verdict {
        name
      }
    }
  }
`;
export const SUBMIT_FR_PROBLEM = gql`
  mutation ($activityId: ID!, $problemId: ID!, $answer: String!) {
    submitAnswerToFRQForCurrentStudent(activityId: $activityId, problemId: $problemId, answer: $answer) {
      id
      verdict {
        name
      }
    }
  }
`;
