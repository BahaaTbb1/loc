import React from 'react';
import { LBCard } from './LeaderBoardCard.styled';

interface ILeaderBoardCard {
  number: number;
  time: string;
  type: 'first' | 'accepted' | 'wrong' | 'none';
}

const LeaderBoardCard = ({ number, time, type }: ILeaderBoardCard) => {
  return (
    <LBCard type={type}>
      <div>{number}</div>
      <span>{time}</span>
    </LBCard>
  );
};

export default LeaderBoardCard;
