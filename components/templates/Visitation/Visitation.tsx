import type { NextPage } from 'next';
import { useRef, useMemo } from 'react';

import { Visitation } from 'api/visitations';
import { useTab } from 'util/hooks/useTab';

import TemplateWrapper from 'components/organisms/TemplateWrapper';
import ContentRender from 'components/molecules/ContentRender';
import TabNav from 'components/molecules/TabNav';
import SectionWrapper from 'components/molecules/SectionWrapper';

import { appPath } from 'util/routing.config';

import styles from './Visitation.module.scss';

interface IProps {
  visitations: Visitation[];
}
interface VisitationMap {
  [name: string]: Visitation;
}

const Content = ({ visitations }: IProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const tabs = useMemo(
    () =>
      visitations.map((visitation) => ({
        key: visitation.name,
        text: visitation.name,
      })),
    [visitations]
  );

  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, true);

  let markdownContent: string = '';

  if (activeTab) {
    const visitationMap = visitations.reduce((map, visitation) => {
      map[visitation.name] = visitation;
      return map;
    }, {} as VisitationMap);
    if (visitationMap[activeTab]) {
      markdownContent = visitationMap[activeTab].description;
    }
  }

  if (visitations.length === 0) {
    return null;
  }

  if (activeTab === '') {
    return null;
  }
  return (
    <div ref={elRef} className={styles.Content}>
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={(tab: string) => {
          setActiveTab(tab);
          const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
          const contentOffsetTop = elRef.current?.offsetTop || 0;
          window.scroll(0, contentOffsetTop - headerHeight);
        }}
        onStickyChange={setIsSubNavStuck}
      />
      <SectionWrapper>
        <ContentRender content={markdownContent} />
      </SectionWrapper>
    </div>
  );
};

const Visitation: NextPage<IProps> = ({ visitations }: IProps) => {
  return (
    <TemplateWrapper
      primaryTitle="????????????"
      subTitle="????????????"
      description="??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
      desktopBackgroundImage="/images/faq/pics/banner--desktop.png"
      mobileBackgroundImage="/images/faq/pics/banner--mobile.png"
      nextSectionTitle="????????????"
      nextSectionPath={appPath.plan}
    >
      <Content visitations={visitations} />
    </TemplateWrapper>
  );
};

export default Visitation;
