import { FC } from 'react';
import classnames from 'classnames';

import { stepMap } from 'util/form';

import Icon from 'components/atoms/Icon';

import styles from './ApplyStepsBar.module.scss';

type ApplyStepsBarProps = {
  curStep: number;
};

const ApplyStepsBar: FC<ApplyStepsBarProps> = ({ curStep = 0 }) => {
  return (
    <div className={styles.container}>
      {stepMap.map((title, index) => (
        <div key={title} className={classnames(styles.step)}>
          <h5 className={styles.title}>{title}</h5>
          <div className={classnames(styles.stepIcon, curStep === index && styles.curStep)}>
            {curStep === index ? (
              <Icon iconSrc={`/images/apply/icons/step${index + 1}-green.svg`} />
            ) : (
              <Icon iconSrc={`/images/apply/icons/step${index + 1}.svg`} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplyStepsBar;
