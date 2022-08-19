import { FC, ReactNode } from 'react';

import GeneralBanner, { GeneralBannerProps } from 'components/molecules/GeneralBanner/GeneralBanner';
import NextSection, { Type as NextSectionType } from 'components/atoms/NextSection';

export interface TemplateWrapperProperty extends GeneralBannerProps {
  children: ReactNode;
  nextSectionType?: NextSectionType;
  nextSectionTitle?: string;
  nextSectionPath?: string;
}

const TemplateWrapper: FC<TemplateWrapperProperty> = ({
  children,
  primaryTitle = '',
  subTitle = '',
  description = '',
  desktopBackgroundImage,
  mobileBackgroundImage,
  nextSectionTitle,
  nextSectionType,
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
      {nextSectionTitle && nextSectionPath && (
        <NextSection title={nextSectionTitle} path={nextSectionPath} type={nextSectionType} />
      )}
    </>
  );
};

export default TemplateWrapper;
