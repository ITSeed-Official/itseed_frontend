import type { NextPage } from 'next';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import NextSection from 'components/atoms/NextSection';
import Information from './Information';
import TimelineSection from '../Home/TimelineSection';
import Timer from './Timer';

const DEFAULT_END_TIME = '2027-12-31 23:59:59';

const Recruit: NextPage = () => {
  let endTime = process.env.RECRUIT_END_TIME ?? DEFAULT_END_TIME;

  return (
    <>
      <BannerContainer
        type={BannerType.general}
        primaryTitle="招生資訊"
        subTitle=""
        description=""
        desktopBackgroundImage="/images/recruit/pics/banner--desktop.png"
        mobileBackgroundImage="/images/recruit/pics/banner--mobile.png"
      />
      <Timer endTime={endTime} />
      <Information />
      <TimelineSection />
      <NextSection title="計畫介紹" path="/plan" />
    </>
  );
};

export default Recruit;
