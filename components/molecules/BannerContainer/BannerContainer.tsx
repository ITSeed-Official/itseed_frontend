import { FC } from "react";
import classnames from "classnames";

import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Button from "../../atoms/Button/Button";
import {
  SectionBigTitle,
  SubTitle,
} from "../../atoms/SectionTitle/SectionTitle";

import styles from "./BannerContainer.module.scss";

type BannerContainerProperty = {
  className?: string;
  backgroundImage?: string;
};

const BannerContainer: FC<BannerContainerProperty> = ({
  backgroundImage = "",
  className,
}) => {
  return (
    <div
      className={classnames(styles.bannerContainer, className)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SectionWrapper className={styles.bannerContent}>
        <div className={styles.bannerInfo}>
          <SectionBigTitle title="擁抱每一份獨特" />
          <SubTitle
            title="第十九屆資訊種子培訓計畫"
            className={styles.subTitle}
          />
          <p>報名時間：2022/6/1-7/1</p>
          <Button text="立即報名" className={styles.button} />
        </div>
        <div className={styles.summaryInfo} />
      </SectionWrapper>
    </div>
  );
};

export default BannerContainer;
