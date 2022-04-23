import { useRef, useMemo } from 'react';

import { Visitation } from 'api/visitations';
import { useTab } from 'util/hooks/useTab';

import ContentRender from 'components/molecules/ContentRender';
import TabNav from 'components/molecules/TabNav';
import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './Content.module.scss';

interface VisitationMap {
  [name: string]: Visitation;
}

interface ContentProps {
  visitations: Visitation[];
}

const Content = ({ visitations }: ContentProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const tabs = useMemo(
    () =>
      visitations.map((visitation) => ({
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

export default Content;
