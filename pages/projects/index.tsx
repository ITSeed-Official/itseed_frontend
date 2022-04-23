import { GetStaticProps } from 'next';
import { withRouter } from 'next/router';

import { getSeos } from 'api/seos';

import Projects from 'components/templates/Projects';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta] = await Promise.all([getSeos('projects')]);

  return {
    props: {
      meta: meta,
    },
    revalidate: 1,
  };
};

export default withRouter(PageMeta(Projects));
