import { useState, useEffect, useRef } from 'react';
import styles from './TabNav.module.scss';
import classnames from 'classnames';
import { Tab as TabBaseProps } from 'util/type';

interface TabProps {
  tabKey: string; // Due to the naming conflict with React.key, so add a tab prefix here
  tabText: string;
  isActive: boolean;
  onClick: (tabKey: any) => void;
}

export const Tab = ({ isActive, tabKey, tabText, onClick }: TabProps) => {
  return (
    <div
      className={classnames(styles.tab, { [styles['tab-active']]: isActive })}
      onClick={() => {
        onClick(tabKey);
      }}
    >
      {tabText}
    </div>
  );
};

interface TabNavProps {
  tabs: TabBaseProps[];
  activeTab: number | string;
  onTabClick: (tabKey: any) => void;
  onStickyChange?: Function;
}

export const TabNav = ({ tabs, activeTab, onTabClick, onStickyChange }: TabNavProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const cb = () => {
      if (elRef.current) {
        const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
        const rootOffsetTop = elRef.current?.offsetTop || 0;
        const isStuck = window.scrollY > rootOffsetTop - headerHeight;
        setIsStuck(isStuck);
        onStickyChange && onStickyChange(isStuck);
      }
    };
    window.addEventListener('scroll', cb);
    return () => window.removeEventListener('scroll', cb);
  }, [onStickyChange]);

  return (
    <div ref={elRef} className={classnames([styles.nav, styles.sticky, { [styles.stuck]: isStuck }])}>
      <div className={styles.navContent}>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            tabKey={tab.key}
            tabText={tab.text}
            isActive={tab.key === activeTab}
            onClick={onTabClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TabNav;
