import { useEffect, useMemo, useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { CourseDetailType } from 'api/courses';
import { Visitation } from 'api/visitations';
import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';
import { Project } from 'util/enum';
import { COPYWRITING } from 'util/copywriting';
import { scrollTo } from 'util/scroll';

import TemplateWrapper from 'components/organisms/TemplateWrapper';
import { CourseListSection } from 'components/templates/Courses/CoursesLists';
import SectionWrapper from 'components/molecules/SectionWrapper';
import TabNav from 'components/molecules/TabNav';
import Cta from 'components/atoms/Cta';
import Button, { ButtonIcon } from 'components/atoms/Button';
import { Type } from 'components/atoms/NextSection';

import styles from './Plan.module.scss';

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
      '專案全名 — Top up the value ，以組為單位，協助企業進行社會關懷連結，利用問題拆解、設計思考等方式進行討論與產出方案，並規劃 MVP 測試是否可行，以提供企業執行。從中學習團隊建立、養成專案管理、企劃書撰寫、會議、信件等能力。',
    imgUrl: '/images/plan/pics/project_1@2x.png',
  },
  {
    id: 2,
    name: COPYWRITING[Project.career],
    description: '提供多元的職場體驗機會，幫助學員探索職涯方向與興趣； 提升職場軟硬實力，並增進跨屆交流。',
    imgUrl: '/images/plan/pics/project_2@2x.png',
  },
  {
    id: 3,
    name: COPYWRITING[Project.recruit],
    description: '合作、分享與傳承，延續資種核心價值。',
    imgUrl: '/images/plan/pics/project_3@2x.png',
  },
];

// We should control the image in admin panel
const imageNameMapping: { [key: string]: string } = {
  'Google 台灣': '/images/plan/pics/google_logo.png',
  Ogilvy奧美: '/images/plan/pics/ogilvy_logo.png',
  'LINE Taiwan_台灣連線股份有限公司': '/images/plan/pics/line_logo.png',
  Dcard: '/images/plan/pics/dcard_logo.png',
};

const Plan: NextPage<PlanProperty> = ({ courses, visitations }) => {
  const router = useRouter();
  const tabs = useMemo(() => plans.map((p) => ({ key: p, text: p })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs);
  const projectsRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const visitationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coursesRef && !projectsRef && !timelineRef && !visitationRef) return;

    switch (activeTab) {
      case '講座課程':
        scrollTo(coursesRef);
        break;
      case '三大實作專案':
        scrollTo(projectsRef);
        break;
      case '計畫時程總覽':
        scrollTo(timelineRef);
        break;
      case '歷屆企業參訪紀錄':
        scrollTo(visitationRef);
        break;
    }
  }, [activeTab, coursesRef, projectsRef, timelineRef, visitationRef]);

  return (
    <TemplateWrapper
      desktopBackgroundImage="/images/plan/pics/plan_desktop_banner@2x.png"
      mobileBackgroundImage="/images/plan/pics/plan_mobile_banner@2x.png"
      primaryTitle="計畫內容"
      description="資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。
    透過執行 3 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，
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
      <CourseListSection
        courses={courses}
        onClick={() => router.push(appPath.courses)}
        ctaText={'所有講座課程'}
        courseLimit={12}
        ref={coursesRef}
      />
      <div ref={projectsRef}>
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
      </div>
      <div ref={timelineRef}>
        <SectionWrapper title="計畫時程總覽" isBackgroundGreen titleClassName={styles.title}>
          <h5 className={styles.subTitle}>雙週六的課程＋實作專案時程總覽</h5>
          <div className={styles.scheduleOverflowWrapper}>
            <div className={styles.scheduleImage}>
              <Image src="/images/plan/pics/schedule.svg" alt="schedule" layout="fill" />
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div ref={visitationRef}>
        <SectionWrapper title="歷屆企業參訪紀錄">
          <div className={styles.visitation}>
            {visitations.map(({ id, name }) => (
              <div key={id} className={styles.visitationCard}>
                <Image src={imageNameMapping[name]} alt={name} layout="fixed" width={177} height={60} />
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
      </div>
    </TemplateWrapper>
  );
};

export default Plan;
