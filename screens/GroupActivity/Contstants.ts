import { gql } from '@apollo/client';

export const GET_ACTIVITES = gql`
  query getActivityes($programId: ID!) {
    getLecturesInProgramForCurrentStudent(programId: $programId) {
      id
      name
      description

      activities {
        id
        title
        activity_type_id
        link
        problems {
          id
          title
        }
        resources {
          id
          name
          description
          link
        }
      }
    }
  }
`;

export interface IActivites {
  getLecturesInProgramForCurrentStudent: [ActivitesData];
}

export interface ActivitesData {
  id: number;
  name: string;
  description: string;
  activities: [
    {
      id: number;
      title: string;
      activity_type_id: number;
      link: string;
      problems: [
        {
          id: number;
          title: string;
        }
      ];
      resources: [
        {
          id: number;
          name: string;
          description: string;
          link: string;
        }
      ];
    }
  ];
}
