import { FC, Fragment, useMemo, useState } from 'react';
import classnames from 'classnames';

import { CareerExperience, ExperienceCategory } from 'api/careers';
import { categoriesTranslateMap } from 'util/helper';

import CareerCards from './CareerCards';
import type { CareerCardType } from './CareerCards/CareerCard';
import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './CareerLists.module.scss';

type ExperienceType = ExperienceCategory | 'all';

const categories: ExperienceCategory[] = ['company', 'personalization', 'interview'];

const filteredData = (data: CareerExperience[], experienceCategory: ExperienceCategory): CareerCardType[] =>
  data
    .filter(({ category }) => category === experienceCategory)
    .map(({ id, mentee, role, position, company, category, overview_content, mentors_overview, image_url }) => ({
      id,
      name: mentee,
      job: position,
      company,
      category,
      role,
      description: overview_content,
      mentorsOverview: mentors_overview,
      imgSrc: image_url,
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
      <SectionWrapper className={styles.controlBar} isBackgroundGreen>
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
      {careerExperiences.length > 0 && (
        <>
          {categories.map((category: ExperienceCategory) => (
            <Fragment key={category}>
              {data[category].length > 0 && (selectedType === 'all' || selectedType === category) && (
                <CareerCards
                  className={classnames(category !== 'personalization' && styles.greenBackground)}
                  careerCards={data[category]}
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
