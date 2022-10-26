import { useRouter } from 'next/router';
import React from 'react';
import { config } from './config';
import {
  ActivityId,
  Activity,
  ActivityTitle,
  Activities,
  StartSolving,
  Container,
  ActivityDetails,
  ActivitiesContainer,
  ActivityTableHeader,
  HeaderDateContainer,
  HEaderDate,
  HeaderContent,
  HeaderTime,
  ButtonsContainer
} from './PracticeExercises.Style';

interface IPracticeExercisesProps {
  Aid?: number;
}

const PracticeExercises = ({ Aid }: IPracticeExercisesProps) => {
  const router = useRouter();

  const Navigate = () => {
    return Aid ? router.push(`/group-challenge/${Aid}`) : router.push(`/group-challenge/1`);
  };

  return (
    <>
      <Container>
        <ActivityDetails>
          <span>Week 2</span>
          <div>Practice Exercises</div>
        </ActivityDetails>
        <ActivitiesContainer>
          <ActivityTableHeader>
            <HeaderDateContainer>
              <img width={20} height={20} src="/assets/images/icons/common/clook.svg" />
              <HEaderDate>Sunday Sep 20 @ 10:00 CET</HEaderDate>
            </HeaderDateContainer>
            <HeaderContent>
              <HeaderTime>
                <span>12:00</span>
                <div>Time Left</div>
              </HeaderTime>
              <ButtonsContainer>
                <img width={48} height={48} src="/assets/images/icons/common/contestButton.svg" />
                <StartSolving onClick={Navigate}>Start Solving</StartSolving>
              </ButtonsContainer>
            </HeaderContent>
          </ActivityTableHeader>
          <Activities>
            {config.map(({ id, title }) => (
              <Activity key={id}>
                <ActivityTitle>
                  <ActivityId>{id}. </ActivityId>
                  <span>{title}</span>
                </ActivityTitle>
                <span>0/3</span>
              </Activity>
            ))}
          </Activities>
        </ActivitiesContainer>
      </Container>
    </>
  );
};
export default PracticeExercises;
