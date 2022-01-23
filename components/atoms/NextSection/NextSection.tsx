import { FC } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import styles from './NextSection.module.scss';

type PageProperty = {
  title: string;
  path: string;
  className?: string;
};

const NextSection: FC<PageProperty> = ({ title, path, className }) => {
  return (
    <Link href={path} passHref>
      <div className={classnames(styles.section, className)}>
        <div className={styles.next}>
          Next
          <Image alt="read more" src="/images/common/icons/readmore.svg" width="24" height="24" />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
};

export default NextSection;
