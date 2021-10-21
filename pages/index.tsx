import type { NextPage } from "next";
import classnames from "classnames";

import Banner from "../components/atoms/Banner";
import Button from "../components/atoms/Button";
import Card from "../components/atoms/Card";
import { SectionBigTitle, SubTitle } from "../components/atoms/SectionTitle";
import SectionWrapper from "../components/atoms/SectionWrapper";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <Banner />
        <div className={styles.bannerInfo}>
          <SectionBigTitle title="擁抱每一份獨特" />
          <SubTitle
            title="第十九屆資訊種子培訓計畫"
            className={styles.subTitle}
          />
          <p>報名時間：2022/6/1-7/1</p>
          <Button text="立即報名" className={styles.button} reverse />
        </div>
        <div className={styles.floatingBox}></div>
      </div>
      <SectionWrapper title="計畫介紹">
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
          <div className={styles.flexSection}>
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
        </div>
      </SectionWrapper>
      <SectionWrapper title="聽聽校友怎麼說">
        <div className={classnames(styles.flexSection, styles.alumni)}>
          <Card />
          <Card />
          <Card />
        </div>
        <Button text="校友評價" className={styles.button} />
      </SectionWrapper>
      <SectionWrapper title="招募流程與時程">
        <div className={styles.plan} />
        <Button text="詳細流程" className={styles.button} />
      </SectionWrapper>
      <SectionWrapper title="常見問題">
        <div className={styles.questions}>
          <div>問題1</div>
          <div>問題2</div>
          <div>問題3</div>
        </div>
        <Button text="全部問題" className={styles.button} />
      </SectionWrapper>
    </div>
  );
};

export default Home;
