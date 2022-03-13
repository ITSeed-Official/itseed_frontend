import { FC } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

import SectionWrapper from 'components/molecules/SectionWrapper/SectionWrapper';
import { SubTitle } from 'components/atoms/SectionTitle/SectionTitle';
import styles from './GeneralBanner.module.scss';
import { BannerType } from './enum';

export type GeneralBannerProps = {
  type: BannerType.general;
  desktopBackgroundImage?: string;
  mobileBackgroundImage?: string;
  primaryTitle: string;
  subTitle?: string;
  description?: string;
  className?: string;
};

const GeneralBanner: FC<GeneralBannerProps> = ({
  desktopBackgroundImage = '',
  mobileBackgroundImage = '',
  primaryTitle = '',
  subTitle = '',
  description = '',
  className,
}) => {
  return (
    <div className={classnames(styles.bannerContainer, className)}>
      <SectionWrapper className={styles.bannerContent}>
        <div className={styles.bannerInfo}>
          <div className={styles.primaryTitleArea}>
            {primaryTitle && <h1 className={styles.primaryTitle}>{primaryTitle}</h1>}
          </div>
          <div className={styles.subTitleArea}>
            {subTitle && <SubTitle title={subTitle} className={styles.subTitle} />}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </div>
      </SectionWrapper>
      {desktopBackgroundImage && (
        <div className={classnames([styles.desktopOnly, styles.bannerImageWrapper])}>
          <Image alt="desktop-banner-image" src={desktopBackgroundImage} width={1440} height={400} />
        </div>
      )}
      {mobileBackgroundImage && (
        <div className={classnames([styles.mobileOnly, styles.bannerImageWrapper])}>
          <Image alt="mobile-banner-image" src={mobileBackgroundImage} layout="fill" />
        </div>
      )}
      <div className={styles.filter}></div>
    </div>
  );
};

export default GeneralBanner;
