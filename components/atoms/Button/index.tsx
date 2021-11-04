import { FC } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type ButtonProperty = {
  text: string;
  className?: string;
  reverse?: boolean;
};

const Button: FC<ButtonProperty> = ({ text, className, reverse = false }) => {
  return (
    <button
      className={classnames(
        styles.button,
        reverse ? styles.reverse : styles.standard,
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
