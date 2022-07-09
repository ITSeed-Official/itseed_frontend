import { FC, useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

import arrow from 'public/images/common/arrow.png';

import styles from './CollapseBox.module.scss';

type CollapseBoxProperty = {
  size?: 'sm' | 'md';
  className?: string;
  title: string;
  defaultOpen?: boolean;
};

const CollapseBox: FC<CollapseBoxProperty> = ({ size = 'sm', className, title, children, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);

  return (
    <div className={classnames(size === 'sm' ? styles.collapseBox : styles.collapseBoxMd, className)}>
      <div
        className={classnames(styles.collapseHeader, isOpen && styles.open)}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className={size === 'sm' ? styles.title : styles.titleMd}>{title}</span>
        <div className={styles.arrowWrapper}>
          <Image
            className={classnames(styles.arrow, isOpen && styles.arrowReverse)}
            alt="arrow"
            src={arrow}
            width="36px"
            height="36px"
          />
        </div>
      </div>
      {isOpen && <div className={size === 'sm' ? styles.content : styles.contentMd}>{children}</div>}
    </div>
  );
};

export default CollapseBox;
