import { FC } from 'react';
import Image from 'next/image';

import { GoalType } from './goals';
import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './GoalSection.module.scss';

interface GoalSectionProps extends GoalType {
  projectDescription: string;
  hint?: string;
  solvingText?: string;
  content?: string;
  imagePath?: string;
}

const GoalSection: FC<GoalSectionProps> = ({ projectDescription, hint, content, imagePath }) => {
  return (
    <SectionWrapper isBackgroundGreen>
      <h2 className={styles.title}>專案宗旨</h2>
      {hint && <div className={styles.hint}>{hint}</div>}
      <p className={styles.description}>{projectDescription}</p>
      {imagePath && (
        <div className={styles.imageSection}>
          <Image src={imagePath} alt="goal-banner" layout="responsive" width="143px" height="75px" />
        </div>
      )}
      {content && (
        <div className={styles.secondSection}>
          <h2 className={styles.title}>專案內容</h2>
          <p className={styles.description}>{content}</p>
        </div>
      )}
    </SectionWrapper>
  );
};

export default GoalSection;
