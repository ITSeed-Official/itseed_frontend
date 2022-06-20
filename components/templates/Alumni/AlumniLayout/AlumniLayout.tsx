import type { FC } from 'react';

import { appPath } from 'util/routing.config';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

const AlumniLayout: FC = ({ children }) => {
  return (
    <TemplateWrapper primaryTitle="校友評價" nextSectionPath={appPath.plan} nextSectionTitle="計畫內容">
      {children}
    </TemplateWrapper>
  );
};

export default AlumniLayout;
