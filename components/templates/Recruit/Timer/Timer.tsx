import styles from './Timer.module.scss';
import SectionWrapper from 'components/molecules/SectionWrapper';
import moment from 'moment';
import { useState, useEffect } from 'react';

interface TimerProps {
  endTime: string;
}

const Timer = ({ endTime }: TimerProps) => {
  const leftTime = moment(endTime).unix() - moment().unix();
  var duration = moment.duration(leftTime, 'seconds');

  const [currentDuration, setCurrentDuration] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      duration = moment.duration(currentDuration.asSeconds() - 1, 'seconds');
      setCurrentDuration(duration);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentDuration]);

  return (
    <>
      <div className={styles.desktopOnly}>
        <SectionWrapper className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardWrapper}>
              <div>
                <em>報名倒數</em>
              </div>
              <br />
            </div>
            <div className={styles.timerBlock}>
              <div className={styles.block}>
                <div>{currentDuration.days()}</div>
                <div>Days</div>
              </div>
              <hr />
              <div className={styles.block}>
                <div>{currentDuration.hours()}</div>
                <div>Hours</div>
              </div>
              <hr />
              <div className={styles.block}>
                <div>{currentDuration.minutes()}</div>
                <div>Minutes</div>
              </div>
              <hr />
              <div className={styles.block}>
                <div>{currentDuration.seconds()}</div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Timer;
