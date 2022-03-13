import type { FC } from 'react';

import SectionWrapper from 'components/molecules/SectionWrapper';
import CollapseBox from 'components/atoms/CollapseBox';
import Image from 'next/image';
import sprout from 'public/images/common/icons/sprout.png';
import styles from './AchievementSection.module.scss';
import { achievements, Achievement } from './achievements';
import MentorInformation from 'components/atoms/MentorInformation';

const AchievementSection: FC = () => {
  return (
    <div className={styles.goalSection}>
      <SectionWrapper>
        <div className={styles.section}>
          <h2>各組專案成果與心得分享</h2>
          {achievements.map((achievement: Achievement, index: number) => {
            return (
              <CollapseBox className={styles.questionBox} title={achievement.problem} key={index}>
                <div>
                  <div className={styles.sectionBackground}>
                    <Image src={achievement.image} alt={achievement.alt} width="408px" height="199px" />
                    <div className={styles.block}>
                      <h3>
                        <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
                        專案題目
                      </h3>
                      <hr />
                      <p>{achievement.subject}</p>
                    </div>
                    <div className={styles.block}>
                      <h3>
                        <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
                        解決問題過程
                      </h3>
                      <hr />
                      <p>{achievement.solveProcess}</p>
                    </div>
                    <div className={styles.block}>
                      <h3>
                        <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
                        期末呈現
                      </h3>
                      <hr />
                      <p>{achievement.present}</p>
                    </div>
                    <div className={styles.block}>
                      <h3>
                        <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
                        心得分享：（{achievement.sharingStudent}）
                      </h3>
                      <hr />
                      <p>{achievement.sharing}</p>
                    </div>
                    <div className={styles.block}>
                      {achievement.mentors.map((mentor, index) => {
                        return <MentorInformation key={index} MentorDetail={mentor} />;
                      })}
                    </div>
                  </div>
                </div>
              </CollapseBox>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AchievementSection;
