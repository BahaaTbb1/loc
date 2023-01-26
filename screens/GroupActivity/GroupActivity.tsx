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

import { Activity, ActivityTypeRadio, Header, LiveClass, SideBar } from 'components';
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
  const [week, setWeek] = useState(1);

  const [type, setType] = useState(data?.getLecturesInProgramForCurrentStudent[0].activities[0].activity_type_id);

  const [activity, setActivity] = useState<IActivity | undefined>(
    data?.getLecturesInProgramForCurrentStudent[0].activities[0]
  );

  // function to handle when a lecture or activity is clicked
  const handleCurrent = useCallback(
    (id: number, type_id: number, classId: number, _week: number) => {
      setChecked(id);
      setType(type_id);
      setWeek(_week);
      const activities = data?.getLecturesInProgramForCurrentStudent.find((t) => t.id === classId)?.activities;
      const curA = activities?.find((t) => t.id === id);
      setActivity(curA);
    },
    [data]
  );

  const progressCalc = (endDates: string[]) => {
    const total = endDates.length || 1;
    let count = 0;
    endDates.map((e) => {
      if (e === 'FINISHED') count += 1;
    });
    return Number(((count * 100) / total).toFixed(0));
  };
  return (
    <>
      <Head>
        <title>Leagues of Code</title>
      </Head>
      <Header
        back={true}
        pageTitle="Hello World"
        tabs={[
          {
            current: false,
            title: 'Overview',
            link: `/class-details/${queryId}`
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
      <SideBar />

      <ContentContainer>
        <Container>
          <LeftSide>
            {type === 2 || type === 7 ? (
              <LiveClass week={week} data={activity} />
            ) : (
              <PracticeExercises week={week} data={activity} Aid={checked || 1} />
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
                  progress={progressCalc(activities.map((t) => t.status.name))}
                  open={open === id}
                  week={index + 1}
                >
                  <ActivityList>
                    {activities.map(({ id: activityId, title, activity_type_id, student_attendance }) => (
                      <ActivityTypeRadio
                        key={activityId}
                        classId={id}
                        id={activityId}
                        title={title}
                        type={activity_type_id}
                        week={index + 1}
                        setCurrent={handleCurrent}
                        checked={checked === activityId}
                        done={student_attendance}
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
