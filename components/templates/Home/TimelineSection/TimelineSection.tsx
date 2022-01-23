import type { FC } from 'react';

import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './TimelineSection.module.scss';

const TimelineSection: FC = () => {
  return (
    <div className={styles.timelineSection}>
      <SectionWrapper title="招募流程與時程">
        <div className={styles.plan} />
      </SectionWrapper>
    </div>
  );
};

export default TimelineSection;
