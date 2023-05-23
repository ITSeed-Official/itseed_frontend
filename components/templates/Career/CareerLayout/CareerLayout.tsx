import type { FC } from 'react';

import { appPath } from 'util/routing.config';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

const CareerLayout: FC = ({ children }) => {
  return (
    <TemplateWrapper
      primaryTitle="職涯體驗"
      description="三大專案中的職涯專案將給予學員探索職涯的機會，透過公司實習、個人指導、職涯訪談等方式，讓學員有機會將所學運用到職場上，同時也累積業界所需的軟硬實力。"
      nextSectionTitle="校友評價"
      nextSectionPath={appPath.alumni}
      desktopBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
      mobileBackgroundImage="/images/career/pics/career_mobile_banner@3x.png"
    >
      {children}
    </TemplateWrapper>
  );
};

export default CareerLayout;
