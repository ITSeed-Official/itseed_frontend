import { FC, ReactNode } from 'react';
import GeneralBanner, { GeneralBannerProps } from 'components/molecules/BannerContainer/GeneralBanner';
import NextSection from 'components/atoms/NextSection';

export interface TemplateWrapperProperty extends GeneralBannerProps {
  children: ReactNode;
  nextSectionTitle?: string;
  nextSectionPath?: string;
}

const TemplateWrapper: FC<TemplateWrapperProperty> = ({
  children,
  primaryTitle = '標題',
  subTitle = '副標題',
  description = '內文',
  desktopBackgroundImage,
  mobileBackgroundImage,
  nextSectionTitle,
  nextSectionPath,
}) => {
  return (
    <>
      <GeneralBanner
        primaryTitle={primaryTitle}
        subTitle={subTitle}
        description={description}
        desktopBackgroundImage={desktopBackgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
      />
      {children}
      {nextSectionTitle && nextSectionPath && <NextSection title={nextSectionTitle} path={nextSectionPath} />}
    </>
  );
};

export default TemplateWrapper;
