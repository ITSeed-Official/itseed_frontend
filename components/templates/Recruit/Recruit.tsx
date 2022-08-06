import type { NextPage } from 'next';

import { appPath } from 'util/routing.config';
import { DEFAULT_END_TIME } from 'util/const';
import TemplateWrapper from 'components/organisms/TemplateWrapper';
import Information from './Information';
import TimelineSection from '../Home/TimelineSection';
import Timer from './Timer';

const Recruit: NextPage = () => {
  let endTime = process.env.RECRUIT_END_TIME ?? DEFAULT_END_TIME;

  return (
    <TemplateWrapper
      primaryTitle="招生資訊"
      subTitle=""
      description=""
      desktopBackgroundImage="/images/recruit/pics/banner--desktop.png"
      mobileBackgroundImage="/images/recruit/pics/banner--mobile.png"
      nextSectionPath={appPath.plan}
      nextSectionTitle="計畫內容"
    >
      <Timer endTime={endTime} />
      <Information />
      <TimelineSection />
    </TemplateWrapper>
  );
};

export default Recruit;
