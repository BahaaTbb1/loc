import { parseISO, format } from 'date-fns';
import { S } from 'globalstyles/index';
import React, { useState } from 'react';
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
  activites?: [
    {
      id: string;
      title: string;
      start_datetime: string;
      end_datetime: string;
    }
  ];
}
const ClassWeeklyActivities = ({ current, weeks, activites }: IClassWeeklyActivitiesProps) => {
  const [checked, setChecked] = useState('0');
  return (
    <ClassWeeklyActivitiesContainer>
      <StepperContainer>
        <HeaderContainer>
          <HeaderTitle>Weekly Activities</HeaderTitle>
          <S.Flex>
            <CurrentWeek>Week {current}</CurrentWeek>
            <OverAllWeeks>of {weeks}</OverAllWeeks>
          </S.Flex>
        </HeaderContainer>
        <S.Flex>
          {Array.from({ length: weeks }).map((__, index) => {
            if (index == 0)
              return (
                <Stepper
                  key={index}
                  type="first"
                  fillType={current >= index + 1 ? (current === index + 1 ? 'current' : 'done') : 'default'}
                />
              );
            else if (index + 1 === weeks) {
              return (
                <Stepper
                  key={index}
                  type="last"
                  fillType={current >= index + 1 ? (current === index + 1 ? 'current' : 'done') : 'default'}
                />
              );
            } else {
              return (
                <Stepper
                  key={index}
                  type="middle"
                  fillType={current >= index + 1 ? (current === index + 1 ? 'current' : 'done') : 'default'}
                />
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
                key={activity.id}
                id={activity.id}
                checked={checked === activity.id}
                title={activity.title}
                date={format(parseISO(activity.start_datetime), "EEEE LLL d @ H:m 'CET'")}
                setCurrent={setChecked}
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
