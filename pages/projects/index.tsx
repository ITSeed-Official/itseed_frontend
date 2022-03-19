import Projects from 'components/templates/Projects';
import PageMeta from 'components/atoms/PageMeta';
import { getSeos } from 'api/seos';
import { GetServerSideProps } from 'next';
import { withRouter } from 'next/router';
export const getServerSideProps: GetServerSideProps = async () => {
  const [meta] = await Promise.all([getSeos('projects')]);

  return {
    props: {
      meta: meta,
    },
  };
};

export default withRouter(PageMeta(Projects));
