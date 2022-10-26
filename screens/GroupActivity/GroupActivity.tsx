import React, { useEffect, useState } from 'react';

import {
  ActivityHeader,
  ActivityHeaderTitle,
  ActivityList,
  Container,
  CurrentActivity,
  LeftSide,
  RightSide
} from './GroupActivity.styles';

import { Activity, ActivityTypeRadio, LiveClass } from 'components';
import GroupActivityTabs from './GroupActivityTabs';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_ACTIVITES, IActivites } from './Contstants';
import { useRouter } from 'next/router';
import PracticeExercises from './PracticeExercises';
// import { useSession } from 'next-auth/react';

const GroupActivity = () => {
  const router = useRouter();
  const { id: queryId } = router.query;
  // const { data: session } = useSession();

  const { data } = useQuery<IActivites>(GET_ACTIVITES, {
    variables: {
      programId: queryId
    }
  });
  // console.log(session?.user.access_token);

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
  useEffect(() => {
    // const t = setResources(data?.getLecturesInProgramForCurrentStudent[0].activities.filter);

    setResources(
      data?.getLecturesInProgramForCurrentStudent
        .filter((t) => t.id == curActivity.luctureId)[0]
        ?.activities?.filter((t) => t.id == curActivity.activityId)[0]?.resources
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <Container>
      <LeftSide>
        {type === 2 || type === 7 ? <LiveClass /> : <PracticeExercises Aid={checked} />}
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
        {data?.getLecturesInProgramForCurrentStudent.map(({ name, activities, id }, index) => (
          <Activity key={index} id={id} title={name} toggle={setOpen} progress={index} open={open === id} week={id}>
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
        <div style={{ marginBottom: '200px' }}></div>
      </RightSide>
    </Container>
  );
};

export default GroupActivity;
