import { FC, Fragment, useMemo, useRef } from 'react';
import classnames from 'classnames';

import { CareerExperience, ExperienceCategory } from 'api/careers';
import { translateMap } from 'util/translate';
import { useTab } from 'util/hooks/useTab';

import CareerCards from '../CareerCards';
import type { CareerCardType } from '../CareerCard';
import TabNav from 'components/molecules/TabNav';

import styles from './CareerLists.module.scss';

const categories: { type: ExperienceCategory; name: string }[] = Object.keys(translateMap.career).map((type) => ({
  type: type as ExperienceCategory,
  name: translateMap.career[type as ExperienceCategory],
}));

const filteredData = (data: CareerExperience[], experienceCategory: ExperienceCategory): CareerCardType[] =>
  data
    .filter(({ category }) => category === experienceCategory)
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
  const tabs = useMemo(() => categories.map((c) => ({ text: c.name })), []);
  const { setIsSubNavStuck, activeTab, setActiveTab } = useTab(tabs, false);
  const data = useMemo(
    () => ({
      company: filteredData(careerExperiences, 'company'),
      personalization: filteredData(careerExperiences, 'personalization'),
      interview: filteredData(careerExperiences, 'interview'),
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
                <CareerCards
                  className={classnames(type !== 'personalization' && styles.greenBackground)}
                  careerCards={data[type]}
                  title={name}
                />
              )}
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default CareerLists;
