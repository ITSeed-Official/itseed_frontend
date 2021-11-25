import type { NextPage } from "next";
import classnames from "classnames";

import Button from "../../components/atoms/Button";
import { SubTitle } from "../../components/atoms/SectionTitle";
import Card from "../../components/molecules/Card";
import SectionWrapper from "../../components/molecules/SectionWrapper";
import BannerContainer from "../../components/molecules/BannerContainer";
import FAQSection from "./FAQSection";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <BannerContainer backgroundImage="images/banner_homepage.png" />
      <SectionWrapper className={styles.summaryInfo}>
        <div />
      </SectionWrapper>
      <SectionWrapper title="計畫介紹" className={styles.introWrapper}>
        <div className={styles.intro}>
          <p>資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。</p>
          <p>
            透過執行 4 大專案，參與 10+
            堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向，
          </p>
          <p>
            培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。
          </p>
          <Button text="計畫內容" className={styles.button} />
        </div>
        <div className={classnames(styles.flexSection, styles.features)}>
          <div className={styles.feature}>
            <SubTitle title="專業課程" />
            <div className={styles.featureDetail}>
              <p>擺脫學校框架</p>
              <p>職場軟實力培養</p>
              <p>突破視野局限</p>
            </div>
          </div>
          <div className={styles.feature}>
            <SubTitle title="課程" />
            <div className={styles.featureDetail}>
              <p>擺脫學校框架</p>
              <p>職場軟實力培養</p>
              <p>突破視野局限</p>
            </div>
          </div>
          <div className={styles.feature}>
            <SubTitle title="校友" />
            <div className={styles.featureDetail}>
              <p>擺脫學校框架</p>
              <p>職場軟實力培養</p>
              <p>突破視野局限</p>
            </div>
          </div>
          <div className={styles.feature}>
            <SubTitle title="職涯輔導" />
            <div className={styles.featureDetail}>
              <p>擺脫學校框架</p>
              <p>職場軟實力培養</p>
              <p>突破視野局限</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper title="聽聽校友怎麼說">
        <div className={classnames(styles.flexSection, styles.alumni)}>
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
        </div>
        <Button text="校友評價" className={styles.button} />
      </SectionWrapper>
      <SectionWrapper title="招募流程與時程">
        <div className={styles.plan} />
        <Button text="詳細流程" className={styles.button} />
      </SectionWrapper>
      <FAQSection limit={3} />
    </>
  );
};

export default Home;
