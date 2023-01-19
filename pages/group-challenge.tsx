import Head from 'next/head';
import GroupChallenge from 'screens/GroupChallenge';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { addApolloState, initializeApollo } from 'lib/apolloClient';
import { HttpLink } from '@apollo/client';
import { GET_STUDENT_ACTIVITY } from 'screens/GroupChallenge/ProblemDetails/Submissions/Contstants';

const GroupChallengePage: NextPageWithLayout = () => {
  return <GroupChallenge />;
};

GroupChallengePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Leagues of Code</title>
      </Head>
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
      query: GET_STUDENT_ACTIVITY,
      variables: {
        id: 1
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
export default GroupChallengePage;
