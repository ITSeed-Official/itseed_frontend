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
    name: '蕭程澤',
    img: '/images/common/pics/alumni.jpeg',
    content:
      '每個專案帶給我的成長不同，有的我與夥伴發想，探討看見的問題；有的我與夥伴共創，實地行動，落實想法。來找吧，屬於你的寶藏都在這了！',
    character: '19th 職涯專案總召',
  },
  {
    id: 2,
    name: '羅元駿',
    img: '/images/common/pics/alumni2.jpeg',
    content: '在資種，一同成長蛻變的夥伴、鼓勵積極態度的環境、熱心付出的學長姐，種種美好都不自覺地讓我愛上這個地方。',
    character: '19th 學員',
  },
  {
    id: 3,
    name: '陳泓文',
    img: '/images/common/pics/alumni3.jpeg',
    content: '資種的各種課程，是引領我的必要羅盤，幫助我了解職涯的航道該怎麼行駛，該怎麼塑造想要成為的自己。',
    character: '第18屆副學員長',
  },
  {
    id: 4,
    name: '陳思穎',
    img: '/images/common/pics/alumni4.jpeg',
    content: '我們永遠無法用相同的自己，得到不一樣的未來',
    character: '19th 學員長',
  },
  {
    id: 5,
    name: '郭宜臻',
    img: '/images/common/pics/alumni5.jpeg',
    content: '也許困惑迷惘，但這條路不再孤單',
    character: '19th 副學員長',
  },
  {
    id: 6,
    name: '蘇如禧',
    img: '/images/common/pics/alumni6.jpeg',
    content: '在資種，擁有豐富的資源、寬廣的舞台、優秀的夥伴，等著你探索自我的價值所在。',
    character: '19th 行銷長',
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
