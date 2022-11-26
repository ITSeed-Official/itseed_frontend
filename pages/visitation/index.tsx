import { GetStaticProps } from 'next';

import { getVisitations } from 'api/visitations';
import { getSeos } from 'api/seos';

import { DEFAULT_REVALIDATE } from 'util/const';
import Visitation from 'components/templates/Visitation';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, visitations] = await Promise.all([getSeos('visitation'), getVisitations()]);

  return {
    props: {
      meta,
      visitations,
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Visitation);
