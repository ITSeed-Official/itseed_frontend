import type { FC } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

import { achievements } from './achievements';

import SectionWrapper from 'components/molecules/SectionWrapper';
import CollapseBox from 'components/atoms/CollapseBox';
import MentorInformation from 'components/atoms/MentorInformation';

import sproutIcon from 'public/images/common/icons/sprout.png';
import styles from './AchievementSection.module.scss';

const AchievementsTitle = ({ title }: { title: string }) => (
  <div className={styles.achievementsTitle}>
    <div className={styles.icon}>
      <Image alt="sprout" src={sproutIcon} width={24} height={24} />
    </div>
    <h3>{title}</h3>
  </div>
);

const AchievementSection: FC = () => {
  return (
    <SectionWrapper>
      <h2 className={styles.title}>各組專案成果與心得分享</h2>
      {achievements.map((achievement, index) => {
        return (
          <CollapseBox
            size="md"
            defaultOpen={index === 0}
            className={styles.questionBox}
            title={achievement.problem}
            key={achievement.problem}
          >
            <div className={classnames(styles.sectionBackground, styles.achievementsContent)}>
              <Image
                src={achievement.image}
                alt={achievement.alt}
                width={achievement.imageWidth}
                height={achievement.imageHeight}
              />
              <div className={styles.achievementBlock}>
                <AchievementsTitle title="專案題目" />
                <hr />
                <p>{achievement.subject}</p>
              </div>
              <div className={styles.achievementBlock}>
                <AchievementsTitle title="解決問題過程" />
                <hr />
                <p>{achievement.solveProcess}</p>
              </div>
              <div className={styles.achievementBlock}>
                <AchievementsTitle title="期末呈現" />
                <hr />
                <p>{achievement.present}</p>
              </div>
              <div className={styles.achievementBlock}>
                <AchievementsTitle title={`心得分享：（${achievement.sharingStudent}）`} />
                <hr />
                <p>{achievement.sharing}</p>
              </div>
              <div className={styles.mentorInformationBlock}>
                {achievement.mentors.map((mentor, index) => {
                  return <MentorInformation key={index} MentorDetail={mentor} />;
                })}
              </div>
            </div>
          </CollapseBox>
        );
      })}
    </SectionWrapper>
  );
};

export default AchievementSection;
