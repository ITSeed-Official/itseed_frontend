import { GetStaticProps } from 'next';

import { getSeos } from 'api/seos';
import { getAlumniList } from 'api/alumni';
import { DEFAULT_REVALIDATE } from 'util/const';

import Home from 'components/templates/Home';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, alumniList] = await Promise.all([getSeos('home'), getAlumniList()]);

  return {
    props: {
      meta,
      data: {
        alumniList,
      },
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Home);
