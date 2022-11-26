import { GetStaticProps } from 'next';
import { withRouter } from 'next/router';

import { getSeos } from 'api/seos';
import { DEFAULT_REVALIDATE } from 'util/const';

import Projects from 'components/templates/Projects';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta] = await Promise.all([getSeos('projects')]);

  return {
    props: {
      meta: meta,
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default withRouter(PageMeta(Projects));
