import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getAlumniDetail, getAlumniList, Alumni } from 'api/alumni';
import { appPath } from 'util/routing.config';
import { DEFAULT_REVALIDATE } from 'util/const';

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

  const metaTitle = `${detail.title}|by ${detail.name}|資訊種子培訓計畫|校友評價`;
  const metaDescription = `${detail.content
    .substring(0, 160)
    .replace(/[\r\n#]+/g, '')
    .trim()}...`;

  const meta = {
    title: metaTitle,
    description: metaDescription,
    og_title: metaTitle,
    og_description: metaDescription,
    og_url: `${appPath.alumni}/${detail.id}`,
    og_image: detail.image.url,
  };

  return {
    props: { detail, list, meta },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(AlumniInfo);
