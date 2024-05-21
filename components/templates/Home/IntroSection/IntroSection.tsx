import type { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { withRouter, NextRouter } from 'next/router';
import Button, { ButtonIcon } from 'components/atoms/Button';
import SectionWrapper from 'components/molecules/SectionWrapper';
import FeatureCard from './FeatureCard';
import styles from './IntroSection.module.scss';
import { appPath } from 'util/routing.config';

const features = [
  {
    title: '三大專案',
    imgSrc: '/images/homepage/icons/project.svg',
    // hoverImgSrc: "/images/homepage/icons/project.svg",
    link: appPath.projects,
    content: ['TUV 專案', '職涯專案', '招生專案'],
  },
  {
    title: '專業課程',
    imgSrc: '/images/homepage/icons/class.svg',
    // hoverImgSrc: "/images/homepage/icons/class.svg",
    link: appPath.courses,
    content: ['15+ 業師培訓課程', '培養協作軟實力', '建立團隊與實務能力'],
  },
  {
    title: '校友資源',
    imgSrc: '/images/homepage/icons/resource.svg',
    // hoverImgSrc: "/images/homepage/icons/resource.svg",
    link: appPath.alumni,
    content: ['不藏私回饋', '跨代交流分享', '各界人脈建立'],
  },
  {
    title: '職涯導師',
    imgSrc: '/images/homepage/icons/mentor.png',
    // hoverImgSrc: "/images/homepage/icons/mentor.svg",
    link: appPath.careerCompany,
    content: ['歷屆校友共學', '提攜突破瓶頸', '共好未來發展'],
  },
];

const Desktop = ({ router, displayFeatureCard }: IProps) => (
  <SectionWrapper className={classNames([styles.introSection, styles.desktopOnly])}>
    <div className={styles.intro}>
      <div className={styles.introImageWrapper}>
        <Image src="/images/homepage/pics/intro.jpg" alt="intro" layout="fill" priority />
      </div>
      <div className={styles.dummySpacing} />
      <div className={styles.introContent}>
        <h2 className={styles.introTitle}>計畫介紹</h2>
        <p className={styles.introDescription}>
          資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 3 大專案，參與 10+
          堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。
        </p>
        <Button
          text="計畫內容"
          onClick={() => {
            router.push(appPath.plan);
          }}
          icon={ButtonIcon.arrow}
        />
      </div>
    </div>
    {displayFeatureCard && (
      <div className={styles.features}>
        {features.map((data) => (
          <FeatureCard key={data.title} {...data} />
        ))}
      </div>
    )}
  </SectionWrapper>
);

const Mobile = ({ router, displayFeatureCard }: IProps) => (
  <div className={styles.mobileOnly}>
    <SectionWrapper className={styles.introSectionMobileTop}>
      <h2 className={styles.introTitle}>計畫介紹</h2>
      <p className={styles.introDescription}>
        資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 3 大專案，參與 10+
        堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。
      </p>
      <Button
        text="計畫內容"
        onClick={() => {
          router.push(appPath.plan);
        }}
        icon={ButtonIcon.arrow}
      />
    </SectionWrapper>
    <div className={styles.introImageWrapper}>
      <Image src="/images/homepage/pics/intro.jpg" alt="intro" layout="fill" priority />
    </div>
    {displayFeatureCard && (
      <SectionWrapper className={styles.introSectionMobileBottom}>
        <div className={styles.features}>
          {features.map((data) => (
            <FeatureCard key={data.title} {...data} />
          ))}
        </div>
      </SectionWrapper>
    )}
  </div>
);

interface IProps {
  router: NextRouter;
  displayFeatureCard?: boolean;
}

const IntroSection: FC<IProps> = ({ router, displayFeatureCard = true }: IProps) => {
  return (
    <>
      <Desktop router={router} displayFeatureCard={displayFeatureCard} />
      <Mobile router={router} displayFeatureCard={displayFeatureCard} />
    </>
  );
};

export default withRouter(IntroSection);
