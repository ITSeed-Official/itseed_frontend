import { FC } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type TitleProperty = {
  title: string;
  className?: string;
};

export const SectionBigTitle: FC<TitleProperty> = ({ title, className }) => {
  return (
    <h1 className={classnames(styles.sectionBigTitle, className)}>{title}</h1>
  );
};

const SectionTitle: FC<TitleProperty> = ({ title, className }) => {
  return (
    <h2 className={classnames(styles.sectionTitle, className)}>{title}</h2>
  );
};

export const SubTitle: FC<TitleProperty> = ({ title, className }) => {
  return <h3 className={classnames(styles.subTitle, className)}>{title}</h3>;
};

export default SectionTitle;
