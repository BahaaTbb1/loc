import React, { useCallback, useState } from 'react';

import {
  ActivityHeader,
  ActivityHeaderTitle,
  ActivityList,
  Container,
  ContentContainer,
  CurrentActivity,
  LeftSide,
  RightSide
} from './GroupActivity.styles';

import { Activity, ActivityTypeRadio, Header, LiveClass } from 'components';
import GroupActivityTabs from './GroupActivityTabs';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_ACTIVITES, IActivites, IActivity } from './Contstants';
import { useRouter } from 'next/router';
import PracticeExercises from './PracticeExercises';
import Head from 'next/head';

const GroupActivity = () => {
  const router = useRouter();
  const { id: queryId } = router.query;
  const { data } = useQuery<IActivites>(GET_ACTIVITES, {
    variables: { programId: queryId }
  });
  const [open, setOpen] = useState(data?.getLecturesInProgramForCurrentStudent[0].id);
  const [checked, setChecked] = useState<number | undefined>(
    data?.getLecturesInProgramForCurrentStudent[0].activities[0].id
  );
  const [type, setType] = useState(data?.getLecturesInProgramForCurrentStudent[0].activities[0].activity_type_id);

  const [activity, setActivity] = useState<IActivity | undefined>(
    data?.getLecturesInProgramForCurrentStudent[0].activities[0]
  );

  // function to handle when a lecture or activity is clicked
  const handleCurrent = useCallback(
    (id: number, type_id: number, classId: number) => {
      setChecked(id);
      setType(type_id);

      const activities = data?.getLecturesInProgramForCurrentStudent.find((t) => t.id === classId)?.activities;
      const curA = activities?.find((t) => t.id === id);
      setActivity(curA);
    },
    [data]
  );
  const dateSplit = (endDates: string) => {
    const enDate = new Date(endDates);
    const curDate = new Date();

    return Number(enDate.getTime()) < Number(curDate.getTime());
  };
  const progressCalc = (endDates: string[]) => {
    const total = endDates.length;
    let count = 0;
    endDates.map((e) => {
      if (dateSplit(e)) count += 1;
    });
    return Number(((count * 100) / total).toFixed(0));
  };
  return (
    <>
      <Head>
        <title>Leagues of Code</title>
      </Head>
      <Header
        pageTitle="League 5: Module 7"
        tabs={[
          {
            current: false,
            title: 'Overview'
          },
          {
            current: true,
            title: 'Activities'
          },
          {
            current: false,
            title: 'Ranking'
          }
        ]}
      />
      <ContentContainer>
        <Container>
          <LeftSide>
            {type === 2 || type === 7 ? (
              <LiveClass data={activity} />
            ) : (
              <PracticeExercises data={activity} Aid={checked} />
            )}
            <GroupActivityTabs resources={activity?.resources} description={activity?.description} />
          </LeftSide>
          <RightSide>
            <ActivityHeader>
              <ActivityHeaderTitle> Activity List</ActivityHeaderTitle>
              <CurrentActivity>
                <Image
                  alt="current-activity"
                  color="#ADB3CF"
                  src="/assets/images/icons/common/round-today.svg"
                  width={20}
                  height={20}
                />
              </CurrentActivity>
            </ActivityHeader>
            <div style={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: '800px', width: '387px' }}>
              {data?.getLecturesInProgramForCurrentStudent.map(({ name, activities, id }, index) => (
                <Activity
                  key={index}
                  id={id}
                  title={name}
                  toggle={setOpen}
                  progress={progressCalc(activities.map((t) => t.end_datetime))}
                  open={open === id}
                  week={id}
                >
                  <ActivityList>
                    {activities.map(({ id: activityId, title, activity_type_id, end_datetime }) => (
                      <ActivityTypeRadio
                        key={activityId}
                        classId={id}
                        id={activityId}
                        title={title}
                        type={activity_type_id}
                        setCurrent={handleCurrent}
                        checked={checked === activityId}
                        done={dateSplit(end_datetime)}
                      />
                    ))}
                  </ActivityList>
                </Activity>
              ))}
            </div>

            <div style={{ marginBottom: '200px' }}></div>
          </RightSide>
        </Container>
      </ContentContainer>
    </>
  );
};

export default GroupActivity;
