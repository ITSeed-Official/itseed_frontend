import { FC } from "react";
import classnames from "classnames";

import SectionTitle from "../../atoms/SectionTitle";

import styles from "./SectionWrapper.module.scss";

type SectionWrapperProperty = {
  title?: string;
  className?: string;
  titleClassName?: string;
};

const SectionWrapper: FC<SectionWrapperProperty> = ({
  children,
  title,
  className,
  titleClassName,
}) => {
  return (
    <section className={classnames(styles.sectionWrapper, className)}>
      {title && (
        <SectionTitle
          title={title}
          className={classnames(styles.title, titleClassName)}
        />
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
