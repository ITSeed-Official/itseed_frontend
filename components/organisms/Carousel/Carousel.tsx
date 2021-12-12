import { FC, ReactNode } from "react";
import classnames from "classnames";
import { Carousel as SwipingCarousel } from "@trendyol-js/react-carousel";

import styles from "./Carousel.module.scss";

type CarouselProperty = {
  className?: string;
  children: any[] & ReactNode;
  show: number;
  slide: number;
};

const Carousel: FC<CarouselProperty> = ({
  children,
  className = "",
  show,
  slide,
}) => {
  return (
    <SwipingCarousel
      className={classnames(styles.carousel, className)}
      show={show}
      slide={slide}
      swiping
      dynamic
    >
      {children}
    </SwipingCarousel>
  );
};

export default Carousel;
