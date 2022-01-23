import type { FC } from 'react';
import { BannerType } from 'components/molecules/BannerContainer/enum';
import BannerContainer from 'components/molecules/BannerContainer';

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
    </>
  );
};

export default CareerLayout;
