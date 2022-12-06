import { ToastProvider } from 'components/Toast';
import ThemeLayer from 'modules/ThemeModule/Theme';
import type { AppProps } from 'next/app';
import { AppContainer } from 'App.styles';
import { GlobalStyles } from 'globalstyles';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useApollo } from 'lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from "next-auth/react"

import ErrorBoundary from 'utils/ErrorBoundry';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps);
  
  return getLayout(
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
          crossOrigin="anonymous"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ErrorBoundary>
          <ToastProvider>
            <ThemeLayer>
              <AppContainer>
                <GlobalStyles />
                <Component {...pageProps} />
              </AppContainer>
            </ThemeLayer>
          </ToastProvider>
        </ErrorBoundary>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
