import { FC } from 'react';
import { Pagination, A11y } from 'swiper';
import { Swiper as SwiperReact, SwiperProps } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Swiper.module.scss';

const Swiper: FC<SwiperProps> = ({ children, breakpoints, loop = true, ...props }) => {
  return (
    <SwiperReact
      className={styles.swiper}
      modules={[Pagination, A11y]}
      spaceBetween={24}
      slidesPerView={1}
      loop={loop}
      pagination={{ clickable: true }}
      breakpoints={
        breakpoints || {
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      }
      {...props}
    >
      {children}
    </SwiperReact>
  );
};

export default Swiper;
