import type { FC } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

import type { CourseDetailType } from 'api/courses';
import { appPath } from 'util/routing.config';

import CoursesLayout from '../CoursesLayout';
import CoursesCard from '../CoursesCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';
import NextSection from 'components/atoms/NextSection';
import Icon from 'components/atoms/Icon';
import SproutIcon from 'public/images/common/icons/sprout.png';

import styles from './CoursesDetail.module.scss';

type CoursesDetailProperty = {
  detail: CourseDetailType;
  list: CourseDetailType[];
};

const CoursesDetail: FC<CoursesDetailProperty> = ({ detail, list }) => {
  const {
    id,
    title,
    subtitle,
    overview,
    lecturer,
    lecturer_company,
    lecturer_position,
    lecturer_background,
    agenda,
    experience,
    sharer,
    sharer_education,
    image,
  } = detail;

  const router = useRouter();

  return (
    <CoursesLayout primaryTitle={title} subTitle={subtitle} description={overview}>
      <SectionWrapper className={styles.courseIntro} isBackgroundGreen>
        <div className={styles.courseInfo}>
          <h2>課程心得</h2>
          <p className={styles.experience}>{experience}</p>
          <p className={styles.name}>{sharer}</p>
          <p className={styles.personalInfo}>{sharer_education}</p>
        </div>
        <div className={styles.courseImageDesktop}>
          <Image src={image.url} alt={image.name} layout="fill" />
        </div>
      </SectionWrapper>
      <div className={styles.courseImageMobile}>
        <Image src={image.url} alt={image.name} layout="fill" />
      </div>

      <SectionWrapper className={styles.courseIntro}>
        <div className={styles.agenda}>
          <div className={styles.title}>
            <Icon iconSrc={SproutIcon} />
            <span>課程大綱</span>
          </div>
          <ReactMarkdown className={styles.content}>{agenda}</ReactMarkdown>
        </div>
        <div className={styles.line} />
        <div className={styles.lecturer}>
          <div className={styles.title}>
            <Icon iconSrc={SproutIcon} />
            <span>講師資訊</span>
          </div>
          <div className={styles.subTitle}>
            <p className={styles.name}>{lecturer}</p>
            {(lecturer_company || lecturer_position) && (
              <p className={styles.personalInfo}>
                {lecturer_company} {lecturer_position}
              </p>
            )}
          </div>
          <ReactMarkdown className={styles.content}>{lecturer_background}</ReactMarkdown>
        </div>
      </SectionWrapper>

      <SectionWrapper title="更多課程回顧" isBackgroundGreen>
        <Swiper
          className={styles.courseSwiper}
          breakpoints={{
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {list
            .filter(({ id: courseId }) => courseId !== id)
            .map((course) => (
              <SwiperSlide key={course.id}>
                <CoursesCard
                  key={course.id}
                  data={course}
                  courseNumber={parseInt(course.id) < 10 ? `0${course.id}` : course.id}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Button
          text="回講座課程"
          onClick={() => router.push(appPath.courses)}
          icon={ButtonIcon.arrow}
          position="right"
        />
      </SectionWrapper>
      <NextSection title="專案實作" path={appPath.projects} />
    </CoursesLayout>
  );
};

export default CoursesDetail;
