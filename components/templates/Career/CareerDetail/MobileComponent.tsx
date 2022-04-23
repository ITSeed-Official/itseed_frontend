import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { appPath } from 'util/routing.config';
import { categoriesTranslateMap } from 'util/helper';

import type { CareerDetailProperty } from '../CareerDetail/CareerDetail';
import CareerCard from '../CareerLists/CareerCards/CareerCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './CareerDetail.mobile.module.scss';
import MentorInformation from 'components/atoms/MentorInformation';

const MobileComponent: FC<CareerDetailProperty> = ({ detail, list }) => {
  const router = useRouter();

  return (
    <div className={styles.careerDetailMobile}>
      <SectionWrapper
        title={categoriesTranslateMap[detail.category]}
        className={styles.titleSection}
        titleClassName={styles.title}
        isBackgroundGreen
      />
      <div className={styles.image}>
        <Image alt="mentee" src={detail.image_url} layout="fill" />
      </div>
      <SectionWrapper className={styles.menteeSection}>
        <ReactMarkdown>{detail.content}</ReactMarkdown>
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
            .map(({ id, company, position, role, mentee, overview_content, mentors_overview, category, image_url }) => (
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
                  imgSrc={image_url}
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
