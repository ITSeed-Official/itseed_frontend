import { FC } from 'react';
import { useRouter } from 'next/router';

import { appPath } from 'util/routing.config';
import Card from 'components/molecules/Card';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import Button, { ButtonIcon } from 'components/atoms/Button';
import { Alumni } from 'api/alumni';
import styles from './AlumniSection.module.scss';

interface IProps {
  alumniList: Alumni[];
}

const AlumniSection: FC<IProps> = ({ alumniList }) => {
  const router = useRouter();

  const list = alumniList.filter(({ title }) => title && title.length > 0).slice(0, 6);

  if (list.length == 0) {
    return null;
  }

  return (
    <div className={styles.alumniContainer}>
      <SectionWrapper>
        <h2 className={styles.title}>聽聽校友怎麼說</h2>
        <Swiper>
          {list.map(({ id, title, name, image, position }) => (
            <SwiperSlide key={id} className={styles.SwiperSlide}>
              <Card
                wrapperClassName={styles.cardWrapper}
                content={title || ''}
                name={name}
                imgSrc={image.url}
                character={position}
                onClickCta={() => router.push(`${appPath.alumni}/${id}`)}
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
