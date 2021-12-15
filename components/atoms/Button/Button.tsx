import { FC } from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonTheme {
  outline = "outline",
  noBorder = "noBorder",
}

export type Props = {
  text?: string;
  className?: string;
  theme?: ButtonTheme;
  onClick?: Function;
};

const Button: FC<Props> = ({
  text,
  className,
  theme = ButtonTheme.outline,
  children,
  onClick = () => {},
}) => {
  return (
    <button
      className={classnames(styles.button, styles[theme], className)}
      onClick={(e) => {
        onClick();
      }}
    >
      {children || text}
    </button>
  );
};

export default Button;
