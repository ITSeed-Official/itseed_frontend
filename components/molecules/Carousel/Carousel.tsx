import { FC } from "react";
import classnames from "classnames";

import styles from "./Carousel.module.scss";

type CarouselProperty = {
  className?: string;
};

const Carousel: FC<CarouselProperty> = ({ children, className }) => {
  return (
    <div className={classnames(styles.carousel, className)}>{children}</div>
  );
};

export default Carousel;
