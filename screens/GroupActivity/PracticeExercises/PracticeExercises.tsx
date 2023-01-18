import { useRouter } from 'next/router';
import React from 'react';
import { IStudentActivity } from 'screens/GroupChallenge/ProblemDetails/Submissions/Contstants';
import { config } from './config';
import { parseISO, format } from 'date-fns';
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
import { IActivity } from '../Contstants';

interface IPracticeExercisesProps {
  Aid?: number;
  data: IActivity | undefined;
}

const PracticeExercises = ({ Aid, data }: IPracticeExercisesProps) => {
  const router = useRouter();
  const Navigate = () => {
    return Aid ? router.push(`/group-challenge/${Aid}`) : router.push(`/group-challenge/1`);
  };
  return (
    <>
      <Container>
        <ActivityDetails>
          <span>Week 2</span>
          <div>{data?.title}</div>
        </ActivityDetails>
        <ActivitiesContainer>
          <ActivityTableHeader>
            <HeaderDateContainer>
              <img width={20} height={20} src="/assets/images/icons/common/clook.svg" />
              <HEaderDate>
                {data?.start_datetime && format(parseISO(data.start_datetime), "EEEE MMM d '@' HH:mm 'CET'")}
              </HEaderDate>
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
            {data?.problems.map(({ id, title }) => (
              <Activity key={id}>
                <ActivityTitle>
                  <ActivityId>{id}. </ActivityId>
                  <span>{title}</span>
                </ActivityTitle>
                <span>0/{data?.problems_count}</span>
              </Activity>
            ))}
          </Activities>
        </ActivitiesContainer>
      </Container>
    </>
  );
};
export default PracticeExercises;
