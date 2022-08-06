import { FC, Fragment, useMemo, useRef } from 'react';

import { AlumniCategory } from 'util/enum';
import { Alumni } from 'api/alumni';
import { COPYWRITING } from 'util/copywriting';
import { useTab } from 'util/hooks/useTab';

import AlumniCards from '../AlumniCards';
import TabNav from 'components/molecules/TabNav';

const categories: { type: AlumniCategory; name: string }[] = Object.values(AlumniCategory).map((ctg) => ({
  type: ctg,
  name: COPYWRITING[ctg],
}));

const filteredData = (data: Alumni[], alumniCategory: AlumniCategory): Alumni[] =>
  data.filter(({ category }) => category === alumniCategory);

const AlumniLists: FC<{ data: Alumni[] }> = ({ data: alumnies }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const tabs = useMemo(() => categories.map((c) => ({ key: c.name, text: c.name })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, true);
  const data = useMemo(
    () => ({
      [AlumniCategory.senior]: filteredData(alumnies, AlumniCategory.senior),
      [AlumniCategory.leader]: filteredData(alumnies, AlumniCategory.leader),
      [AlumniCategory.junior]: filteredData(alumnies, AlumniCategory.junior),
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
