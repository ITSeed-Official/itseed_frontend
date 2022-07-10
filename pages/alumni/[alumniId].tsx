import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getAlumniDetail, getAlumniList, Alumni } from 'api/alumni';
import { appPath } from 'util/routing.config';

import AlumniLayout from 'components/templates/Alumni/AlumniLayout';
import AlumniDetail from 'components/templates/Alumni/AlumniDetail';
import PageMeta from 'components/atoms/PageMeta';

interface AlumniInfoProperty {
  detail: Alumni;
  list: Alumni[];
}

const AlumniInfo: NextPage<AlumniInfoProperty> = ({ detail, list }) => {
  return (
    <AlumniLayout>
      <AlumniDetail detail={detail} list={list} />
    </AlumniLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await getAlumniList();
  const paramsList = list.map(({ id }) => ({ params: { alumniId: id.toString() } }));

  return {
    paths: paramsList,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [detail, list] = await Promise.all([getAlumniDetail(params!.alumniId as string), getAlumniList()]);

  if (Object.keys(detail).length === 0) {
    return {
      notFound: true,
    };
  }

  const meta = {
    title: `${detail.name} ${detail.position}`,
    description: detail.title,
    og_title: `${detail.name} ${detail.position}`,
    og_description: detail.title,
    og_url: `${appPath.alumni}/${detail.id}`,
    og_image: detail.image.url,
  };

  return {
    props: { detail, list, meta },
    revalidate: 1,
  };
};

export default PageMeta(AlumniInfo);
