import type { FC } from "react";
import Image from "next/image";
import IntroImage from "public/images/homepage/pics/intro.png";
import Button, { ButtonIcon } from "components/atoms/Button";
import SectionTitle from "components/atoms/SectionTitle";
import SectionWrapper from "components/molecules/SectionWrapper";
import FeatureCard from "./FeatureCard";
import styles from "./IntroSection.module.scss";

const data = [
  {
    id: 1,
    title: "專案實作",
    img: "images/homepage/icons/project.svg",
    content: ["累積業界實務", "職涯探索與深化", "跨領域團隊夥伴"],
  },
  {
    id: 2,
    title: "專業課程",
    img: "images/homepage/icons/class.svg",
    content: ["擺脫學校框架", "職場軟實力培養", "突破視野侷限"],
  },
  {
    id: 3,
    title: "校友資源",
    img: "images/homepage/icons/resource.svg",
    content: ["不藏私回饋", "跨代交流分享", "各界人脈建立"],
  },
  {
    id: 4,
    title: "職涯導師",
    img: "images/homepage/icons/mentor.svg",
    content: ["歷屆校友共學", "提攜突破瓶頸", "共好未來發展"],
  },
];

const IntroSection: FC = () => {
  return (
    <SectionWrapper className={styles.introSection}>
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
          <Image src={IntroImage} alt="intro" />
        </div>
      </div>
      <div className={styles.features}>
        {data.map(({ id, title, content, img }) => (
          <FeatureCard key={id} imgSrc={img} title={title} content={content} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default IntroSection;
