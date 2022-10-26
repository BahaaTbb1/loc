import { gql } from '@apollo/client';

export const GET_STUDENT_ACTIVITY = gql`
  query getStudent($id: Int) {
    getActivityForCurrentStudent(id: $id) {
      id
      title
      problems {
        type_id
        id
        title
        __typename
        description
        content
      }
    }
  }
`;
export const GIT_PROBLEMS_SUBMISSIONS = gql`
  query getStudent($problemId: ID!, $activityId: ID!) {
    getSubmissionsFromProblemForCurrentStudent(problemId: $problemId, activityId: $activityId) {
      id
      content
      verdict {
        id
        name
      }
      status {
        id
        name
      }
      created_at
    }
  }
`;
export interface IStudentActivity {
  getActivityForCurrentStudent: {
    id: string;
    title: string;
    problems: [IProblem];
  };
}
export interface IProblem {
  type_id: number;
  __typename: string;
  id: number;
  title: string;
  description: string;
  content: ICQContent | IMCContent | IFRContent;
}

export interface IFRContent {
  question: string;
}
export interface ICQContent {
  coding_judge_id: number;
  time_limit: number;
  memory_limit: number;
  sample_tests: {
    input: string;
    output: string;
  }[];
  test_cases: {
    input: string;
    output: string;
  }[];
}
export interface IMCContent {
  question: string;
  answers: string[];
  correct_answer: boolean[];
}
export interface IFRProblemSubmissions {
  getSubmissionsFromProblemForCurrentStudent: {
    id: string;
    content: {
      submitted_answer: string;
      language: string;
    };
    verdict: string;
    status: string;
    created_at: string;
  }[];
}
export interface IMCProblemSubmissions {
  getSubmissionsFromProblemForCurrentStudent: {
    id: string;
    content: {
      submitted_answer: boolean[];
      language: null;
    };
    verdict: { id: string; name: string };
    status: { id: string; name: string };
    created_at: string;
  }[];
}
