import { HttpLink } from '@apollo/client';
import { SideBar, Header } from 'components';
import { initializeApollo, addApolloState } from 'lib/apolloClient';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Courses from 'screens/Courses';
import { GET_COURSES } from 'screens/Courses/Contstants';
import type { NextPageWithLayout } from './_app';

const CoursesPage: NextPageWithLayout = () => {
  return <Courses />;
};

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Leagues of Code</title>
      </Head>
      <Header
        pageTitle="Courses"
        tabs={[
          {
            current: true,
            title: 'My Courses'
          },
          {
            current: false,
            title: 'All Courses'
          }
        ]}
      />
      <SideBar />
      <>{page}</>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const session = await getSession({ req });
    const apolloClient = initializeApollo();
    const httpLink = new HttpLink({
      uri: process.env.GRAPHQL_URL + '/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      headers: {
        authorization: `Bearer ` + session?.user.access_token
      }
    });
    apolloClient.setLink(httpLink);
    await apolloClient.query({
      query: GET_COURSES
    });

    return addApolloState(apolloClient, {
      props: {}
    });
  } catch (error: any) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      }
    };
  }
};

export default CoursesPage;
