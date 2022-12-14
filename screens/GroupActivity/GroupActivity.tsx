import React, { useEffect, useState } from 'react';

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
import { GET_ACTIVITES, IActivites } from './Contstants';
import { useRouter } from 'next/router';
import PracticeExercises from './PracticeExercises';
import { useSession } from 'next-auth/react';
import { GET_STUDENT_ACTIVITY, IStudentActivity } from 'screens/GroupChallenge/ProblemDetails/Submissions/Contstants';
import Head from 'next/head';

const GroupActivity = () => {
  const router = useRouter();
  const { id: queryId } = router.query;
  const { data: session } = useSession();
  const { data } = useQuery<IActivites>(GET_ACTIVITES, {
    variables: {
      programId: queryId
    }
  });

  const [open, setOpen] = useState(data?.getLecturesInProgramForCurrentStudent[0].id);
  const [checked, setChecked] = useState(data?.getLecturesInProgramForCurrentStudent[0].activities[0].id);
  const [type, setType] = useState(data?.getLecturesInProgramForCurrentStudent[0].activities[0].activity_type_id);
  const handleCurrent = (id: number, type_id: number, classId: number) => {
    setCurentActivity({ activityId: id, luctureId: classId });
    setChecked(id);
    setType(type_id);
  };
  const [resources, setResources] = useState(data?.getLecturesInProgramForCurrentStudent[0].activities[0].resources);
  const [curActivity, setCurentActivity] = useState({
    luctureId: data?.getLecturesInProgramForCurrentStudent[0].id,
    activityId: data?.getLecturesInProgramForCurrentStudent[0].activities[0].id
  });
  const { data: activitesData } = useQuery<IStudentActivity>(GET_STUDENT_ACTIVITY, {
    context: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`
      }
    },
    variables: {
      id: Number(curActivity.activityId)
    }
  });
  // console.log(session?.user.access_token);

  useEffect(() => {
    setResources(
      data?.getLecturesInProgramForCurrentStudent
        .filter((t) => t.id == curActivity.luctureId)[0]
        ?.activities?.filter((t) => t.id == curActivity.activityId)[0]?.resources
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

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
            {type === 2 || type === 7 ? <LiveClass /> : <PracticeExercises data={activitesData} Aid={checked} />}
            <GroupActivityTabs resources={resources} />
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
            <div style={{ overflow: 'scroll', height: '800px' }}>
              {data?.getLecturesInProgramForCurrentStudent.map(({ name, activities, id }, index) => (
                <Activity
                  key={index}
                  id={id}
                  title={name}
                  toggle={setOpen}
                  progress={index}
                  open={open === id}
                  week={id}
                >
                  <ActivityList>
                    {activities.map(({ id: activityId, title, activity_type_id }) => (
                      <ActivityTypeRadio
                        key={activityId}
                        classId={id}
                        id={activityId}
                        title={title}
                        type={activity_type_id}
                        setCurrent={handleCurrent}
                        checked={checked === activityId}
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
