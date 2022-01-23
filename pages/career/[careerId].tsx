import type { NextPage, GetServerSideProps } from 'next';
import { getCareerDetail, CareerDetailType } from 'api/careers';

import CareerLayout from 'components/templates/Career/CareerLayout';
import CareerDetail from 'components/templates/Career/CareerDetail';

interface CareerInfoProperty {
  data: CareerDetailType;
}

const CareerInfo: NextPage<CareerInfoProperty> = ({ data }) => {
  return (
    <CareerLayout>
      <CareerDetail data={data} />
    </CareerLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data = {};
  if (context.params && typeof context.params.careerId === 'string') {
    data = await getCareerDetail(context.params.careerId);
  }

  return {
    props: { data },
  };
};

export default CareerInfo;
