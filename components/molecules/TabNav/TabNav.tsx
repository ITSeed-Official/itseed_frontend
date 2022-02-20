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
}

export const TabNav = ({ tabs, activeTab, onTabClick }: TabNavProps) => {
  return (
    <div className={styles.nav}>
      {tabs.map((tab) => (
        <Tab key={tab.text} {...tab} isActive={tab.text === activeTab} onClick={onTabClick} />
      ))}
    </div>
  );
};

export default TabNav;
