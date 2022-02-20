import type { NextPage, GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  let detail = {};
  if (context.params && typeof context.params.careerId === 'string') {
    detail = await getCareerDetail(context.params.careerId);
  }

  const list = await getCareerList();

  return {
    props: { detail, list },
  };
};

export default CareerInfo;
