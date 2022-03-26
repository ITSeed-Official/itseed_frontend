import { GetStaticProps } from 'next';

import { getVisitations } from 'api/visitations';
import { getSeos } from 'api/seos';

import Visitation from 'components/templates/Visitation';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, visitations] = await Promise.all([getSeos('visitation'), getVisitations()]);

  return {
    props: {
      meta,
      visitations,
    },
    revalidate: 1,
  };
};

export default PageMeta(Visitation);
