import type { NextPage, GetServerSideProps } from "next";

import { getCareerList, CareerExperience } from "api/careers";

import CareerLayout from "components/templates/Career/CareerLayout";
import CareerLists from "components/templates/Career/CareerLists";

interface CareerProperty {
  data: CareerExperience[];
}

const Career: NextPage<CareerProperty> = ({ data }) => (
  <CareerLayout>
    <CareerLists data={data} />
  </CareerLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getCareerList();

  return {
    props: {
      data,
    },
  };
};

export default Career;
