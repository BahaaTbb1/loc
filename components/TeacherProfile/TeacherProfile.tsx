import { S } from 'globalstyles/index';
import Image from 'next/image';
import React from 'react';
import {
  BookingButton,
  TeacherImage,
  TeacherName,
  TeacherProfession,
  TeacherProfileContainer
} from './TeacherProfile.styles';
export interface ITeacherProfileProps {
  name?: string;
  profession?: string;
  mail?: string;
}
const TeacherProfile = ({ name, profession }: ITeacherProfileProps) => {
  return (
    <TeacherProfileContainer>
      <TeacherImage src={'/assets/images/user/teacher-default.png'} alt="teacher image" width={96} height={96} />
      <S.Flex alignItems="center" justifyContent="center" direction="column" gap="4">
        <TeacherName>{name}</TeacherName>
        <TeacherProfession>{profession}</TeacherProfession>
      </S.Flex>
      <Image src={'/assets/images/icons/common/mail.svg'} alt="mail" width={24} height={24} />
      <BookingButton>Book 1 on 1 session</BookingButton>
    </TeacherProfileContainer>
  );
};
export default TeacherProfile;
