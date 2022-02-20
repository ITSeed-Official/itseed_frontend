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
  const [detail, list] = await Promise.all([getCareerDetail(context!.params!.careerId as string), getCareerList()]);

  if (Object.keys(detail).length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { detail, list },
  };
};

export default CareerInfo;
