import type { FC } from 'react';

import { useMedia } from 'util/hooks/useMedia';
import { chunkArray } from 'util/helper';
import type { ExperienceCategory } from 'api/careers';

import SectionWrapper from 'components/molecules/SectionWrapper';
import CareerCard, { CareerCardType } from './CareerCard';

import styles from './CareerCards.module.scss';

interface CareerCardsProperty {
  className: string;
  careerCards: CareerCardType[];
  category: ExperienceCategory;
  title: string;
}

const CareerCards: FC<CareerCardsProperty> = ({ className, careerCards, category, title }) => {
  const media = useMedia();

  const show = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  return (
    <div className={className}>
      <SectionWrapper className={styles.cardsSection} title={title} titleClassName={styles.title}>
        {chunkArray(careerCards, show[media]).map((cards, index) => (
          <div className={styles.cards} key={index}>
            {cards.map(({ id, company, job, role, name, description, imgSrc, mentorsOverview }) => (
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
        ))}
      </SectionWrapper>
    </div>
  );
};

export default CareerCards;
