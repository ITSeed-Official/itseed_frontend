import type { FC } from "react";
import { SubTitle } from "components/atoms/SectionTitle";

import styles from "./FeatureCard.module.scss";

type FeatureCardProperty = {
  imgSrc: string;
  title: string;
  content: string[];
};

const FeatureCard: FC<FeatureCardProperty> = ({
  imgSrc,
  title,
  content = [],
}) => {
  return (
    <div className={styles.feature}>
      <img className={styles.featureImg} src={imgSrc} alt={title} />
      <SubTitle title={title} className={styles.featureTitle} />
      <div className={styles.featureContent}>
        {content.map((text, index) => (
          <p key={`${text}_${index}`}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
