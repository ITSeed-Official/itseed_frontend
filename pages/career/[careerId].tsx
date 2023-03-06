import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getCareerDetail, CareerDetailType, getCareerList, CareerExperience } from 'api/careers';
import { appPath } from 'util/routing.config';
import { DEFAULT_REVALIDATE } from 'util/const';

import CareerLayout from 'components/templates/Career/CareerLayout';
import CareerDetail from 'components/templates/Career/CareerDetail';
import PageMeta from 'components/atoms/PageMeta';

interface CareerInfoProperty {
  detail: CareerDetailType;
  list: CareerExperience[];
}

const CareerInfo: NextPage<CareerInfoProperty> = ({ detail, list }) => {
  return (
    <CareerLayout>
      <CareerDetail detail={detail} list={list} />
    </CareerLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await getCareerList();
  const paramsList = list.map(({ id }) => ({ params: { careerId: id.toString() } }));

  return {
    paths: paramsList,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [detail, list] = await Promise.all([getCareerDetail(params!.careerId as string), getCareerList()]);

  if (Object.keys(detail).length === 0) {
    return {
      notFound: true,
    };
  }

  const metaTitle = `${detail.mentee}實習${detail.position}心得|資訊種子培訓計畫|職涯體驗`;
  const metaDescription = `${detail.content
    .substring(0, 160)
    .replace(/[\r\n#]+/g, '')
    .trim()}}...`;

  const meta = {
    title: metaTitle,
    description: metaDescription,
    og_title: metaTitle,
    og_description: metaDescription,
    og_url: `${appPath.career}/${detail.id}`,
    og_image: detail.image.url,
  };

  return {
    props: { detail, list, meta },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(CareerInfo);
