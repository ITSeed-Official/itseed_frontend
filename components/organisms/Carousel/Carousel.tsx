import { FC, ReactNode } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import { Carousel as SwipingCarousel } from '@trendyol-js/react-carousel';

import styles from './Carousel.module.scss';

type CarouselProperty = {
  className?: string;
  children: any[] & ReactNode;
  show: number;
  slide: number;
};

const LeftArrow = () => (
  <div className={styles.leftArrow}>
    <div className={styles.arrowImageWrapper}>
      <Image src="/images/common/icons/arrow_left.svg" alt="arrow_left" layout="fill" />
    </div>
  </div>
);

const RightArrow = () => (
  <div className={styles.rightArrow}>
    <div className={styles.arrowImageWrapper}>
      <Image src="/images/common/icons/arrow_right.svg" alt="arrow_left" layout="fill" />
    </div>
  </div>
);

const Carousel: FC<CarouselProperty> = ({ children, className = '', show, slide }) => {
  return (
    <SwipingCarousel
      className={classnames(styles.carousel, className)}
      show={show}
      slide={slide}
      swipeOn={0.5}
      swiping
      dynamic
      leftArrow={LeftArrow()}
      rightArrow={RightArrow()}
    >
      {children}
    </SwipingCarousel>
  );
};

export default Carousel;
