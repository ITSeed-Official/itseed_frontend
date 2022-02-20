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
import Icon from 'components/atoms/Icon';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './CareerDetail.mobile.module.scss';

const MobileComponent: FC<CareerDetailProperty> = ({ detail, list }) => {
  const router = useRouter();

  return (
    <div className={styles.careerDetailMobile}>
      <div className={styles.backgroundWrapper}>
        <SectionWrapper
          title={categoriesTranslateMap[detail.category]}
          className={styles.titleSection}
          titleClassName={styles.title}
        />
      </div>
      <div className={styles.image}>
        <Image alt="mentee" src={detail.image_url} layout="fill" />
      </div>
      <SectionWrapper className={styles.menteeSection}>
        <ReactMarkdown>{detail.content}</ReactMarkdown>
      </SectionWrapper>
      {detail.mentors && (
        <SectionWrapper className={styles.mentorsSection}>
          {detail.mentors.map(({ id, name, image_url, description, facebook_link, linkedin_url, email_address }) => (
            <div key={id} className={styles.mentor}>
              <div className={styles.mentorInfo}>
                <Icon iconSrc={'/images/common/icons/icon-headshot.svg'} width={60} height={60} />
                <div className={styles.mentorName}>
                  <p>Mentor</p>
                  <p>{name}</p>
                </div>
              </div>
              <ReactMarkdown className={styles.mentorDescription}>{description}</ReactMarkdown>
              <div className={styles.mentorLinks}>
                {facebook_link && (
                  <Icon link={facebook_link} iconSrc="/images/common/icons/icon-facebook-deepgreen.svg" />
                )}
                {linkedin_url && <Icon link={linkedin_url} iconSrc="/images/common/icons/icon-medium-deepgreen.svg" />}
                {email_address && <Icon link={email_address} iconSrc="/images/common/icons/icon-mail-deepgreen.svg" />}
              </div>
            </div>
          ))}
        </SectionWrapper>
      )}
      <SectionWrapper title="看看其他人的心得分享">
        <Swiper className={styles.careerSwiper} loop={false}>
          {list
            .filter((experience) => experience.id !== detail.id)
            .map(({ id, company, position, role, mentee, overview_content, mentors_overview, category }) => (
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
