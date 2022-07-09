import { FC, Fragment, useMemo, useRef } from 'react';

import { Alumni, AlumniType } from 'api/alumni';
import { translateMap } from 'util/translate';
import { useTab } from 'util/hooks/useTab';

import AlumniCards from '../AlumniCards';
import TabNav from 'components/molecules/TabNav';

const categories: { type: AlumniType; name: string }[] = Object.keys(translateMap.alumni).map((type) => ({
  type: type as AlumniType,
  name: translateMap.alumni[type as AlumniType],
}));

const filteredData = (data: Alumni[], alumniCategory: AlumniType): Alumni[] =>
  data.filter(({ category }) => category === alumniCategory);

const AlumniLists: FC<{ data: Alumni[] }> = ({ data: alumnies }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const tabs = useMemo(() => categories.map((c) => ({ key: c.name, text: c.name })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, false);
  const data = useMemo(
    () => ({
      senior: filteredData(alumnies, 'senior'),
      leader: filteredData(alumnies, 'leader'),
      junior: filteredData(alumnies, 'junior'),
    }),
    [alumnies]
  );

  return (
    <div ref={elRef}>
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={(tab: string) => {
          if (activeTab !== tab) {
            setActiveTab(tab);
            const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
            const contentOffsetTop = elRef.current?.offsetTop || 0;
            window.scrollTo({ left: 0, top: contentOffsetTop - headerHeight, behavior: 'smooth' });
            return;
          }
          setActiveTab('');
        }}
        onStickyChange={setIsSubNavStuck}
      />
      {alumnies.length > 0 && (
        <>
          {categories.map(({ type, name }) => (
            <Fragment key={type}>
              {data[type].length > 0 && (activeTab === '' || activeTab === name) && (
                <AlumniCards isBackgroundGreen={type !== 'leader'} alumnies={data[type]} title={name} />
              )}
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default AlumniLists;
