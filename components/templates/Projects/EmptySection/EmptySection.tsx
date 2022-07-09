import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './EmptySection.module.scss';
import Image from 'next/image';

const EmptySection = () => {
  return (
    <SectionWrapper>
      <div className={styles.content}>
        <Image src="/images/projects/pics/ps_empty.png" alt="empty" width="280px" height="280px" />
      </div>
      <h2 className={styles.title}>Oops!目前尚無內容，詳細內容敬請期待!</h2>
    </SectionWrapper>
  );
};

export default EmptySection;
