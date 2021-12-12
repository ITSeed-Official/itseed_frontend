import type { NextPage } from "next";

import BannerContainer from "components/molecules/BannerContainer";
import SummarySection from "components/templates/Home/SummarySection";
import IntroSection from "components/templates/Home/IntroSection";
import AlumniSection from "components/templates/Home/AlumniSection";
import TimelineSection from "components/templates/Home/TimelineSection";
import FAQSection from "components/templates/Home/FAQSection";

const Home: NextPage = () => (
  <>
    <BannerContainer
      backgroundImage="images/homepage/pics/banner.png"
      bigTitle="擁抱每一份獨特"
      subTitle="第十九屆資訊種子培訓計畫"
      subText="報名時間：2022/6/1-7/1"
      buttonText="立即報名"
      showSummaryInfo={true}
    />
    <SummarySection />
    <IntroSection />
    <AlumniSection />
    <TimelineSection />
    <FAQSection limit={3} />
  </>
);

export default Home;
