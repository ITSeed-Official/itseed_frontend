import type { NextPage } from "next";
import classnames from "classnames";

import Button from "../components/atoms/Button";
import { SubTitle } from "../components/atoms/SectionTitle";
import CollapseBox from "../components/atoms/CollapseBox";
import Card from "../components/molecules/Card";
import SectionWrapper from "../components/molecules/SectionWrapper";
import BannerContainer from "../components/molecules/BannerContainer";

import styles from "../styles/Home.module.scss";

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
      <SectionWrapper title="常見問題">
        <div className={styles.questions}>
          <CollapseBox
            className={styles.questionBox}
            title="Q1. 為什麼會有資訊種子培訓計畫的出現？"
          >
            資訊種子培訓計劃是由新北市電腦商業同業公會所籌劃，以公會豐富的業界資源，包括具寶貴實務經驗的講師以及直接到業界實習的機會等，讓有興趣投入
            IT 產業的青年學子成為業界所需的資訊精英人才。隨著時代演進，IT
            已融入於各產業中，資訊種子也逐漸演變為「資訊素養、跨領域人才」的養成計劃。
          </CollapseBox>
          <CollapseBox
            className={styles.questionBox}
            title="Q2. 加入資訊種子，我能獲得哪些資源？"
          >
            資訊種子培訓計劃是由新北市電腦商業同業公會所籌劃，以公會豐富的業界資源，包括具寶貴實務經驗的講師以及直接到業界實習的機會等，讓有興趣投入
            IT 產業的青年學子成為業界所需的資訊精英人才。隨著時代演進，IT
            已融入於各產業中，資訊種子也逐漸演變為「資訊素養、跨領域人才」的養成計劃。
          </CollapseBox>
          <CollapseBox
            className={styles.questionBox}
            title="Q3. 在資訊種子能培養哪些軟、硬實力呢？"
          >
            測試文字
          </CollapseBox>
        </div>
        <Button text="全部問題" className={styles.button} />
      </SectionWrapper>
    </>
  );
};

export default Home;
