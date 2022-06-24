import type { FC } from 'react';

import SectionWrapper from 'components/molecules/SectionWrapper';
import CareerCard, { CareerCardType } from '../CareerCard';

import styles from './CareerCards.module.scss';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';

interface CareerCardsProperty {
  isBackgroundGreen: boolean;
  careerCards: CareerCardType[];
  title: string;
}

const DesktopComponent: FC<Pick<CareerCardsProperty, 'careerCards'>> = ({ careerCards }) => {
  return (
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
  );
};

const MobileComponent: FC<Pick<CareerCardsProperty, 'careerCards'>> = ({ careerCards }) => {
  return (
    <Swiper className={styles.swiper} loop={false}>
      {careerCards.map(({ id, company, category, job, role, name, description, imgSrc, mentorsOverview }) => (
        <SwiperSlide key={id}>
          <CareerCard
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CareerCards: FC<CareerCardsProperty> = ({ isBackgroundGreen, careerCards, title }) => {
  return (
    <>
      <SectionWrapper className={styles.cardsSectionDesktop} title={title} isBackgroundGreen={isBackgroundGreen}>
        <DesktopComponent careerCards={careerCards} />
      </SectionWrapper>
      <SectionWrapper className={styles.cardsSectionMobile} title={title} isBackgroundGreen={isBackgroundGreen}>
        <MobileComponent careerCards={careerCards} />
      </SectionWrapper>
    </>
  );
};

export default CareerCards;
