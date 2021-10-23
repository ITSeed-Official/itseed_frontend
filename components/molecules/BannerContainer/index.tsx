import { FC } from "react";
import { useMedia } from "../../../util/hooks";

import Banner from "../../atoms/Banner";
import Button from "../../atoms/Button";
import { SectionBigTitle, SubTitle } from "../../atoms/SectionTitle";
import SectionWrapper from "../SectionWrapper";

import styles from "./index.module.css";

const BannerContainer: FC = () => {
  const media = useMedia();

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
        {media === "desktop" && <div className={styles.floatingBox}></div>}
      </div>
      {media !== "desktop" && (
        <SectionWrapper>
          <div className={styles.staticBox}></div>
        </SectionWrapper>
      )}
    </>
  );
};

export default BannerContainer;
