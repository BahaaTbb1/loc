import { S } from 'globalstyles';
import React from 'react';
import {
  JoinClassButton,
  LiveClassContainer,
  LiveClassDate,
  LiveClassFooter,
  LiveClassFooterWrapper,
  LiveClassWrapper,
  TutorImage,
  TutorName,
  TutorTitle
} from './LiveClass.styles';
import Image from 'next/image';
import { ActivityDetails } from 'screens/GroupActivity/PracticeExercises/PracticeExercises.Style';

const LiveClass = () => {
  return (
    <>
      <ActivityDetails>
        <span>Week 2</span>
        <div>Practice Exercises</div>
      </ActivityDetails>
      <LiveClassWrapper>

        <LiveClassContainer>
          <TutorImage alt="tutor" src={'/assets/images/user/tutor.png'} width="128" height="128" />
          <S.Flex alignItems="center" gap="8" direction="column">
            <TutorName>Jonathan Harel</TutorName>
            <TutorTitle>Software Engineer at Zeptolab</TutorTitle>
          </S.Flex>
        </LiveClassContainer>
        <LiveClassFooterWrapper>
          <LiveClassFooter>
            <S.Flex alignItems="center" gap="8">
              <Image alt="clock" src="/assets/images/icons/common/clock.svg" width="24" height="24" />
              <LiveClassDate> Sunday Sep 20 @ 10:00 CET </LiveClassDate>
            </S.Flex>
            <JoinClassButton>Join Class</JoinClassButton>
          </LiveClassFooter>
        </LiveClassFooterWrapper>
      </LiveClassWrapper>
    </>
  );
};
export default LiveClass;
