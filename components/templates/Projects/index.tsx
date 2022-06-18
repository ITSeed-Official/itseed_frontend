import { useRef, useMemo } from 'react';
import type { NextPage } from 'next';
import { NextRouter } from 'next/router';

import { appPath } from 'util/routing.config';
import { useTab } from 'util/hooks/useTab';

import AchievementSection from './AchievementSection';
import GoalSection from './GoalSection';
import { Goals } from './GoalSection/goals';
import { ProjectName } from './enums';
import CareerEvents from './CareerEvents/CareerEvents';
import NextSection from 'components/atoms/NextSection';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import TabNav from 'components/molecules/TabNav';

const Projects: NextPage<{ router: NextRouter }> = ({ router }) => {
  const tabs = useMemo(
    () =>
      Object.values(ProjectName).map((project) => ({
        text: project,
      })),
    []
  );
  const elRef = useRef<HTMLDivElement>(null);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs);

  const changeTab = (tab: ProjectName) => {
    if (elRef && elRef.current) {
      setActiveTab(tab);
      const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
      const contentOffsetTop = elRef.current.offsetTop || 0;
      window.scroll(0, contentOffsetTop - headerHeight);
    }
  };

  return (
    <>
      <BannerContainer
        type={BannerType.general}
        primaryTitle="三大實作專案"
        subTitle=""
        description="資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 4 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向。
培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。"
      />
      <div ref={elRef}>
        <TabNav tabs={tabs} activeTab={activeTab} onTabClick={changeTab} onStickyChange={setIsSubNavStuck} />
        {(() => {
          switch (activeTab) {
            case ProjectName.tuv:
              return (
                <>
                  <GoalSection projectDescription={Goals[activeTab].projectDescription} />
                  <AchievementSection />
                  <NextSection title="職涯專案" path={appPath.projects} onClick={() => changeTab(ProjectName.career)} />
                </>
              );
            case ProjectName.career:
              return (
                <>
                  <GoalSection
                    projectDescription={Goals[activeTab].projectDescription}
                    hint={Goals[activeTab].hint}
                    content={Goals[activeTab].content}
                  />
                  <CareerEvents />
                  <NextSection
                    title="招生專案"
                    path={appPath.projects}
                    onClick={() => changeTab(ProjectName.recruit)}
                  />
                </>
              );
            case ProjectName.recruit:
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
    </>
  );
};

export default Projects;
