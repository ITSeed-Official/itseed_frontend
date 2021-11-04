import { FC } from "react";
import classnames from "classnames";

import { SubTitle } from "../SectionTitle";

import styles from "./index.module.scss";

type CardProperty = {
  className?: string;
};

const Card: FC<CardProperty> = ({ className }) => {
  return (
    <div className={classnames(styles.card, className)}>
      <div className={styles.cardImg} />
      <div className={styles.cardInfo}>
        <SubTitle title="「資種帶你飛」" className={styles.cardTitle} />
        <p className={styles.authorInfo}>XX大學 XXX</p>
        <p>資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。</p>
        <p>
          透過執行 4 大專案，參與 10+
          堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才!
        </p>
      </div>
    </div>
  );
};

export default Card;
