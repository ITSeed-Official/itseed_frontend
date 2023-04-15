import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { LayoutContextProvider } from 'contexts/LayoutContext';
import { AuthProvider } from 'contexts/AuthContext';

import Layout from 'components/organisms/Layout';

import TagManager from 'react-gtm-module';

import './inject.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const gtmId = process.env.GTM_ID ?? '';
    TagManager.initialize({ gtmId });
  }, []);

  return (
    <AuthProvider>
      <LayoutContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutContextProvider>
    </AuthProvider>
  );
}
export default MyApp;
