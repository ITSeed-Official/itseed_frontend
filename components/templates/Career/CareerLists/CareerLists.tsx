import { FC, Fragment, useMemo, useRef } from 'react';
import { COPYWRITING } from 'util/copywriting';
import { CareerCategory } from 'util/enum';
import { CareerExperience } from 'api/careers';
import { useTab } from 'util/hooks/useTab';

import CareerCards from '../CareerCards';
import type { CareerCardType } from '../CareerCard';
import TabNav from 'components/molecules/TabNav';

const categories: { type: CareerCategory; name: string }[] = Object.values(CareerCategory).map((cate) => ({
  type: cate,
  name: COPYWRITING[cate],
}));

const filteredData = (data: CareerExperience[], careerCategory: CareerCategory): CareerCardType[] =>
  data
    .filter(({ category }) => category === careerCategory)
    .map(({ id, mentee, role, position, company, category, overview_content, mentors_overview, image }) => ({
      id,
      name: mentee,
      job: position,
      company,
      category,
      role,
      description: overview_content,
      mentorsOverview: mentors_overview,
      imgSrc: image.url,
    }));

const CareerLists: FC<{ data: CareerExperience[] }> = ({ data: careerExperiences }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const tabs = useMemo(() => categories.map((c) => ({ key: c.name, text: c.name })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, true);

  const data = useMemo(
    () => ({
      company: filteredData(careerExperiences, CareerCategory.company),
      personalization: filteredData(careerExperiences, CareerCategory.personalization),
      interview: filteredData(careerExperiences, CareerCategory.interview),
    }),
    [careerExperiences]
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
      {careerExperiences.length > 0 && (
        <>
          {categories.map(({ type, name }) => (
            <Fragment key={type}>
              {data[type].length > 0 && (activeTab === '' || activeTab === name) && (
                <CareerCards isBackgroundGreen={type !== 'personalization'} careerCards={data[type]} title={name} />
              )}
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default CareerLists;
