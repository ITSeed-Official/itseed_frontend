import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Icon.module.scss';

type IconProperty = {
  width?: number;
  height?: number;
  link?: string;
  iconSrc: string | StaticImageData;
  className?: string;
};

const Icon: FC<IconProperty> = ({ width = 24, height = 24, link = '', iconSrc, className = '' }) => {
  return (
    <div style={{ width, height }} className={classnames(styles.icon, className)}>
      {link ? (
        <Link href={link} passHref>
          <Image alt="icon" src={iconSrc} layout="fill" />
        </Link>
      ) : (
        <Image alt="icon" src={iconSrc} layout="fill" />
      )}
    </div>
  );
};

export default Icon;
