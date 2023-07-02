import type { NextPage } from 'next';

import { appPath } from 'util/routing.config';
import { START_TIME, END_TIME } from 'util/const';
import TemplateWrapper from 'components/organisms/TemplateWrapper';
import Information from './Information';
import TimelineSection from '../Home/TimelineSection';
import Timer from './Timer';

const Recruit: NextPage = () => {
  return (
    <TemplateWrapper
      primaryTitle="招生資訊"
      subTitle=""
      description="資訊種子是為期一年的培訓計畫，本年度的報名期間為 2023.06.02 - 2023.07.04，給自己一個加速成長的機會，心動不如馬上行動！"
      desktopBackgroundImage="/images/recruit/pics/recruit_desktop_banner@2x.png"
      mobileBackgroundImage="/images/recruit/pics/recruit_mobile_banner@2x.png"
      nextSectionPath={appPath.career}
      nextSectionTitle="職涯體驗"
    >
      <Timer startTime={START_TIME} endTime={END_TIME} />
      <Information />
      <TimelineSection />
    </TemplateWrapper>
  );
};

export default Recruit;
