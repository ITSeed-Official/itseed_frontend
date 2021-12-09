import type { NextPage } from "next";

import BannerContainer from "components/molecules/BannerContainer";
import SummarySection from "./SummarySection";
import IntroSection from "./IntroSection";
import AlumniSection from "./AlumniSection";
import TimelineSection from "./TimelineSection";
import FAQSection from "./FAQSection";

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
