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
import { IActivity } from 'screens/GroupActivity/Contstants';
import { format, parseISO } from 'date-fns';

interface ILiveClassProps {
  data: IActivity | undefined;
}
const LiveClass: React.FC<ILiveClassProps> = ({ data }) => {
  return (
    <>
      <ActivityDetails>
        <span>Week 2</span>
        <div>{data?.title}</div>
      </ActivityDetails>
      <LiveClassWrapper>
        <LiveClassContainer>
          <TutorImage alt="tutor" src={'/assets/images/user/tutor.png'} width="128" height="128" />
          <S.Flex alignItems="center" gap="8" direction="column">
            <TutorName>{data?.speaker}</TutorName>
            <TutorTitle>Software Engineer at Zeptolab</TutorTitle>
          </S.Flex>
        </LiveClassContainer>
        <LiveClassFooterWrapper>
          <LiveClassFooter>
            <S.Flex alignItems="center" gap="8">
              <Image alt="clock" src="/assets/images/icons/common/clock.svg" width="24" height="24" />
              <LiveClassDate>
                {' '}
                {data?.start_datetime && format(parseISO(data.start_datetime), "EEEE MMM d '@' HH:mm 'CET'")}
              </LiveClassDate>
            </S.Flex>
            <JoinClassButton>Join Class</JoinClassButton>
          </LiveClassFooter>
        </LiveClassFooterWrapper>
      </LiveClassWrapper>
    </>
  );
};
export default LiveClass;
