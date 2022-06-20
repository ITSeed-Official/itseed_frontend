import { GetStaticProps } from 'next';

import Recruit from 'components/templates/Recruit';
import PageMeta from 'components/atoms/PageMeta';
import { getSeos } from 'api/seos';

export const getStaticProps: GetStaticProps = async () => {
  const [meta] = await Promise.all([getSeos('recruit')]);

  return {
    props: {
      meta,
    },
    revalidate: 1,
  };
};

export default PageMeta(Recruit);
