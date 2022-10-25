import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query getCourses {
    getOngoingProgramsForCurrentStudent {
      id
      title

      periods {
        start_date
        end_date
      }
    }

    getEnrolledProgramsForCurrentStudent {
      id
      title
      periods {
        start_date
        end_date
      }
    }

    getCompletedProgramsForCurrentStudent {
      id
      title
      periods {
        start_date
        end_date
      }
    }
  }
`;

export interface ICourses {
  getOngoingProgramsForCurrentStudent: [CourseData];
  getEnrolledProgramsForCurrentStudent: [CourseData];
  getCompletedProgramsForCurrentStudent: [CourseData];
}

export interface CourseData {
  id: number;
  title: string;
  periods: [
    {
      start_date: string;
      end_date: string;
    }
  ];
}
