import type { FC } from 'react';

import { appPath } from 'util/routing.config';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

const CareerLayout: FC = ({ children }) => {
  return (
    <TemplateWrapper
      primaryTitle="職涯體驗"
      nextSectionTitle="校友評價"
      nextSectionPath={appPath.alumni}
      desktopBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
      mobileBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
    >
      {children}
    </TemplateWrapper>
  );
};

export default CareerLayout;
