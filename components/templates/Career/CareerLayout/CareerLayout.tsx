import type { FC } from 'react';

import { useMedia } from 'util/hooks/useMedia';

import { BannerType } from 'components/molecules/BannerContainer/enum';
import BannerContainer from 'components/molecules/BannerContainer';

const CareerLayout: FC = ({ children }) => {
  const media = useMedia();
  const backgroundImage =
    media === 'mobile'
      ? '/images/career/pics/career_mobile_banner@3x.png'
      : '/images/career/pics/career_desktop_banner@2x.png';

  return (
    <>
      <BannerContainer backgroundImage={backgroundImage} primaryTitle="職涯體驗" type={BannerType.general} />
      {children}
    </>
  );
};

export default CareerLayout;
