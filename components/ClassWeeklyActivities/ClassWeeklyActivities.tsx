import { parseISO, format } from 'date-fns';
import { S } from 'globalstyles/index';
import React, { useState } from 'react';
import { ILecture } from 'screens/ClassDetails/Constants';
import ActivityClass from './ActivtyClass';
import {
  ActivitesContainer,
  ClassWeeklyActivitiesContainer,
  CurrentWeek,
  HeaderContainer,
  HeaderTitle,
  OverAllWeeks,
  StepperContainer
} from './ClassWeeklyActivities.styles';
import Stepper from './Stepper';
export interface IClassWeeklyActivitiesProps {
  current: number;
  weeks: number;
  setCurrent: (_id: number) => void;
  activites?: [
    {
      id: string;
      title: string;
      start_datetime: string;
      end_datetime: string;
      status: {
        id: number;
        name: 'FINISHED' | 'UPCOMING' | 'ONGOING';
      };
      student_attendance: boolean;
    }
  ];
  lectures?: [ILecture];
}
const ClassWeeklyActivities = ({ current, weeks, activites, setCurrent, lectures }: IClassWeeklyActivitiesProps) => {
  const [checked, setChecked] = useState(0);

  return (
    <ClassWeeklyActivitiesContainer>
      <StepperContainer>
        <HeaderContainer>
          <HeaderTitle>Weekly Activities</HeaderTitle>
          <S.Flex alignItems="center">
            <CurrentWeek>Week {current + 1}</CurrentWeek>
            <OverAllWeeks>of {weeks}</OverAllWeeks>
          </S.Flex>
        </HeaderContainer>
        <S.Flex>
          {lectures &&
            lectures?.map((_, index) => {
              if (index == 0)
                return (
                  <Stepper setCurrent={() => setCurrent(index)} key={index} type="first" fillType={_.status.name} />
                );
              else if (index + 1 === weeks) {
                return (
                  <Stepper setCurrent={() => setCurrent(index)} key={index} type="last" fillType={_.status.name} />
                );
              } else {
                return (
                  <Stepper setCurrent={() => setCurrent(index)} key={index} type="middle" fillType={_.status.name} />
                );
              }
            })}
        </S.Flex>
      </StepperContainer>
      <ActivitesContainer>
        {activites && activites.length > 0 ? (
          activites.map((activity) => {
            return (
              <ActivityClass
                key={Number(activity.id)}
                id={Number(activity.id)}
                checked={checked === Number(activity.id)}
                title={activity.title}
                date={activity.start_datetime && format(parseISO(activity.start_datetime), "EEEE LLL d @ H:m 'CET'")}
                setCurrent={setChecked}
                done={activity.student_attendance}
              />
            );
          })
        ) : (
          <div>No Data Provided</div>
        )}
      </ActivitesContainer>
    </ClassWeeklyActivitiesContainer>
  );
};
export default ClassWeeklyActivities;
