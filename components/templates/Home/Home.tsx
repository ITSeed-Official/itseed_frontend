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
import { NEW_SESSION } from 'util/const';

interface HomeData {
  alumniList: Alumni[];
}

const session = `第 ${NEW_SESSION} 屆資訊種子培訓計畫`;

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
      subTitle={session}
      description="報名時間 2023.6.1 - 7.11"
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
