import { gql } from '@apollo/client';

export const GET_ACTIVITES = gql`
  query getActivityes($programId: ID!) {
    getLecturesInProgramForCurrentStudent(programId: $programId) {
      id
      name
      description
      status {
        id
        name
      }
      start_datetime
      end_datetime
      order_number
      activities {
        activity_type_id
        id
        title
        description
        speaker
        start_datetime
        end_datetime
        status {
          id
          name
        }
        student_attendance
        problems_count
        problems {
          id
          title
          description
          type_id
          content
        }
        resources {
          id
          name
          link
        }
      }
    }
  }
`;

export interface IActivites {
  getLecturesInProgramForCurrentStudent: [ActivitesData];
}
export interface IActivity {
  activity_type_id: number;
  id: number;
  title: string;
  start_datetime: string;
  end_datetime: string;
  description: string;
  speaker: string;
  problems_count: number;
  problems: [IProblem];
  status: {
    id: number;
    name: 'FINISHED' | 'UPCOMING' | 'ONGOING';
  };
  student_attendance: boolean;
  resources: [{ id: number; name: string; link: string }];
}
export interface ActivitesData {
  id: number;
  name: string;
  description: string;
  status: {
    id: number;
    name: 'FINISHED' | 'UPCOMING' | 'ONGOING';
  };
  start_datetime: string;
  end_datetime: string;
  order_number: number;
  activities: [IActivity];
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
