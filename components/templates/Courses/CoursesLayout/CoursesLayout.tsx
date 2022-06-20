import type { FC } from 'react';

import { appPath } from 'util/routing.config';
import TemplateWrapper, { TemplateWrapperProperty } from 'components/organisms/TemplateWrapper';

type CourseLayoutProperty = Pick<TemplateWrapperProperty, 'subTitle' | 'description'>;

const CoursesLayout: FC<CourseLayoutProperty> = ({ children, subTitle, description }) => {
  return (
    <TemplateWrapper
      desktopBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
      mobileBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
      primaryTitle="講座課程"
      subTitle={subTitle}
      description={description}
      nextSectionPath={appPath.projects}
      nextSectionTitle="專案實作"
    >
      {children}
    </TemplateWrapper>
  );
};

export default CoursesLayout;
