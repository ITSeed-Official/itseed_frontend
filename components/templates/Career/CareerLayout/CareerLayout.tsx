import type { FC } from 'react';

import { appPath } from 'util/routing.config';

import { BannerType } from 'components/molecules/BannerContainer/enum';
import BannerContainer from 'components/molecules/BannerContainer';
import NextSection from 'components/atoms/NextSection';

const CareerLayout: FC = ({ children }) => {
  return (
    <>
      <BannerContainer
        desktopBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
        mobileBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
        primaryTitle="職涯體驗"
        type={BannerType.general}
      />
      {children}
      <NextSection title="計畫介紹" path={appPath.plan} />
    </>
  );
};

export default CareerLayout;
