import type { FC } from 'react';
import classnames from 'classnames';

import Icon from 'components/atoms/Icon';

import styles from './Cta.module.scss';

type CtaProperty = {
  ctaText?: string;
  className?: string;
  onClickCta?: () => {};
};

const Cta: FC<CtaProperty> = ({ ctaText = '查看更多', className, onClickCta = () => {} }) => {
  return (
    <div className={classnames(styles.cta, className)} onClick={onClickCta}>
      <span>{ctaText}</span>
      <Icon iconSrc="/images/icons/icon-half-arrow-right.svg" />
    </div>
  );
};

export default Cta;
