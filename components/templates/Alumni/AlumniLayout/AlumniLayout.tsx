import type { FC } from 'react';

import { appPath } from 'util/routing.config';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

const AlumniLayout: FC = ({ children }) => {
  return (
    <TemplateWrapper
      primaryTitle="校友評價"
      nextSectionPath={appPath.about}
      nextSectionTitle="關於資種"
      desktopBackgroundImage="/images/alumni/pics/alumni_desktop_banner@2x.png"
      mobileBackgroundImage="/images/alumni/pics/alumni_mobile_banner@2x.png"
    >
      {children}
    </TemplateWrapper>
  );
};

export default AlumniLayout;
