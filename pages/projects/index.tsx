import Projects from 'components/templates/Projects';
import PageMeta from 'components/atoms/PageMeta';
import { getSeos } from 'api/seos';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const [meta] = await Promise.all([getSeos('projects')]);

  return {
    props: {
      meta: meta,
    },
  };
};

export default PageMeta(Projects);
