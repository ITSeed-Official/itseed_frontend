import type { FC } from 'react';

import { CareerDetailType, CareerExperience } from 'api/careers';

import DesktopComponent from './DesktopComponent';
import MobileComponent from './MobileComponent';

export type CareerDetailProperty = {
  detail: CareerDetailType;
  list: CareerExperience[];
};

const CareerDetail: FC<CareerDetailProperty> = ({ detail, list }) => {
  return (
    <>
      <MobileComponent detail={detail} list={list} />
      <DesktopComponent detail={detail} list={list} />
    </>
  );
};

export default CareerDetail;
