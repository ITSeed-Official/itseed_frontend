import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import SectionWrapper from 'components/molecules/SectionWrapper/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button/Button';
import styles from './SlashBanner.module.scss';
import { BannerType } from './enum';

export type SlashBannerProps = {
  type: BannerType.slash;
  className?: string;
  bannerImage: string;
  PrimaryTitleContent: FC<any>;
  subTitle?: string;
  description?: string;
  ctaText?: string;
  ctaIcon?: ButtonIcon;
  ctaOnClick?: Function;
};

const SlashBanner: FC<SlashBannerProps> = ({
  bannerImage,
  PrimaryTitleContent,
  subTitle,
  description,
  ctaText,
  ctaIcon,
  ctaOnClick,
  className,
}) => {
  return (
    <div className={classnames(styles.container, className)}>
      <SectionWrapper className={styles.contentWrapper}>
        <h1 className={styles.primaryTitle}>
          <PrimaryTitleContent />
        </h1>
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <p className={styles.description}>{description}</p>
        {ctaText && <Button text={ctaText} className={styles.ctaButton} icon={ctaIcon} onClick={ctaOnClick} />}
      </SectionWrapper>
      <div className={styles.infoBackground} />
      <div className={styles.bannerImageWrapper}>
        <Image alt="banner-image" src={bannerImage} width={863} height={600} />
      </div>
      <div className={styles.ScrollHinter}>
        <span>上滑瞭解更多</span>
        <span className={styles.ScrollHinterIconWrapper}>
          <Image alt="arrow-icon" src="/images/icons/icon-double-arrow-up.svg" width={16} height={16} />
        </span>
      </div>
    </div>
  );
};

export default SlashBanner;
