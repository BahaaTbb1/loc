import { S } from 'globalstyles/index';
import Image from 'next/image';
import React from 'react';
import { format, parseISO } from 'date-fns';
import {
  DateContainer,
  Program,
  ProgramDetailsContainer,
  ProgramName,
  Date,
  InfoContainer,
  Completed,
  OverAll,
  Div,
  DataDiv
} from './ProgramDetails.styles';

export interface IProgramDetailsProps {
  name: string;
  startDate: string;
  endDate: string;
  problemsSolved: number;
  porblems: number;
  activitesCompleted: number;
  activites: number;
}

const ProgramDetails = ({
  name,
  startDate,
  endDate,
  porblems,
  problemsSolved,
  activites,
  activitesCompleted
}: IProgramDetailsProps) => {
  return (
    <ProgramDetailsContainer>
      <Program>
        <ProgramName>{name}</ProgramName>
        <DateContainer>
          <Image src="/assets/images/icons/common/calendar-blue.svg" alt="clock" width={24} height={24} />
          <Date>
            {format(parseISO(startDate), 'MMM d')} — {format(parseISO(endDate), 'MMM d')}
          </Date>
        </DateContainer>
      </Program>
      <DataDiv>
        <InfoContainer>
          <S.Flex gap="4" alignItems="baseLine">
            <Completed>{problemsSolved}</Completed>
            <OverAll>/ {porblems}</OverAll>
          </S.Flex>
          <Div>Problems Solved</Div>
        </InfoContainer>

        <InfoContainer>
          <S.Flex gap="4" alignItems="baseLine">
            <Completed>{activitesCompleted}</Completed>
            <OverAll>/ {activites}</OverAll>
          </S.Flex>
          <Div>Activities Completed</Div>
        </InfoContainer>
      </DataDiv>
    </ProgramDetailsContainer>
  );
};
export default ProgramDetails;
