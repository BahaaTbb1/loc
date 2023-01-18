import { S } from 'globalstyles/index';
import Image from 'next/image';
import React from 'react';
import { ImageLoader } from 'utils/common';
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
  image?: string;
  link?: string;
}
const TeacherProfile = ({ name, profession, image, link }: ITeacherProfileProps) => {
  return (
    <TeacherProfileContainer>
      <TeacherImage loader={ImageLoader} src={image || ''} alt={`${name}'s image`} width={96} height={96} />
      <S.Flex alignItems="center" justifyContent="center" direction="column" gap="4">
        <TeacherName>{name}</TeacherName>
        <TeacherProfession>{profession}</TeacherProfession>
      </S.Flex>
      <Image src={'/assets/images/icons/common/mail.svg'} alt="mail" width={24} height={24} />
      <BookingButton href={link} target="_blank">
        Book 1 on 1 session
      </BookingButton>
    </TeacherProfileContainer>
  );
};
export default TeacherProfile;
