import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classnames from 'classnames';

import { translateMap } from 'util/translate';
import { useScroll } from 'util/hooks/useEvent';
import { appPath } from 'util/routing.config';

import type { CareerDetailProperty } from '../CareerDetail/CareerDetail';
import CareerCard from '../CareerCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import Markdown from 'components/molecules/Markdown';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './CareerDetail.desktop.module.scss';
import MentorInformation from 'components/atoms/MentorInformation';

const DesktopComponent: FC<CareerDetailProperty> = ({ detail, list }) => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();

  useEffect(() => {
    if (scrollY > 400 && !slideLeft) {
      setSlideLeft(true);
    }
    if (scrollY > 800 && !slideRight) {
      setSlideRight(true);
    }
  }, [scrollY, slideRight, slideLeft]);

  return (
    <div className={styles.careerDetailDesktop}>
      <SectionWrapper
        className={styles.menteeSection}
        title={translateMap.career[detail.category]}
        titleClassName={styles.mainTitle}
        isBackgroundGreen
      >
        <div className={classnames(styles.image, slideLeft && styles.slidein)}>
          <Image alt="mentee" src={detail.image.url} layout="fill" />
        </div>
        <div className={styles.contentWrapper}>
          <div className={classnames(styles.content, slideRight && styles.slidein)}>
            <div className={styles.jobInfo}>
              {detail.company && <p className={styles.company}>{detail.company}</p>}
              <p className={classnames(detail.company ? styles.job : styles.company)}>{detail.position}</p>
            </div>
            <div className={styles.menteeInfo}>
              <p>{detail.mentee_school}</p>
              <p>{detail.mentee}</p>
            </div>
            <Markdown text={detail.content} />
          </div>
          <div className={styles.leaf} />
          <div className={styles.emptyLeaf} />
          <div className={styles.rotateLeaf} />
        </div>
      </SectionWrapper>
      {detail.mentors && (
        <SectionWrapper className={styles.mentorsSection}>
          {detail.mentors.map((mentor, index) => (
            <MentorInformation key={index} MentorDetail={mentor} />
          ))}
        </SectionWrapper>
      )}
      <SectionWrapper title="看看其他人的心得分享">
        <Swiper className={styles.careerSwiper} loop={false}>
          {list
            .filter((experience) => experience.id !== detail.id)
            .map(({ id, company, position, role, mentee, overview_content, mentors_overview, category, image }) => (
              <SwiperSlide key={id}>
                <CareerCard
                  id={id}
                  wrapperClassName={styles.card}
                  company={company}
                  job={position}
                  role={role}
                  name={mentee}
                  description={overview_content}
                  mentorsOverview={mentors_overview}
                  category={category}
                  imgSrc={image.url}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Button text="回職涯體驗" onClick={() => router.push(appPath.career)} icon={ButtonIcon.arrow} position="left" />
      </SectionWrapper>
    </div>
  );
};

export default DesktopComponent;
