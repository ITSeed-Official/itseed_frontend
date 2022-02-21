import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/organisms/Layout';
import { LayoutContextProvider } from '../contexts/LayoutContext';
import './inject.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutContextProvider>
  );
}
export default MyApp;
