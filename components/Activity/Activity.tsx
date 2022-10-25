import React from 'react';
import { CircularProgressBar } from '..';
import { ActivityContainer, ActivityTitle, ActivityWeek, ActivityWrapper } from './Activity.styles';
import { S } from 'globalstyles';

export interface IActivityProps {
  id: number;
  progress: number;
  week: number;
  title: string;
  open: boolean;
  children: React.ReactNode;
  toggle: (_id: number) => void;
}

const Activity = ({ id, progress, title, week, open, children, toggle }: IActivityProps) => {
  return (
    <ActivityContainer onClick={() => toggle(id)}>
      <ActivityWrapper>
        <CircularProgressBar width={40} progress={progress} />
        <S.Flex direction="column">
          <ActivityWeek>week {week}</ActivityWeek>
          <ActivityTitle>{title}</ActivityTitle>
        </S.Flex>
      </ActivityWrapper>
      {open && children}
    </ActivityContainer>
  );
};
export default Activity;
