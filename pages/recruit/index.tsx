import { GetStaticProps } from 'next';

import Recruit from 'components/templates/Recruit';
import PageMeta from 'components/atoms/PageMeta';
import { getSeos } from 'api/seos';
import { DEFAULT_REVALIDATE } from 'util/const';

export const getStaticProps: GetStaticProps = async () => {
  const [meta] = await Promise.all([getSeos('recruit')]);

  return {
    props: {
      meta,
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Recruit);
