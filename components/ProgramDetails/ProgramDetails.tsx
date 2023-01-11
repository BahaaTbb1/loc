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
      <InfoContainer>
        <DataDiv>
          <Completed>{problemsSolved}</Completed>
          <OverAll>/ {porblems}</OverAll>
        </DataDiv>
        <Div>Problems Solved</Div>
      </InfoContainer>
      <InfoContainer>
        <DataDiv>
          <Completed>{activitesCompleted}</Completed>
          <OverAll>/ {activites}</OverAll>
        </DataDiv>
        <Div>Activities Completed</Div>
      </InfoContainer>
    </ProgramDetailsContainer>
  );
};
export default ProgramDetails;
