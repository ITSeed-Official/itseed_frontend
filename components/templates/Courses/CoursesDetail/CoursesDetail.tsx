import type { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import type { CourseDetailType } from 'api/courses';
import { appPath } from 'util/routing.config';

import CoursesLayout from '../CoursesLayout';
import CoursesCard from '../CoursesCard';
import Swiper, { SwiperSlide } from 'components/organisms/Swiper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import SproutIcon from 'public/images/common/icons/sprout.png';

import styles from './CoursesDetail.module.scss';
import Markdown from 'components/molecules/Markdown';

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
    <CoursesLayout subTitle={subtitle} description={overview}>
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
          <Markdown className={styles.content} text={agenda} />
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
          <Markdown className={styles.content} text={lecturer_background} />
        </div>
      </SectionWrapper>
      <SectionWrapper title="歷年講座課程" isBackgroundGreen>
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
                  courseNumber={parseInt(course.number) < 10 ? `0${course.number}` : course.number}
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
    </CoursesLayout>
  );
};

export default CoursesDetail;
