import type { FC } from 'react';

import { chunkArray } from 'util/helper';

import SectionWrapper from 'components/molecules/SectionWrapper';
import CareerCard, { CareerCardType } from './CareerCard';

import styles from './CareerCards.module.scss';

interface CareerCardsProperty {
  className: string;
  careerCards: CareerCardType[];
  title: string;
}

const CareerCards: FC<CareerCardsProperty> = ({ className, careerCards, title }) => {
  return (
    <div className={className}>
      <SectionWrapper className={styles.cardsSection} title={title} titleClassName={styles.title}>
        <div className={styles.cards}>
          {careerCards.map(({ id, company, category, job, role, name, description, imgSrc, mentorsOverview }) => (
            <CareerCard
              key={id}
              id={id}
              wrapperClassName={styles.card}
              company={company}
              job={job}
              role={role}
              name={name}
              description={description}
              imgSrc={imgSrc}
              mentorsOverview={mentorsOverview}
              category={category}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CareerCards;
