import Head from 'next/head';
import { Header } from 'components';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Profile from 'screens/Profile';
import { GET_STUDENT } from 'screens/Profile/Contstants';
import { getSession } from 'next-auth/react';
import { addApolloState, initializeApollo } from 'lib/apolloClient';
import { HttpLink } from '@apollo/client';
import { GetServerSideProps } from 'next';

const ProfilePage: NextPageWithLayout = () => {
  return <Profile />;
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Leagues of Code</title>
      </Head>
      <Header
        fullWidth={false}
        back={true}
        pageTitle="User Profile"
        tabs={[
          {
            current: true,
            title: 'General'
          },
          {
            current: false,
            title: 'Billing'
          },
          {
            current: false,
            title: 'Public'
          }
        ]}
      />
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
      query: GET_STUDENT,
      variables: {
        programId: 1
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

export default ProfilePage;
