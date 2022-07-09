import { useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { CourseDetailType } from 'api/courses';
import { Visitation } from 'api/visitations';
import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';
import { Project } from 'util/enum';
import { COPYWRITING } from 'util/copywriting';

import TemplateWrapper from 'components/organisms/TemplateWrapper';
import { CourseListSection } from 'components/templates/Courses/CoursesLists';
import SectionWrapper from 'components/molecules/SectionWrapper';
import TabNav from 'components/molecules/TabNav';
import Cta from 'components/atoms/Cta';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './Plan.module.scss';
import { Type } from 'components/atoms/NextSection';

interface PlanProperty {
  courses: CourseDetailType[];
  visitations: Visitation[];
}

type PlanContentType = '講座課程' | '三大實作專案' | '計畫時程總覽' | '歷屆企業參訪紀錄';

const plans: PlanContentType[] = ['講座課程', '三大實作專案', '計畫時程總覽', '歷屆企業參訪紀錄'];

const projects = [
  {
    id: 1,
    name: COPYWRITING[Project.ps],
    description:
      '專案全名 — Problem Solving 透過業主所佈達的題目，讓學員早日與業界接軌，並解決企業問題。從中學習如何團隊合作，以及向上管理的方法，並培養解決問題的邏輯與方法。',
    imgUrl: '/images/homepage/pics/intro.png',
  },
  {
    id: 2,
    name: COPYWRITING[Project.career],
    description:
      '專案全名 — Problem Solving 透過業主所佈達的題目，讓學員早日與業界接軌，並解決企業問題。從中學習如何團隊合作，以及向上管理的方法，並培養解決問題的邏輯與方法。',
    imgUrl: '/images/homepage/pics/intro.png',
  },
  {
    id: 3,
    name: COPYWRITING[Project.recruit],
    description:
      '專案全名 — Problem Solving 透過業主所佈達的題目，讓學員早日與業界接軌，並解決企業問題。從中學習如何團隊合作，以及向上管理的方法，並培養解決問題的邏輯與方法。',
    imgUrl: '/images/homepage/pics/intro.png',
  },
];

const Plan: NextPage<PlanProperty> = ({ courses, visitations }) => {
  const router = useRouter();
  const tabs = useMemo(() => plans.map((p) => ({ key: p, text: p })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs);

  return (
    <TemplateWrapper
      desktopBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
      mobileBackgroundImage="/images/career/pics/career_desktop_banner@2x.png"
      primaryTitle="計畫內容"
      description="資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。
    透過執行 4 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，
    並探索自己未來的職涯方向。
    培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。"
      nextSectionPath={appPath.recruit}
      nextSectionTitle="招生資訊"
      nextSectionType={Type.green}
    >
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={(tab: PlanContentType) => {
          if (activeTab !== tab) {
            setActiveTab(tab);
            return;
          }
          setActiveTab('');
        }}
        onStickyChange={setIsSubNavStuck}
      />
      {(activeTab === '' || activeTab === '講座課程') && (
        <CourseListSection
          courses={courses}
          onClick={() => router.push(appPath.courses)}
          ctaText={'所有講座課程'}
          courseLimit={8}
        />
      )}
      {(activeTab === '' || activeTab === '三大實作專案') && (
        <SectionWrapper title="三大實作專案">
          {projects.map(({ id, name, description, imgUrl }, index) => (
            <div key={id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src={imgUrl} alt={name} layout="fill" />
              </div>
              <div className={styles.projectInfo}>
                <h3>
                  <span>0{index + 1}</span>
                  {name}
                </h3>
                <p>{description}</p>
                <Cta ctaText="專案介紹" onClickCta={() => router.push(appPath.projects)} />
              </div>
            </div>
          ))}
          <Button text="三大實作專案" icon={ButtonIcon.arrow} onClick={() => router.push(appPath.projects)} />
        </SectionWrapper>
      )}
      {(activeTab === '' || activeTab === '計畫時程總覽') && (
        <SectionWrapper title="計畫時程總覽" isBackgroundGreen titleClassName={styles.title}>
          <h5 className={styles.subTitle}>雙週六的課程＋實作專案時程總覽</h5>
          <div className={styles.scheduleOverflowWrapper}>
            <div className={styles.scheduleImage}>
              <Image src="/images/plan/pics/schedule.svg" alt="schedule" layout="fill" />
            </div>
          </div>
        </SectionWrapper>
      )}
      {(activeTab === '' || activeTab === '歷屆企業參訪紀錄') && (
        <SectionWrapper title="歷屆企業參訪紀錄">
          <div className={styles.visitation}>
            {visitations.map(({ id, name }) => (
              <div key={id} className={styles.visitationCard}>
                <Image src="/images/plan/pics/google_logo.png" alt={name} layout="fixed" width={177} height={60} />
                <Cta
                  className={styles.visitationCta}
                  ctaText="參訪紀錄"
                  onClickCta={() => router.push(`${appPath.visitation}/#${name}`)}
                />
              </div>
            ))}
          </div>
          <Button text="歷屆企業參訪" icon={ButtonIcon.arrow} onClick={() => router.push(appPath.visitation)} />
        </SectionWrapper>
      )}
    </TemplateWrapper>
  );
};

export default Plan;
