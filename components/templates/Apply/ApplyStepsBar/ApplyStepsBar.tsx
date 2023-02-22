import { FC } from 'react';
import classnames from 'classnames';
import Icon from 'components/atoms/Icon';

import styles from './ApplyStepsBar.module.scss';

type ApplyStepsBarProps = {
  curStep: number;
  goTo: Function;
};

const steps = ['DISC', '基本資料', '書審問題', '檔案上傳', '前往繳費'];

const ApplyStepsBar: FC<ApplyStepsBarProps> = ({ curStep = 0, goTo }) => {
  return (
    <div className={styles.container}>
      {steps.map((title, index) => (
        <div key={title} className={classnames(styles.step, curStep === index && styles.curStep)}>
          <h5 className={styles.title} onClick={() => goTo(index)}>
            {title}
          </h5>
          <div className={classnames(styles.stepIcon, curStep === index && styles.curStep)}>
            <Icon
              onClick={() => goTo(index)}
              width={36}
              height={36}
              iconSrc={`/images/apply/icons/step${index + 1}.svg`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplyStepsBar;
