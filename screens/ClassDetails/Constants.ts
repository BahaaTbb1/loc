import { gql } from '@apollo/client';

export const GET_CLASS_DETAILS = gql`
  query getClassDetails($moduleId: ID!, $programId: ID!) {
    getStudentOverviewFromModule(moduleId: $moduleId) {
      module {
        name
        start_datetime
        end_datetime
      }
      total_problems
      total_problems_solved
      total_activities
      total_activities_completed
    }

    getCurrentModuleForCurrentStudent(programId: $programId) {
      teacher {
        calendly_link
        title
        user {
          firstname
          lastname
          email
        }
        photo
        calendly_link
      }
      lectures {
        id
        name
        activities {
          id
          title
          start_datetime
          end_datetime
        }
      }
      students {
        nationality
        avatar {
          name
          image
        }
        user {
          firstname
          lastname
        }
      }
    }
  }
`;

export interface IClassDetails {
  getStudentOverviewFromModule: {
    module: {
      name: string;
      start_datetime: string;
      end_datetime: string;
    };
    total_problems: number;
    total_problems_solved: number;
    total_activities: number;
    total_activities_completed: number;
  };

  getCurrentModuleForCurrentStudent: {
    teacher: ITeacher;
    lectures: [ILecture];
    students: [IStudent];
  };
}

interface ITeacher {
  title: string;
  user: {
    firstname: string;
    lastname: string;
    email: string;
  };
  photo: string;
  calendly_link: string;
}
interface ILecture {
  id: string;
  name: string;
  activities: [
    {
      id: string;
      title: string;
      start_datetime: string;
      end_datetime: string;
    }
  ];
}
export interface IStudent {
  nationality: string;
  avatar: {
    image: string;
  };
  user: {
    firstname: string;
    lastname: string;
  };
}
