import { useRef, useMemo } from 'react';
import type { NextPage } from 'next';

import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';
import { translateMap } from 'util/translate';
import { ValueOf } from 'util/type';

import AchievementSection from './AchievementSection';
import GoalSection from './GoalSection';
import { Goals } from './GoalSection/goals';
import CareerEvents from './CareerEvents/CareerEvents';
import NextSection from 'components/atoms/NextSection';
import TabNav from 'components/molecules/TabNav';
import TemplateWrapper from 'components/organisms/TemplateWrapper';

export type ProjectsType = typeof translateMap.projects;

const Projects: NextPage = () => {
  const tabs = useMemo(
    () =>
      Object.values(translateMap.projects).map((project) => ({
        text: project,
      })),
    []
  );
  const elRef = useRef<HTMLDivElement>(null);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs);

  const changeTab = (tab: ValueOf<ProjectsType>) => {
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
      description="資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 4 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向。
培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。"
    >
      <div ref={elRef}>
        <TabNav tabs={tabs} activeTab={activeTab} onTabClick={changeTab} onStickyChange={setIsSubNavStuck} />
        {(() => {
          switch (activeTab) {
            case translateMap.projects.tuv:
              return (
                <>
                  <GoalSection projectDescription={Goals[activeTab].projectDescription} />
                  <AchievementSection />
                  <NextSection
                    title={translateMap.projects.career}
                    path={appPath.projects}
                    onClick={() => changeTab(translateMap.projects.career)}
                  />
                </>
              );
            case translateMap.projects.career:
              return (
                <>
                  <GoalSection
                    projectDescription={Goals[activeTab].projectDescription}
                    hint={Goals[activeTab].hint}
                    content={Goals[activeTab].content}
                  />
                  <CareerEvents />
                  <NextSection
                    title={translateMap.projects.recruit}
                    path={appPath.projects}
                    onClick={() => changeTab(translateMap.projects.recruit)}
                  />
                </>
              );
            case translateMap.projects.recruit:
              return (
                <>
                  <GoalSection
                    projectDescription={Goals[activeTab].projectDescription}
                    hint={Goals[activeTab].hint}
                    content={Goals[activeTab].content}
                    imagePath={Goals[activeTab].imagePath}
                  />
                  <NextSection title="企業參訪" path={appPath.visitation} />
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
