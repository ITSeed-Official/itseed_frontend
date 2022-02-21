import { useState, useEffect, useRef } from 'react';
import styles from './TabNav.module.scss';
import classnames from 'classnames';

interface Tab {
  text: string;
}

interface TabActive {
  isActive: boolean;
}

interface TabClick {
  onClick: Function;
}

export const Tab = ({ isActive, text, onClick }: Tab & TabActive & TabClick) => {
  return (
    <div
      className={classnames(styles.tab, { [styles['tab-active']]: isActive })}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </div>
  );
};

interface TabNavProps {
  tabs: Tab[];
  activeTab: number | string;
  onTabClick: Function;
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
        console.log(window.scrollY, rootOffsetTop, headerHeight);
        const isStuck = window.scrollY > rootOffsetTop - headerHeight;
        setIsStuck(isStuck);
        onStickyChange && onStickyChange(isStuck);
      }
    };
    window.addEventListener('scroll', cb);
    return () => window.removeEventListener('scroll', cb);
  }, [onStickyChange]);

  return (
    <>
      <div ref={elRef}></div>
      <div className={classnames([styles.nav, styles.sticky, { [styles.stuck]: isStuck }])}>
        <div className={styles.navContent}>
          {tabs.map((tab) => (
            <Tab key={tab.text} {...tab} isActive={tab.text === activeTab} onClick={onTabClick} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabNav;
