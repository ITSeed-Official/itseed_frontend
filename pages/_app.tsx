import type { AppProps } from 'next/app';

import { LayoutContextProvider } from 'contexts/LayoutContext';
import { AuthProvider } from 'contexts/AuthContext';
import { ModalProvider } from 'contexts/ModalContext';

import Layout from 'components/organisms/Layout';

import './inject.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalProvider>
        <LayoutContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutContextProvider>
      </ModalProvider>
    </AuthProvider>
  );
}
export default MyApp;
