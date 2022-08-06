import type { FC } from 'react';

import { appPath } from 'util/routing.config';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

const AlumniLayout: FC = ({ children }) => {
  return (
    <TemplateWrapper primaryTitle="校友評價" nextSectionPath={appPath.about} nextSectionTitle="關於資種">
      {children}
    </TemplateWrapper>
  );
};

export default AlumniLayout;
