import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import styles from './Button.module.scss';

export enum ButtonTheme {
  outline = 'outline',
  outlineReverse = 'outline--reverse',
  noBorder = 'noBorder',
}

export enum ButtonIcon {
  arrow = 'arrow',
  arrowReverse = 'arrowReverse',
}

export type Props = {
  text?: string;
  className?: string;
  theme?: ButtonTheme;
  onClick?: Function;
  icon?: ButtonIcon;
  position?: 'left' | 'right';
  disabled?: boolean;
};

const iconImageMap = {
  [ButtonIcon.arrow]: '/images/icons/icon-half-arrow-right.svg',
  [ButtonIcon.arrowReverse]: '/images/icons/icon-reverse-half-arrow-right.svg',
};

const iconHoverImageMap = {
  [ButtonIcon.arrow]: '/images/icons/icon-half-arrow-right--hover.svg',
  [ButtonIcon.arrowReverse]: '/images/icons/icon-reverse-half-arrow-right--hover.svg',
};

const Button: FC<Props> = ({
  text,
  className,
  theme = ButtonTheme.outline,
  children,
  onClick = () => {},
  icon,
  position = 'right',
  disabled = false,
}) => {
  const Icons = icon && (
    <>
      <i className={styles.iconOriginal}>
        <Image src={iconImageMap[icon]} alt="icon" width="24px" height="24px" />
      </i>
      <i className={styles.iconHover}>
        <Image src={iconHoverImageMap[icon] || iconImageMap[icon]} alt="icon" width="24px" height="24px" />
      </i>
    </>
  );

  return (
    <button
      className={classnames(styles.button, styles[theme], className)}
      onClick={(e) => {
        onClick();
      }}
      disabled={disabled}
    >
      {Icons && position === 'left' && (
        <span className={styles.iconWrapper} data-position="left">
          {Icons}
        </span>
      )}
      {children || text}
      {Icons && position === 'right' && <span className={styles.iconWrapper}>{Icons}</span>}
    </button>
  );
};

export default Button;
