import { FC, Fragment, useMemo, useRef, useEffect } from 'react';

import { AlumniCategory } from 'util/enum';
import { Alumni } from 'api/alumni';
import { COPYWRITING } from 'util/copywriting';
import { useTab } from 'util/hooks/useTab';
import { scrollTo } from 'util/scroll';

import AlumniCards from '../AlumniCards';
import TabNav from 'components/molecules/TabNav';

const categories: { type: AlumniCategory; name: string }[] = Object.values(AlumniCategory).map((ctg) => ({
  type: ctg,
  name: COPYWRITING[ctg],
}));

const filteredData = (data: Alumni[], alumniCategory: AlumniCategory): Alumni[] =>
  data.filter(({ category }) => category === alumniCategory);

const AlumniLists: FC<{ data: Alumni[] }> = ({ data: alumnies }) => {
  const seniorAlumniRef = useRef<HTMLDivElement>(null);
  const leaderAlumniRef = useRef<HTMLDivElement>(null);
  const juniorAlumniRef = useRef<HTMLDivElement>(null);

  const AlumniRefMap = useMemo(
    () => ({
      [AlumniCategory.senior]: seniorAlumniRef,
      [AlumniCategory.leader]: leaderAlumniRef,
      [AlumniCategory.junior]: juniorAlumniRef,
    }),
    []
  );

  const tabs = useMemo(() => categories.map((c) => ({ key: c.name, text: c.name })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, false);
  const data = useMemo(
    () => ({
      [AlumniCategory.senior]: filteredData(alumnies, AlumniCategory.senior),
      [AlumniCategory.leader]: filteredData(alumnies, AlumniCategory.leader),
      [AlumniCategory.junior]: filteredData(alumnies, AlumniCategory.junior),
    }),
    [alumnies]
  );

  useEffect(() => {
    switch (activeTab) {
      case COPYWRITING[AlumniCategory.junior]:
        scrollTo(AlumniRefMap[AlumniCategory.junior]);
        break;
      case COPYWRITING[AlumniCategory.senior]:
        scrollTo(AlumniRefMap[AlumniCategory.senior]);
        break;
      case COPYWRITING[AlumniCategory.leader]:
        scrollTo(AlumniRefMap[AlumniCategory.leader]);
        break;
    }
  }, [activeTab, AlumniRefMap]);

  return (
    <>
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={(tab: AlumniCategory) => {
          if (activeTab !== tab) {
            setActiveTab(tab);
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
              {data[type].length > 0 && (
                <AlumniCards
                  isBackgroundGreen={type !== 'leader'}
                  alumnies={data[type]}
                  title={name}
                  ref={AlumniRefMap[type]}
                />
              )}
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default AlumniLists;
