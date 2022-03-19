import styles from './CareerEvents.module.scss';
import SectionWrapper from 'components/molecules/SectionWrapper';
import { Events, Event } from './events';

const CareerEvents = () => {
  return (
    <>
      <div>
        <SectionWrapper>
          <div className={styles.topicSection}>
            <h2>職涯活動</h2>
            <p>
              職涯活動：由第 18
              屆職涯召部團隊也舉辦了一系列的職涯活動，以四大核心價值「分享、回饋、回顧、前瞻」，來協助學員在不同的產業與職務能有更深入的了解，盡情探索各種未來方向，並成為更具有競爭力的市場人才，以此籌畫了各類型職涯活動！
            </p>
          </div>
          {Events.map((careerEvent: Event, index: number) => {
            return (
              <div key={index} className={styles.eventSection}>
                <h2>
                  <div className={styles.circle}>{index + 1}</div>
                  {careerEvent.title}
                </h2>
                <p>{careerEvent.description}</p>
              </div>
            );
          })}
        </SectionWrapper>
      </div>
    </>
  );
};

export default CareerEvents;
