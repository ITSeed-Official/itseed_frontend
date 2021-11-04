import { FC } from "react";

import Banner from "../../atoms/Banner";
import Button from "../../atoms/Button";
import { SectionBigTitle, SubTitle } from "../../atoms/SectionTitle";

import styles from "./index.module.scss";

const BannerContainer: FC = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
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
        <div className={styles.summaryInfo}></div>
      </div>
    </>
  );
};

export default BannerContainer;
