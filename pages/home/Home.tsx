import type { NextPage } from "next";

import BannerContainer from "components/molecules/BannerContainer";
import SummarySection from "components/templates/Home/SummarySection";
import IntroSection from "components/templates/Home/IntroSection";
import AlumniSection from "components/templates/Home/AlumniSection";
import TimelineSection from "components/templates/Home/TimelineSection";
import FAQSection from "components/templates/Home/FAQSection";

const Home: NextPage = () => (
  <>
    <BannerContainer backgroundImage="images/homepage/pics/banner.png" />
    <SummarySection />
    <IntroSection />
    <AlumniSection />
    <TimelineSection />
    <FAQSection limit={3} />
  </>
);

export default Home;
