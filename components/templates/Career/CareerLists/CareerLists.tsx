import { FC, Fragment, useMemo, useState } from 'react';
import classnames from 'classnames';

import { CareerExperience, ExperienceCategory } from 'api/careers';
import { categoriesTranslateMap } from 'util/helper';

import CareerCards from './CareerCards';
import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './CareerLists.module.scss';

type ExperienceType = ExperienceCategory | 'all';

export type CareerCardProperty = {
  id: number;
  job: string;
  role: string;
  name: string;
  description: string;
  mentorsOverview: string;
  company: string | null;
  imgSrc?: string;
};

const categories: ExperienceCategory[] = ['company', 'personalization', 'interview'];

const filteredData = (data: CareerExperience[], experienceCategory: ExperienceCategory): CareerCardProperty[] =>
  data
    .filter(({ category }) => category === experienceCategory)
    .map(({ id, mentee, role, position, company, overview_content, mentors_overview }) => ({
      id,
      name: mentee,
      job: position,
      company,
      role,
      description: overview_content,
      mentorsOverview: mentors_overview,
    }));

const CareerSection: FC<{ data: CareerExperience[] }> = ({ data: careerExperiences }) => {
  const [selectedType, setSelectedType] = useState<ExperienceType>('all');

  const data = useMemo(
    () => ({
      company: filteredData(careerExperiences, 'company'),
      personalization: filteredData(careerExperiences, 'personalization'),
      interview: filteredData(careerExperiences, 'interview'),
    }),
    [careerExperiences]
  );

  return (
    <>
      <div className={styles.backgroundWrapper}>
        <SectionWrapper className={styles.controlBar}>
          {categories.map((category: ExperienceCategory) => (
            <div
              key={category}
              role="button"
              onClick={() => setSelectedType((type) => (type === category ? 'all' : category))}
              className={classnames(selectedType === category && styles.selected, styles.categoryButton)}
            >
              {categoriesTranslateMap[category]}
            </div>
          ))}
        </SectionWrapper>
      </div>
      {careerExperiences.length > 0 && (
        <>
          {categories.map((category: ExperienceCategory) => (
            <Fragment key={category}>
              {data[category].length > 0 && (selectedType === 'all' || selectedType === category) && (
                <CareerCards
                  className={classnames(category !== 'personalization' && styles.greenBackground)}
                  careerCards={data[category]}
                  category={category}
                  title={categoriesTranslateMap[category]}
                />
              )}
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default CareerSection;
