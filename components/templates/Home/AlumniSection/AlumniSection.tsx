import { FC } from 'react';
import { useRouter } from 'next/router';

import { appPath } from 'util/routing.config';

import Card from 'components/molecules/Card';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './AlumniSection.module.scss';

const data = [
  {
    id: 1,
    name: '賴一霖1',
    img: '/images/common/pics/alumni.png',
    content:
      '「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」',
    character: '第18屆副學員長',
  },
  {
    id: 2,
    name: '賴一霖2',
    img: '/images/common/pics/alumni2.png',
    content:
      '「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」',
    character: '第18屆副學員長',
  },
  {
    id: 3,
    name: '賴一霖3',
    img: '/images/common/pics/alumni3.png',
    content:
      '「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」',
    character: '第18屆副學員長',
  },
  {
    id: 4,
    name: '賴一霖4',
    img: '/images/common/pics/alumni.png',
    content:
      '「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」',
    character: '第18屆副學員長',
  },
  {
    id: 5,
    name: '賴一霖5',
    img: '/images/common/pics/alumni2.png',
    content:
      '「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」',
    character: '第18屆副學員長',
  },
  {
    id: 6,
    name: '賴一霖6',
    img: '/images/common/pics/alumni3.png',
    content:
      '「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」',
    character: '第18屆副學員長',
  },
];

const AlumniSection: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.alumniContainer}>
      <SectionWrapper>
        <h2 className={styles.title}>聽聽校友怎麼說</h2>
        <Swiper>
          {data.map(({ id, content, name, img, character }) => (
            <SwiperSlide key={id} className={styles.SwiperSlide}>
              <Card
                wrapperClassName={styles.cardWrapper}
                content={content}
                name={name}
                imgSrc={img}
                character={character}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          text="全部校友評價"
          className={styles.button}
          icon={ButtonIcon.arrow}
          onClick={() => {
            router.push(appPath.alumni);
          }}
        />
      </SectionWrapper>
    </div>
  );
};

export default AlumniSection;
