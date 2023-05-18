import type { NextPage } from 'next';

import { appPath } from 'util/routing.config';
import { DEFAULT_END_TIME } from 'util/const';
import TemplateWrapper from 'components/organisms/TemplateWrapper';
import Information from './Information';
import TimelineSection from '../Home/TimelineSection';
import Timer from './Timer';

const Recruit: NextPage = () => {
  return (
    <TemplateWrapper
      primaryTitle="招生資訊"
      subTitle=""
      description=""
      desktopBackgroundImage="/images/recruit/pics/banner--desktop.png"
      mobileBackgroundImage="/images/recruit/pics/banner--mobile.png"
      nextSectionPath={appPath.career}
      nextSectionTitle="職涯體驗"
    >
      <Timer endTime={DEFAULT_END_TIME} />
      <Information />
      <TimelineSection />
    </TemplateWrapper>
  );
};

export default Recruit;
