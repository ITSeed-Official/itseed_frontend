import { useEffect, useState, useContext } from 'react';
import { Tab } from 'util/type';
import { LayoutContext } from 'contexts/LayoutContext';

export const useTab = (tabs: Tab[], isDivided: boolean = false) => {
  const layoutContext = useContext(LayoutContext);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    let activeTabFromTab = decodeURIComponent(window.location.hash.replace('#', ''));
    const validateTab = (tab: string): boolean => {
      return tabs.map((t) => t.key).includes(tab);
    };

    if (isDivided && !validateTab(activeTabFromTab)) {
      activeTabFromTab = tabs[0].key;
      window.location.hash = tabs[0].key;
    }

    setActiveTab(activeTabFromTab);
  }, [tabs, isDivided]);

  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  return {
    setIsSubNavStuck: layoutContext.setIsSubNavStuck,
    activeTab,
    setActiveTab,
  };
};
