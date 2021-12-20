import type { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import Button, { ButtonIcon } from "components/atoms/Button";
import SectionWrapper from "components/molecules/SectionWrapper";
import FeatureCard from "./FeatureCard";
import styles from "./IntroSection.module.scss";

const features = [
  {
    title: "專案實作",
    imgSrc: "/images/homepage/icons/project.svg",
    hoverImgSrc: "/images/homepage/icons/project.svg",
    link: "/plan#projects",
    content: ["累積業界實務", "職涯探索與深化", "跨領域團隊夥伴"],
  },
  {
    title: "專業課程",
    imgSrc: "/images/homepage/icons/class.svg",
    hoverImgSrc: "/images/homepage/icons/class.svg",
    link: "/plan#classes",
    content: ["擺脫學校框架", "職場軟實力培養", "突破視野侷限"],
  },
  {
    title: "校友資源",
    imgSrc: "/images/homepage/icons/resource.svg",
    hoverImgSrc: "/images/homepage/icons/resource.svg",
    link: "/sharing",
    content: ["不藏私回饋", "跨代交流分享", "各界人脈建立"],
  },
  {
    title: "職涯導師",
    imgSrc: "/images/homepage/icons/mentor.svg",
    hoverImgSrc: "/images/homepage/icons/mentor.svg",
    link: "/career",
    content: ["歷屆校友共學", "提攜突破瓶頸", "共好未來發展"],
  },
];

const Desktop = () => (
  <SectionWrapper
    className={classNames([styles.introSection, styles.desktopOnly])}
  >
    <div className={styles.intro}>
      <div className={styles.introContent}>
        <h2 className={styles.introTitle}>計畫介紹</h2>
        <p className={styles.introDescription}>
          資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行
          4 大專案，參與 10+
          堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。
        </p>
        <Button text="瞭解更多" icon={ButtonIcon.arrow} />
      </div>
      <div className={styles.dummySpacing} />
      <div className={styles.introImageWrapper}>
        <Image
          src="/images/homepage/pics/intro.png"
          alt="intro"
          layout="fill"
        />
      </div>
    </div>
    <div className={styles.features}>
      {features.map((data) => (
        <FeatureCard key={data.title} {...data} />
      ))}
    </div>
  </SectionWrapper>
);

const Mobile = () => (
  <div className={styles.mobileOnly}>
    <SectionWrapper className={styles.introSectionMobileTop}>
      <h2 className={styles.introTitle}>計畫介紹</h2>
      <p className={styles.introDescription}>
        資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 4
        大專案，參與 10+
        堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。
      </p>
      <Button text="瞭解更多" icon={ButtonIcon.arrow} />
    </SectionWrapper>
    <div className={styles.introImageWrapper}>
      <Image src="/images/homepage/pics/intro.png" alt="intro" layout="fill" />
    </div>
    <SectionWrapper className={styles.introSectionMobileBottom}>
      <div className={styles.features}>
        {features.map((data) => (
          <FeatureCard key={data.title} {...data} />
        ))}
      </div>
    </SectionWrapper>
  </div>
);

const IntroSection: FC = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default IntroSection;
