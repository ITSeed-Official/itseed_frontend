import { FC } from "react";
import classnames from "classnames";

import SectionTitle from "../../atoms/SectionTitle";

import styles from "./index.module.scss";

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
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export default SectionWrapper;
