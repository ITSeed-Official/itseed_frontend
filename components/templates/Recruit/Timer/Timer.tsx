import { useState, useEffect } from 'react';
import moment from 'moment';

import SectionWrapper from 'components/molecules/SectionWrapper';

import styles from './Timer.module.scss';

interface TimerProps {
  startTime: string;
  endTime: string;
}

const Timer = ({ startTime, endTime }: TimerProps) => {
  const isBeforeStartDate = moment().unix() < moment(startTime).unix();
  const isAfterEndDate = moment().unix() > moment(endTime).unix();
  let defaultDuration: moment.Duration;
  let title: string = '';

  if (isBeforeStartDate) {
    const leftTime = moment(startTime).unix() - moment().unix();
    defaultDuration = moment.duration(leftTime, 'seconds');
    title = '報名開放倒數';
  } else if (isAfterEndDate) {
    defaultDuration = moment.duration(0, 'seconds');
    title = '報名已截止';
  } else {
    const leftTime = moment(endTime).unix() - moment().unix();
    defaultDuration = moment.duration(leftTime, 'seconds');
    title = '報表截止倒數';
  }

  const [currentDuration, setCurrentDuration] = useState(defaultDuration);

  useEffect(() => {
    if (Number(currentDuration) > 0) {
      const timer = setInterval(() => {
        const newD = moment.duration(currentDuration.asSeconds() - 1, 'seconds');
        setCurrentDuration(newD);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentDuration]);

  return (
    <SectionWrapper className={styles.timerSection}>
      <h2>{title}</h2>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={styles.number}>{Math.floor(currentDuration.asDays())}</div>
          <div className={styles.unit}>Days</div>
        </div>
        <hr />
        <div className={styles.block}>
          <div className={styles.number}>{currentDuration.hours()}</div>
          <div className={styles.unit}>Hours</div>
        </div>
        <hr />
        <div className={styles.block}>
          <div className={styles.number}>{currentDuration.minutes()}</div>
          <div className={styles.unit}>Minutes</div>
        </div>
        <hr />
        <div className={styles.block}>
          <div className={styles.number}>{currentDuration.seconds()}</div>
          <div className={styles.unit}>Seconds</div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timer;
