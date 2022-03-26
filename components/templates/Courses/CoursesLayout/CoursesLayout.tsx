import type { FC } from 'react';
import { BannerType } from 'components/molecules/BannerContainer/enum';
import BannerContainer from 'components/molecules/BannerContainer';

type CoursesLayoutProperty = {
  primaryTitle?: string;
  subTitle?: string;
  description?: string;
};

const CoursesLayout: FC<CoursesLayoutProperty> = ({
  primaryTitle = '講座課程',
  subTitle = '',
  description = '',
  children,
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
    </>
  );
};

export default CoursesLayout;
