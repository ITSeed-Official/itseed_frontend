import { GetStaticProps } from 'next';

import Home from 'components/templates/Home';
import PageMeta from '../components/atoms/PageMeta';
import { getSeos } from 'api/seos';
import { Meta } from '../components/atoms/PageMeta/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const meta: Meta = await getSeos('home');

  return {
    props: { meta: meta },
  };
};

export default PageMeta(Home);
