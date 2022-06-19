import type { FC } from 'react';

import { appPath } from 'util/routing.config';

import { BannerType } from 'components/molecules/BannerContainer/enum';
import BannerContainer from 'components/molecules/BannerContainer';
import NextSection from 'components/atoms/NextSection';

type AlumniLayoutProperty = {
  primaryTitle?: string;
  subTitle?: string;
  description?: string;
};

const AlumniLayout: FC<AlumniLayoutProperty> = ({
  children,
  primaryTitle = '校友評價',
  subTitle = '標題',
  description = '內文',
}) => {
  return (
    <>
      <BannerContainer
        desktopBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
        mobileBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
        primaryTitle={primaryTitle}
        subTitle={subTitle}
        description={description}
        type={BannerType.general}
      />
      {children}
      <NextSection title="計畫介紹" path={appPath.plan} />
    </>
  );
};

export default AlumniLayout;
