import { FC } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

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

const NextSection: FC<PageProperty> = ({ title, path, className, onClick, type = Type.white }) => {
  return (
    <Link href={path} passHref>
      <div
        className={classnames([styles.section, className, styles[`theme-${type}`]])}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }
        }}
      >
        <div className={styles.next}>
          Next
          <span className={styles.arrowWrapper}>
            <Image
              alt="read more"
              src="/images/common/icons/readmore.svg"
              width="24"
              height="24"
              className={styles.arrow}
            />
          </span>
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
};

export default NextSection;
