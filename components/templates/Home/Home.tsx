import type { NextPage } from 'next';

import { withRouter, NextRouter } from 'next/router';
import { appPath } from 'util/routing.config';
import { Alumni } from 'api/alumni';
import { ButtonIcon } from 'components/atoms/Button';

import SummarySection from 'components/templates/Home/SummarySection';
import IntroSection from 'components/templates/Home/IntroSection';
import AlumniSection from 'components/templates/Home/AlumniSection';
import TimelineSection from 'components/templates/Home/TimelineSection';
import FAQSection from 'components/templates/Home/FAQSection';
import SlashBanner from 'components/molecules/SlashBanner';
import NextSection, { Type as NextSectionType } from 'components/atoms/NextSection';

interface HomeData {
  alumniList: Alumni[];
}

const Home: NextPage<{ data: HomeData; router: NextRouter }> = ({ router, data }) => (
  <>
    <SlashBanner
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
      ctaOnClick={() => router.push(appPath.apply)}
    />
    <SummarySection />
    <IntroSection />
    <AlumniSection alumniList={(data && data.alumniList) || []} />
    <TimelineSection />
    <FAQSection limit={3} />
    <NextSection title="計畫內容" path={appPath.plan} type={NextSectionType.green} />
  </>
);

export default withRouter(Home);
