import { FC, forwardRef } from 'react';

import { Alumni } from 'api/alumni';
import AlumniCard from '../AlumniCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './AlumniCards.module.scss';

interface AlumniCardsProperty {
  isBackgroundGreen: boolean;
  alumnies: Alumni[];
  title: string;
}

const DesktopComponent: FC<AlumniCardsProperty> = ({ isBackgroundGreen, alumnies, title }) => {
  return (
    <SectionWrapper className={styles.cardsSectionDesktop} title={title} isBackgroundGreen={isBackgroundGreen}>
      <div className={styles.cards}>
        {alumnies.map((alumni) => (
          <AlumniCard key={alumni.id} alumni={alumni} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const MobileComponent: FC<AlumniCardsProperty> = ({ isBackgroundGreen, alumnies, title }) => {
  return (
    <SectionWrapper className={styles.cardsSectionMobile} title={title} isBackgroundGreen={isBackgroundGreen}>
      <Swiper className={styles.swiper} loop={false}>
        {alumnies.map((alumni) => (
          <SwiperSlide key={alumni.id}>
            <AlumniCard alumni={alumni} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

const AlumniCards = forwardRef<HTMLDivElement, AlumniCardsProperty>(({ isBackgroundGreen, alumnies, title }, ref) => {
  return (
    <div ref={ref}>
      <DesktopComponent isBackgroundGreen={isBackgroundGreen} alumnies={alumnies} title={title} />
      <MobileComponent isBackgroundGreen={isBackgroundGreen} alumnies={alumnies} title={title} />
    </div>
  );
});

AlumniCards.displayName = 'AlumniCards';

export default AlumniCards;
