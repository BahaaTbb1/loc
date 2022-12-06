import { useRouter } from 'next/router';
import React from 'react';
import { IStudentActivity } from 'screens/GroupChallenge/ProblemDetails/Submissions/Contstants';
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
  data: IStudentActivity | undefined;
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
          <div>Practice Exercises</div>
        </ActivityDetails>
        <ActivitiesContainer>
          <ActivityTableHeader>
            <HeaderDateContainer>
              <img width={20} height={20} src="/assets/images/icons/common/clook.svg" />
              <HEaderDate>{data?.getActivityForCurrentStudent.start_datetime}</HEaderDate>
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
            {data?.getActivityForCurrentStudent.problems.map(({ id, title }) => (
              <Activity key={id}>
                <ActivityTitle>
                  <ActivityId>{id}. </ActivityId>
                  <span>{title}</span>
                </ActivityTitle>
                <span>0/{data?.getActivityForCurrentStudent.problems_count}</span>
              </Activity>
            ))}
          </Activities>
        </ActivitiesContainer>
      </Container>
    </>
  );
};
export default PracticeExercises;
