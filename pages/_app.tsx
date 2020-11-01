import { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';

import '@/assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';

function App({ Component , pageProps }: AppProps) {
    const Layout = (Component as any).layout || (({ children }) => <>{children}</>);
    return (
        <React.Fragment>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Next Starter</title>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" rel="stylesheet" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      );
}

export default App