import { FC } from "react";
import classnames from "classnames";
import Image from "next/image";

import ReadmoreIcon from "public/images/common/icons/readmore.svg";

import styles from "./Card.module.scss";

type CardProperty = {
  className?: string;
  imgSrc?: string;
  content: string;
  name: string;
  character: string;
  readmore?: string;
};

const Card: FC<CardProperty> = ({
  className,
  imgSrc,
  content,
  name,
  character,
  readmore = "看更多",
}) => {
  return (
    <div className={classnames(styles.card, className)}>
      <div
        className={styles.cardImg}
        style={
          imgSrc
            ? {
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
              }
            : { backgroundColor: "gray" }
        }
      />
      <div className={styles.cardInfo}>
        <p className={styles.content}>{content}</p>
        <p>{name}</p>
        <p>{character}</p>
        <div className={styles.readmore}>
          <p>{readmore}</p>
          <Image src={ReadmoreIcon} alt="readmore" />
        </div>
      </div>
    </div>
  );
};

export default Card;
