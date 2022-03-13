import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './GoalSection.module.scss';
import { Goal } from './goals';
import Image from 'next/image';

const GoalSection = ({ projectDescription, hint, content, imagePath }: Goal) => {
  return (
    <div className={styles.goalSection}>
      <SectionWrapper>
        <div className={styles.section}>
          <h2>專案宗旨</h2>
          {hint && <div className={styles.hint}>{hint}</div>}
          <p>{projectDescription}</p>
        </div>
        {imagePath && (
          <div className={styles.imageSection}>
            <Image src={imagePath} alt="goal-banner" width="527px" height="316px" />
          </div>
        )}
        {!imagePath && <div className={styles.block} />}
        {content && (
          <>
            <div className={styles.section}>
              <h2>專案內容</h2>
              <p>{content}</p>
            </div>
          </>
        )}
      </SectionWrapper>
    </div>
  );
};

export default GoalSection;
