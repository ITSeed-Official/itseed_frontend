import { FC } from "react";

import SectionTitle from "../../atoms/SectionTitle";

import styles from "./index.module.css";

type SectionWrapperProperty = {
  title?: string;
};

const SectionWrapper: FC<SectionWrapperProperty> = ({ children, title }) => {
  return (
    <section className={styles.sectionWrapper}>
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export default SectionWrapper;
