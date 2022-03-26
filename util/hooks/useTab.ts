import { useEffect, useState, useContext } from 'react';
import { LayoutContext } from 'contexts/LayoutContext';

export const useTab = (tabs: { text: string }[], isDivided: boolean = false) => {
  const layoutContext = useContext(LayoutContext);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    let activeTabFromTab = decodeURIComponent(window.location.hash.replace('#', ''));

    if (!tabs.map((t) => t.text).includes(activeTabFromTab) && isDivided) {
      activeTabFromTab = tabs[0].text;
      window.location.hash = tabs[0].text;
    }
    setActiveTab(activeTabFromTab);
  }, [tabs]);

  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  return {
    setIsSubNavStuck: layoutContext.setIsSubNavStuck,
    activeTab,
    setActiveTab,
  };
};
