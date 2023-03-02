import { FC } from 'react';

import { informations, Information } from './data';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Icon from 'components/atoms/Icon';

import sproutIcon from 'public/images/common/icons/sprout.png';
import styles from './Information.module.scss';

const InformationBlock: FC<{ information: Information }> = ({ information }) => (
  <div className={styles.block}>
    <h3>
      <Icon iconSrc={sproutIcon} />
      {information.title}
    </h3>
    <hr />
    <p>{information.description}</p>
  </div>
);

const Information: FC = () => {
  return (
    <SectionWrapper title="招生資訊" className={styles.informationSection}>
      <div className={styles.content}>
        <div className={styles.blocks}>
          {informations
            .filter((_, index) => index % 2 === 0)
            .map((information: Information) => (
              <InformationBlock key={information.title} information={information} />
            ))}
        </div>
        <div className={styles.blocks}>
          {informations
            .filter((_, index) => index % 2 === 1)
            .map((information: Information) => (
              <InformationBlock key={information.title} information={information} />
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Information;
