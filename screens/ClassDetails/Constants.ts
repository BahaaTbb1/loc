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
        status {
          id
          name
        }
        start_datetime
        end_datetime
        order_number
        activities {
          id
          title
          start_datetime
          end_datetime
          status {
            id
            name
          }
          student_attendance
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
export interface ILecture {
  id: string;
  name: string;
  status: {
    id: number;
    name: 'FINISHED' | 'UPCOMING' | 'ONGOING';
  };
  start_datetime: string;
  end_datetime: string;
  order_number: number;
  activities: [
    {
      id: string;
      title: string;
      start_datetime: string;
      end_datetime: string;
      status: {
        id: number;
        name: 'FINISHED' | 'UPCOMING' | 'ONGOING';
      };
      student_attendance: boolean;
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
