import type { FC } from 'react';
import Image from 'next/image';
import SectionWrapper from 'components/molecules/SectionWrapper';
import styles from './SummarySection.module.scss';

const SummarySection: FC = () => {
  return (
    <>
      <div className={styles.desktopOnly}>
        <SectionWrapper className={styles.content}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <em>3</em>
              <span>大專案</span>
            </div>
            <div className={styles.card}>
              <em>10+</em>
              <span>堂課程</span>
            </div>
            <div className={styles.card}>
              <em>700+</em>
              <span>人脈累積</span>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className={styles.mobileOnly}>
        <div className={styles.content}>
          <Image
            alt="Mountains"
            src="/images/homepage/pics/summarySectionBg@3x.png"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className={styles.cardWrapper}>
            <h3 className={styles.title}>在資訊種子，你能參與...</h3>
            <div className={styles.card}>
              <em>3</em>
              <span>大專案</span>
            </div>
            <div className={styles.card}>
              <em>10+</em>
              <span>堂課程</span>
            </div>
            <div className={styles.card}>
              <em>700+</em>
              <span>人脈累積</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarySection;
