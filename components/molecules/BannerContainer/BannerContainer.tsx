import { FC } from "react";
import classnames from "classnames";

import SectionWrapper from "components/molecules/SectionWrapper/SectionWrapper";
import Button from "components/atoms/Button/Button";
import {
  SectionBigTitle,
  SubTitle,
} from "components/atoms/SectionTitle/SectionTitle";

import styles from "./BannerContainer.module.scss";

type BannerContainerProperty = {
  className?: string;
  backgroundImage?: string;
  bigTitle?: string;
  subTitle?: string;
  subText?: string;
  buttonText?: string;
  showSummaryInfo?: boolean;
};

const BannerContainer: FC<BannerContainerProperty> = ({
  backgroundImage = "",
  bigTitle = "",
  subTitle = "",
  subText = "",
  buttonText = "",
  showSummaryInfo = false,
  className,
}) => {
  return (
    <div
      className={classnames(styles.bannerContainer, className)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SectionWrapper className={styles.bannerContent}>
        <div className={styles.bannerInfo}>
          {bigTitle && <SectionBigTitle title={bigTitle} />}
          {subTitle && (
            <SubTitle title={subTitle} className={styles.subTitle} />
          )}

          {subText && <p>{subText}</p>}
          {buttonText && <Button text={buttonText} className={styles.button} />}
        </div>
        {showSummaryInfo && <div className={styles.summaryInfo} />}
      </SectionWrapper>
    </div>
  );
};

export default BannerContainer;
