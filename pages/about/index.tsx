import type { GetStaticProps } from 'next';

import About from 'components/templates/About';
import PageMeta from 'components/atoms/PageMeta';

import { getSeos } from 'api/seos';
import { getGraduates } from 'api/graduates';

import { CURRENT_SESSION } from 'util/const';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, graduates] = await Promise.all([getSeos('graduates'), getGraduates(CURRENT_SESSION)]);

  return {
    props: {
      meta: meta,
      graduates: graduates,
    },
    revalidate: 1,
  };
};

export default PageMeta(About);
