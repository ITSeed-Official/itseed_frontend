import type { AppProps } from 'next/app';

import { LayoutContextProvider } from 'contexts/LayoutContext';
import { AuthProvider } from 'contexts/AuthContext';

import Layout from 'components/organisms/Layout';

import './inject.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
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
