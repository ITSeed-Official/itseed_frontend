import type { NextPage, GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async () => {
  const [meta, data] = await Promise.all([getSeos('career'), getCareerList()]);

  return {
    props: {
      meta,
      data,
    },
    revalidate: 1,
  };
};

export default PageMeta(Career);
