import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeatureCard.module.scss";

type FeatureCardProperty = {
  imgSrc: string;
  title: string;
  link: string;
  content: string[];
};

const FeatureCard: FC<FeatureCardProperty> = ({
  imgSrc,
  title,
  link,
  content = [],
}) => {
  return (
    <Link href={link} passHref>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <Image src={imgSrc} alt={title} width="60px" height="60px" />
          </div>
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.keypoints}>
            {content.map((text, index) => (
              <li key={`${text}_${index}`}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
