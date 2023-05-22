import { FC, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Alumni } from 'api/alumni';
import { appPath } from 'util/routing.config';

import AlumniCard from '../AlumniCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Markdown from 'components/molecules/Markdown';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './AlumniDetail.module.scss';

type AlumniDetailProperty = {
  detail: Alumni;
  list: Alumni[];
};

const AlumniDetail: FC<AlumniDetailProperty> = ({ detail, list }) => {
  const router = useRouter();
  const otherAlumnies = useMemo(() => list.filter((alumni) => alumni.id !== detail.id), [list, detail.id]);

  return (
    <>
      <SectionWrapper className={styles.headerSection} isBackgroundGreen>
        <div className={styles.image}>
          <Image src={detail.image.url} alt={detail.name} layout="fill" />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>{detail.title}</h2>
          <p className={styles.name}>{detail.name}</p>
          <p className={styles.position}>{detail.position}</p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <Markdown text={detail.content} />
        <Button
          className={styles.button}
          text="回校友評價"
          onClick={() => router.push(appPath.alumni)}
          icon={ButtonIcon.arrow}
          position="left"
        />
      </SectionWrapper>
      {otherAlumnies.length > 0 && (
        <SectionWrapper title={'看看其他人的評價分享'}>
          <Swiper className={styles.swiper} loop={false}>
            {otherAlumnies.map((alumni) => (
              <SwiperSlide key={alumni.id}>
                <AlumniCard alumni={alumni} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionWrapper>
      )}
    </>
  );
};

export default AlumniDetail;
