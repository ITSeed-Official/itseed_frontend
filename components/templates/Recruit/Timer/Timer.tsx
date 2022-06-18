import styles from './Timer.module.scss';
import SectionWrapper from 'components/molecules/SectionWrapper';
import moment from 'moment';
import { useState, useEffect } from 'react';

interface TimerProps {
  endTime: string;
}

const Timer = ({ endTime }: TimerProps) => {
  const leftTime = moment(endTime).unix() - moment().unix();
  let duration = moment.duration(leftTime, 'seconds');

  const [currentDuration, setCurrentDuration] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      duration = moment.duration(currentDuration.asSeconds() - 1, 'seconds');
      setCurrentDuration(duration);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentDuration]);

  return (
    <SectionWrapper className={styles.timerSection}>
      <h2>報名倒數</h2>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={styles.number}>{currentDuration.days()}</div>
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
