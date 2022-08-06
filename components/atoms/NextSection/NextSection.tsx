import { FC } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import Icon from 'components/atoms/Icon';
import styles from './NextSection.module.scss';

export enum Type {
  white = 'white',
  green = 'green',
}

type PageProperty = {
  title: string;
  path: string;
  className?: string;
  onClick?: Function;
  type?: Type;
};

const NextSection: FC<PageProperty> = ({ title, path, className, onClick, type = Type.green }) => {
  return (
    <Link href={path} passHref>
      <div
        className={classnames([styles.nextSection, className, styles[`theme-${type}`]])}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }
        }}
      >
        <div className={styles.content}>
          <div className={styles.next}>
            Next
            <Icon iconSrc="/images/icons/icon-readmore-green.svg" className={classnames(styles.arrow, styles.green)} />
            <Icon iconSrc="/images/icons/icon-readmore-white.svg" className={classnames(styles.arrow, styles.white)} />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default NextSection;
