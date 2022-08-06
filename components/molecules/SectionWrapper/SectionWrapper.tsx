import { FC, forwardRef } from 'react';
import classnames from 'classnames';

import SectionTitle from '../../atoms/SectionTitle';

import styles from './SectionWrapper.module.scss';

type SectionWrapperProperty = {
  title?: string;
  className?: string;
  titleClassName?: string;
  isBackgroundGreen?: boolean;
};

const SectionWrapper: FC<SectionWrapperProperty> = ({
  children,
  title,
  className,
  titleClassName,
  isBackgroundGreen = false,
}) => {
  const Section = (
    <section className={classnames(styles.sectionWrapper, className)}>
      {title && <SectionTitle title={title} className={classnames(styles.title, titleClassName)} />}
      {children}
    </section>
  );

  if (isBackgroundGreen) return <div className={styles.backgroundWrapper}>{Section}</div>;

  return Section;
};

export default SectionWrapper;
