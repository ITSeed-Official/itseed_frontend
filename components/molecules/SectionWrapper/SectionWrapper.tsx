import { FC } from "react";
import classnames from "classnames";

import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

import styles from "./SectionWrapper.module.scss";

type SectionWrapperProperty = {
  title?: string;
  className?: string;
};

const SectionWrapper: FC<SectionWrapperProperty> = ({
  children,
  title,
  className,
}) => {
  return (
    <section className={classnames(styles.sectionWrapper, className)}>
      {title && <SectionTitle title={title} className={styles.title} />}
      {children}
    </section>
  );
};

export default SectionWrapper;
