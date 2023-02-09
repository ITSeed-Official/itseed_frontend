import type { AppProps } from 'next/app';

import Layout from '../components/organisms/Layout';
import { LayoutContextProvider } from '../contexts/LayoutContext';
import { AuthProvider } from '../contexts/AuthContext';

import './inject.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('MyApp', Component, pageProps);

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
