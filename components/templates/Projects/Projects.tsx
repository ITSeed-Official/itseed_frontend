import { useRef } from 'react';
import type { NextPage } from 'next';

import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';
import { Project } from 'util/enum';
import { COPYWRITING } from 'util/copywriting';

import AchievementSection from './AchievementSection';
import GoalSection from './GoalSection';
import { goals } from './GoalSection/goals';
import CareerEventsSection from './CareerEventsSection';
import NextSection, { Type as NextSectionType } from 'components/atoms/NextSection';
import TabNav from 'components/molecules/TabNav';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

const TABS = [
  { key: Project.ps, text: COPYWRITING[Project.ps] },
  { key: Project.career, text: COPYWRITING[Project.career] },
  { key: Project.recruit, text: COPYWRITING[Project.recruit] },
];

const Projects: NextPage = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(TABS, true);

  const changeTab = (tab: Project) => {
    if (elRef && elRef.current) {
      setActiveTab(tab);
      const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
      const contentOffsetTop = elRef.current.offsetTop || 0;
      window.scroll(0, contentOffsetTop - headerHeight);
    }
  };

  return (
    <TemplateWrapper
      primaryTitle="三大實作專案"
      subTitle=""
      description="資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 3 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向。
      培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。"
    >
      <div ref={elRef}>
        <TabNav tabs={TABS} activeTab={activeTab} onTabClick={changeTab} onStickyChange={setIsSubNavStuck} />
        {(() => {
          switch (activeTab) {
            case Project.ps:
              return (
                <>
                  <GoalSection projectDescription={goals[activeTab].projectDescription} />
                  <AchievementSection />
                  <NextSection
                    title={COPYWRITING[Project.career]}
                    type={NextSectionType.green}
                    path={appPath.projects}
                    onClick={() => changeTab(Project.career)}
                  />
                </>
              );
            case Project.career:
              return (
                <>
                  <GoalSection
                    projectDescription={goals[activeTab].projectDescription}
                    hint={goals[activeTab].hint}
                    content={goals[activeTab].content}
                  />
                  <CareerEventsSection />
                  <NextSection
                    title={COPYWRITING[Project.recruit]}
                    type={NextSectionType.green}
                    path={appPath.projects}
                    onClick={() => changeTab(Project.recruit)}
                  />
                </>
              );
            case Project.recruit:
              return (
                <>
                  <GoalSection
                    projectDescription={goals[activeTab].projectDescription}
                    hint={goals[activeTab].hint}
                    content={goals[activeTab].content}
                    imagePath={goals[activeTab].imagePath}
                  />
                  <NextSection title="歷屆參訪紀錄" path={appPath.visitation} />
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    </TemplateWrapper>
  );
};

export default Projects;
