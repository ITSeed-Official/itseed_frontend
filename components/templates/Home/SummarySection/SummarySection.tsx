import type { FC } from "react";

import SectionWrapper from "components/molecules/SectionWrapper";

import styles from "./SummarySection.module.scss";

const SummarySection: FC = () => {
  return (
    <SectionWrapper className={styles.summaryInfo}>
      <div />
    </SectionWrapper>
  );
};

export default SummarySection;
