import NextSection from 'components/atoms/NextSection';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import type { NextPage } from 'next';
import AchievementSection from './AchievementSection';
import GoalSection from './GoalSection';
import { Goals } from './GoalSection/goals';
import { ProjectName } from './enums';
import CareerEvents from './CareerEvents/CareerEvents';
import TabNav from 'components/molecules/TabNav';
import { useRef, useContext, useState, useEffect } from 'react';
import { LayoutContext } from '../../../contexts/LayoutContext';
import DataProjectSection from './DataProjectSection';

const ProjectList: string[] = Object.values(ProjectName);

const Projects: NextPage = () => {
  const tabs = Object.values(ProjectName).map((project) => ({
    text: project,
  }));
  const elRef = useRef<HTMLDivElement>(null);
  const layoutContext = useContext(LayoutContext);
  const [activeTab, setActiveTab] = useState('');
  const [project, setProject] = useState(ProjectName.tuv);

  useEffect(() => {
    let activeTabFromTab = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!ProjectList.includes(activeTabFromTab)) {
      activeTabFromTab = ProjectName.tuv;
      window.location.hash = ProjectName.tuv;
    }
    setActiveTab(project);
  }, [project]);

  useEffect(() => {
    window.location.hash = activeTab as ProjectName;
  }, [activeTab]);

  const changeTab = (tab: ProjectName) => {
    setProject(tab);
    setActiveTab(tab);
    const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
    const contentOffsetTop = elRef.current?.offsetTop || 0;
    window.scroll(0, contentOffsetTop - headerHeight);
  };

  return (
    <>
      <BannerContainer
        type={BannerType.general}
        primaryTitle="四大實作專案"
        subTitle=""
        description="資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。透過執行 4 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向。
培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。"
      />
      <div ref={elRef}>
        <TabNav
          tabs={tabs}
          activeTab={project}
          onTabClick={changeTab}
          onStickyChange={layoutContext.setIsSubNavStuck}
        />
        {(() => {
          switch (project) {
            case ProjectName.tuv:
              return (
                <>
                  <GoalSection projectDescription={Goals[project].projectDescription} />
                  <AchievementSection />
                  <NextSection title="職涯專案" path="/projects#career" onClick={() => changeTab(ProjectName.career)} />
                </>
              );
            case ProjectName.career:
              return (
                <>
                  <GoalSection
                    projectDescription={Goals[project].projectDescription}
                    hint={Goals[project].hint}
                    content={Goals[project].content}
                  />
                  <CareerEvents />
                  <NextSection
                    title="招生專案"
                    path="/projects#recruit"
                    onClick={() => changeTab(ProjectName.recruit)}
                  />
                </>
              );
            case ProjectName.recruit:
              return (
                <>
                  <GoalSection
                    projectDescription={Goals[project].projectDescription}
                    hint={Goals[project].hint}
                    content={Goals[project].content}
                    imagePath={Goals[project].imagePath}
                  />
                  <NextSection title="數據專案" path="/projects#data" onClick={() => changeTab(ProjectName.data)} />
                </>
              );
            case ProjectName.data:
              return (
                <>
                  <DataProjectSection />
                  <NextSection title="企業參訪" path="/visitation" />
                </>
              );
          }
        })()}
      </div>
    </>
  );
};

export default Projects;
