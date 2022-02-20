import type { NextPage, GetServerSideProps } from 'next';

import { getCareerList, CareerExperience } from 'api/careers';
import { getSeos } from 'api/seos';

import CareerLayout from 'components/templates/Career/CareerLayout';
import CareerLists from 'components/templates/Career/CareerLists';
import PageMeta from 'components/atoms/PageMeta';

interface CareerProperty {
  data: CareerExperience[];
}

const Career: NextPage<CareerProperty> = ({ data }) => (
  <CareerLayout>
    <CareerLists data={data} />
  </CareerLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const [meta, data] = await Promise.all([getSeos('career'), getCareerList()]);

  return {
    props: {
      meta,
      data,
    },
  };
};

export default PageMeta(Career);
