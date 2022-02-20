import { useState, useEffect } from 'react';
import ContentRender from '../../molecules/ContentRender';
import { Visitation } from '../../../api/visitations';
import TabNav from '../../molecules/TabNav';
import SectionWrapper from '../../molecules/SectionWrapper';
import styles from './Content.module.scss';

interface VisitationMap {
  [name: string]: Visitation;
}

interface ContentProps {
  visitations: Visitation[];
}

const Content = ({ visitations }: ContentProps) => {
  const [activeTab, setActiveTab] = useState('');
  const tabs = visitations.map((visitation) => ({
    text: visitation.name,
  }));

  useEffect(() => {
    let activeTabFromTab = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!visitations.map((t) => t.name).includes(activeTabFromTab)) {
      activeTabFromTab = visitations[0].name;
      window.location.hash = visitations[0].name;
    }
    setActiveTab(activeTabFromTab);
  }, [visitations]);

  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

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
    <div className={styles.Content}>
      <TabNav tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      <SectionWrapper>
        <ContentRender content={markdownContent} />
      </SectionWrapper>
    </div>
  );
};

export default Content;
