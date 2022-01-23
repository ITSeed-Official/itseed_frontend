import { FC } from 'react';
import classnames from 'classnames';

import SectionWrapper from 'components/molecules/SectionWrapper/SectionWrapper';
import Button from 'components/atoms/Button/Button';
import { SectionBigTitle, SubTitle } from 'components/atoms/SectionTitle/SectionTitle';
import styles from './GeneralBanner.module.scss';
import { BannerType } from './enum';

export type GeneralBannerProps = {
  type: BannerType.general;
  className?: string;
  backgroundImage?: string;
  primaryTitle?: string;
  subTitle?: string;
  subText?: string;
  buttonText?: string;
  showSummaryInfo?: boolean;
};

const GeneralBanner: FC<GeneralBannerProps> = ({
  backgroundImage = '',
  primaryTitle = '',
  subTitle = '',
  subText = '',
  buttonText = '',
  showSummaryInfo = false,
  className,
}) => {
  return (
    <div
      className={classnames(styles.bannerContainer, className)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SectionWrapper className={styles.bannerContent}>
        <div className={styles.bannerInfo}>
          {primaryTitle && <SectionBigTitle title={primaryTitle} />}
          {subTitle && <SubTitle title={subTitle} className={styles.subTitle} />}

          {subText && <p>{subText}</p>}
          {buttonText && <Button text={buttonText} className={styles.button} />}
        </div>
        {showSummaryInfo && <div className={styles.summaryInfo} />}
      </SectionWrapper>
    </div>
  );
};

export default GeneralBanner;
