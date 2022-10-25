import Head from 'next/head';
import { Header, SideBar } from 'components';
import Classes from 'screens/Classes';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';

const ClassesPages: NextPageWithLayout = () => {
  return <Classes />;
};

ClassesPages.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Leagues of Code</title>
      </Head>

      <SideBar />
      <>{page}</>
    </>
  );
};

export default ClassesPages;
