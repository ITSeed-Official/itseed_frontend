import styles from './DataProjectSection.module.scss';
import Icon from 'components/atoms/Icon';
import SectionWrapper from 'components/molecules/SectionWrapper';

const DataProjectSection = () => {
  return (
    <>
      <SectionWrapper>
        <div className={styles.section}>
          <Icon iconSrc={'/images/projects/icons/planet.png'} width={280} height={280} />
        </div>
        <div className={styles.contentSection}>
          <p>Oops!目前尚無內容，詳細內容盡請期待!</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default DataProjectSection;
