import { FC, Fragment } from 'react';
import SectionWrapper from 'components/molecules/SectionWrapper';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button, { ButtonIcon } from 'components/atoms/Button';
import styles from './TimelineSection.module.scss';
import { appPath } from 'util/routing.config';

interface ICard {
  step: number;
  imgSrc: string;
  title: string[];
  description: string[];
}

const cards: ICard[] = [
  {
    step: 1,
    imgSrc: '/images/homepage/icons/joinus_step1.png',
    title: ['5/24-6/30', '官網線上報名'],
    description: ['註冊並填寫基本資料', '將所需資料上傳'],
  },
  {
    step: 2,
    imgSrc: '/images/homepage/icons/joinus_step2.png',
    title: ['5/24-7/3', '繳交報名費'],
    description: ['透過貝殼集器繳交報名費 100 元', '請在報名完成後 3 天內繳交完畢'],
  },
  {
    step: 3,
    imgSrc: '/images/homepage/icons/joinus_step3.png',
    title: ['5/24-7/6', '確認信件'],
    description: ['確認是否於繳費完', '3 天內收到信件'],
  },
];

const Card = ({ description, title, imgSrc, step }: ICard) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.stepTitle}>Step {step}</h3>
      <div className={styles.cardBody}>
        <div className={styles.cardIconWrapper}>
          <Image src={imgSrc} alt={title.length > 1 ? title[1] : ''} width="60px" height="60px" />
        </div>
        <h3 className={styles.cardTitleArea}>
          {title.map((line) => (
            <p key={line} className={styles.cardTitle}>
              {line}
            </p>
          ))}
        </h3>
        <div className={styles.cardDescriptionArea}>
          {description.map((line) => (
            <p key={line} className={styles.cardDescription}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineSection: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.timelineSection}>
      <SectionWrapper title="招募流程與時程">
        <div className={styles.content}>
          {cards.map((card, idx) => {
            return (
              <Fragment key={card.imgSrc}>
                <Card {...card} />
                {idx !== cards.length - 1 && (
                  <div className={styles.cardBlank}>
                    <Image
                      className={styles.cardBlankArrow}
                      alt="arrow"
                      src="/images/homepage/icons/joinus_arrow.png"
                      width="60px"
                      height="60px"
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        <Button
          icon={ButtonIcon.arrow}
          text="立即報名"
          className={styles.button}
          onClick={() => {
            router.push(appPath.apply);
          }}
        />
      </SectionWrapper>
    </div>
  );
};

export default TimelineSection;
