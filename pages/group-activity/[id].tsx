import { HttpLink } from '@apollo/client';
import { Header, SideBar } from 'components';
import { addApolloState, initializeApollo } from 'lib/apolloClient';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import GroupActivity from 'screens/GroupActivity';
import { GET_ACTIVITES } from 'screens/GroupActivity/Contstants';
import type { NextPageWithLayout } from '../_app';

const GroupActivityPage: NextPageWithLayout = () => {
  return <GroupActivity />;
};

GroupActivityPage.getLayout = function getLayout(page: ReactElement) {
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
      <SideBar />
      <>{page}</>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await getSession({ req: ctx.req });
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
      query: GET_ACTIVITES,
      variables: {
        programId: ctx.params?.id
      }
    });

    return addApolloState(apolloClient, {
      props: {}
    });
  } catch (error: any) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
};

export default GroupActivityPage;
