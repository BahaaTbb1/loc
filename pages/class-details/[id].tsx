import { HttpLink } from '@apollo/client';
import { Header, SideBar } from 'components';
import { initializeApollo, addApolloState } from 'lib/apolloClient';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import ClassDetails from 'screens/ClassDetails';
import { GET_CLASS_DETAILS } from 'screens/ClassDetails/Constants';

import type { NextPageWithLayout } from '../_app';

const ClassDetailsPage: NextPageWithLayout = (props) => {
  return <ClassDetails />;
};

ClassDetailsPage.getLayout = function getLayout(page: ReactElement) {
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
      <>{page}</>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const session = await getSession({ req: context.req });
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
      query: GET_CLASS_DETAILS,
      variables: {
        moduleId: 1,
        programId: context.params?.id
      }
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

export default ClassDetailsPage;
