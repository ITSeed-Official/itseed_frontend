import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { appPath } from 'util/routing.config';
import { translateMap } from 'util/translate';

import type { CareerDetailProperty } from '../CareerDetail/CareerDetail';
import CareerCard from '../CareerCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import Markdown from 'components/molecules/Markdown';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './CareerDetail.mobile.module.scss';
import MentorInformation from 'components/atoms/MentorInformation';

const MobileComponent: FC<CareerDetailProperty> = ({ detail, list }) => {
  const router = useRouter();

  return (
    <div className={styles.careerDetailMobile}>
      <SectionWrapper
        title={translateMap.career[detail.category]}
        className={styles.titleSection}
        titleClassName={styles.title}
        isBackgroundGreen
      />
      <div className={styles.image}>
        <Image alt="mentee" src={detail.image.url} layout="fill" />
      </div>
      <SectionWrapper className={styles.menteeSection}>
        <Markdown text={detail.content} />
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

export default MobileComponent;
