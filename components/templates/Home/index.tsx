import type { NextPage } from 'next';

import { ButtonIcon } from 'components/atoms/Button';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import SummarySection from 'components/templates/Home/SummarySection';
import IntroSection from 'components/templates/Home/IntroSection';
import AlumniSection from 'components/templates/Home/AlumniSection';
// import TimelineSection from "components/templates/Home/TimelineSection";
import FAQSection from 'components/templates/Home/FAQSection';

const Home: NextPage = () => (
  <>
    <BannerContainer
      type={BannerType.slash}
      bannerImage="/images/homepage/pics/banner@2x.png"
      PrimaryTitleContent={() => (
        <>
          <em>擁抱</em>
          <br />
          每一份<em>獨特</em>
        </>
      )}
      subTitle="第十九屆資訊種子培訓計畫"
      description="報名時間 2022.6.1 - 7.11"
      ctaText="立即報名"
      ctaIcon={ButtonIcon.arrow}
      ctaOnClick={() => console.log('click')}
    />
    <SummarySection />
    <IntroSection />
    <AlumniSection />
    <FAQSection limit={3} />
  </>
);

export default Home;
