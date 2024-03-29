import { FC, ReactNode } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './Card.module.scss';

type CardProperty = {
  wrapperClassName?: string;
  className?: string;
  cardInfoClassName?: string;
  imgSrc: string;
  content: string;
  name?: string;
  character?: string;
  ctaText?: string;
  children?: ReactNode;
  onClickCta?: Function;
  needCommna?: boolean;
};

const Card: FC<CardProperty> = ({
  wrapperClassName,
  cardInfoClassName,
  className,
  imgSrc,
  content,
  name = '',
  character = '',
  ctaText = '看更多',
  children,
  onClickCta = () => {},
  needCommna = true,
}) => {
  return (
    <div className={classnames(wrapperClassName)}>
      <div
        className={classnames(styles.card, className)}
        onClick={() => {
          onClickCta();
        }}
      >
        <div className={styles.cardImg}>
          <Image src={imgSrc} alt="card-image" layout="fill" />
          {needCommna && (
            <span className={styles.commaIconWrapper}>
              <Image src="/images/common/icons/icon-comma.png" width="48px" height="27px" alt="decorator-comma" />
            </span>
          )}
        </div>
        <div className={classnames(styles.cardInfo, cardInfoClassName)}>
          {children}
          <p className={styles.sharingWords}>{content}</p>
          <div className={styles.footer}>
            {name && <p className={styles.sharer}>{name}</p>}
            {character && <p className={styles.sharerTitle}>{character}</p>}
            <div className={styles.cta}>
              <span>{ctaText}</span>
              <Image src="/images/icons/icon-half-arrow-right.svg" alt="icon" width="24px" height="24px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
