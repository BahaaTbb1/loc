import ClassWeeklyActivities from 'components/ClassWeeklyActivities';
import { Header, ProgramDetails, TeacherProfile } from 'components';
import React from 'react';
import {  ProgramContainer } from './ClassDetails.styles';
import ParticipantsC from './Participants';
import { S } from 'globalstyles/index';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_CLASS_DETAILS, IClassDetails } from './Constants';
import { Container, ContentContainer } from 'screens/GroupActivity/GroupActivity.styles';
import Head from 'next/head';
import SideBar from 'components/SideBar';

const ClassDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<IClassDetails>(GET_CLASS_DETAILS, {
    variables: {
      moduleId: 1,
      programId: id
    }
  });

  return (
    <>
       <Head>
        <title>Leagues of Code</title>
      </Head>
      <Header
        pageTitle="Hello World"
        tabs={[
          {
            current: true,
            title: 'Overview'
          },
          {
            current: false,
            title: 'Activities'
          },
          {
            current: false,
            title: 'Leaderboard'
          }
        ]}
      />
      <SideBar />
    <ContentContainer>
      <Container>
      <ProgramContainer>
        {data && data.getStudentOverviewFromModule ? (
          <ProgramDetails
          name={data.getStudentOverviewFromModule.module.name}
          startDate={data.getStudentOverviewFromModule.module.start_datetime}
          endDate={data.getStudentOverviewFromModule.module.end_datetime}
          problemsSolved={data.getStudentOverviewFromModule.total_problems_solved}
          porblems={data.getStudentOverviewFromModule.total_problems}
          activitesCompleted={data.getStudentOverviewFromModule.total_activities_completed}
          activites={data.getStudentOverviewFromModule.total_activities}
          />
          ) : (
            <div>No Data Provided</div>
            )}
        <ClassWeeklyActivities
          activites={data?.getCurrentModuleForCurrentStudent.lectures[0].activities}
          current={4}
          weeks={12}
          />
      </ProgramContainer>
      <S.Flex direction="column" gap="32">
        <TeacherProfile
          name={`${data?.getCurrentModuleForCurrentStudent.teacher?.user?.firstname} ${data?.getCurrentModuleForCurrentStudent.teacher?.user?.lastname}`}
          profession={data?.getCurrentModuleForCurrentStudent.teacher?.title}
          mail={data?.getCurrentModuleForCurrentStudent.teacher?.user?.email}
          />
        <ParticipantsC participants={data?.getCurrentModuleForCurrentStudent.students} />
      </S.Flex>
          </Container>
    </ContentContainer>
    </>
  
  );
};

export default ClassDetails;
