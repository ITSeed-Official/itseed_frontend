import type { NextPage, GetStaticProps } from 'next';

import { getAlumniList, Alumni } from 'api/alumni';
import { getSeos } from 'api/seos';
import { DEFAULT_REVALIDATE } from 'util/const';

import AlumniLayout from 'components/templates/Alumni/AlumniLayout';
import AlumniLists from 'components/templates/Alumni/AlumniLists';
import PageMeta from 'components/atoms/PageMeta';

interface AlumniProperty {
  data: Alumni[];
}

const Alumni: NextPage<AlumniProperty> = ({ data }) => (
  <AlumniLayout>
    <AlumniLists data={data} />
  </AlumniLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const [meta, data] = await Promise.all([getSeos('testimony'), getAlumniList()]);

  return {
    props: {
      meta,
      data,
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Alumni);
