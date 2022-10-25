import { gql } from '@apollo/client';

export const GET_STUDENT = gql`
  query getStudent {
    currentStudent {
      id
      birthdate
      nationality
      avatar {
        image
      }
      user {
        id
        firstname
        lastname
        email
      }
    }
  }
`;
export const UPDATE_ACCOUNT_INFO = gql`
  mutation updataAccount($email: String!, $password: String!) {
    updateCurrentStudentAccountInfo(email: $email, password: $password) {
      id
    }
  }
`;
export const UPDATE_PROFILE_INFO = gql`
  mutation ($birthdate: Date!, $nationality: String!, $firstname: String!, $lastname: String!) {
    updateCurrentStudentProfileInfo(
      birthdate: $birthdate
      nationality: $nationality
      firstname: $firstname
      lastname: $lastname
    ) {
      id
    }
  }
`;

export interface IStudent {
  currentStudent: StudentData;
}

export interface StudentData {
  id: string;
  birthdate: string;
  nationality: string;
  avatar: {
    image: string;
  };
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  };
}
