import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getCareerDetail, CareerDetailType, getCareerList, CareerExperience } from 'api/careers';

import CareerLayout from 'components/templates/Career/CareerLayout';
import CareerDetail from 'components/templates/Career/CareerDetail';

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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [detail, list] = await Promise.all([getCareerDetail(params!.careerId as string), getCareerList()]);

  if (Object.keys(detail).length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { detail, list },
    revalidate: 1,
  };
};

export default CareerInfo;
