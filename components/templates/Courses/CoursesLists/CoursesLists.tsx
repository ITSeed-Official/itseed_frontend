import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import type { CourseDetailType } from 'api/courses';
import { appPath } from 'util/routing.config';

import CoursesLayout from '../CoursesLayout';
import CoursesCard from '../CoursesCard';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';
import NextSection from 'components/atoms/NextSection';
import Icon from 'components/atoms/Icon';
import ArrowDownIcon from 'public/images/common/icons/arrow_down.svg';

import styles from './CoursesList.module.scss';

type CoursesListsProperty = {
  courses: CourseDetailType[];
};

export const CourseListSection: FC<
  CoursesListsProperty & { onClick: () => {}; ctaText: string; courseLimit?: number }
> = ({ courses, onClick, ctaText, courseLimit = 12 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionWrapper title="講座課程" isBackgroundGreen>
      <div className={styles.coursesDesktop}>
        {courses
          .map((course, index) => (
            <CoursesCard
              key={course.id}
              className={styles.card}
              data={course}
              courseNumber={index < 9 ? `0${(index + 1).toString()}` : (index + 1).toString()}
            ></CoursesCard>
          ))
          .slice(0, courseLimit)}
      </div>
      <div className={styles.coursesMobile}>
        {courses
          .map((course, index) => (
            <CoursesCard
              key={course.id}
              className={styles.card}
              data={course}
              courseNumber={index < 9 ? `0${(index + 1).toString()}` : (index + 1).toString()}
            ></CoursesCard>
          ))
          .slice(0, isOpen ? courseLimit : 3)}
      </div>
      <Icon
        className={classnames(styles.icon, isOpen && styles.none)}
        iconSrc={ArrowDownIcon}
        onClick={() => setIsOpen(true)}
        width={60}
        height={60}
      />
      <Button text={ctaText} icon={ButtonIcon.arrow} onClick={onClick} />
    </SectionWrapper>
  );
};

const CoursesLists: FC<CoursesListsProperty> = ({ courses }) => {
  const router = useRouter();

  return (
    <CoursesLayout primaryTitle="講座課程">
      <CourseListSection courses={courses} onClick={() => router.push(appPath.plan)} ctaText={'回到計畫內容'} />
      <NextSection title="專案實作" path={appPath.projects} />
    </CoursesLayout>
  );
};

export default CoursesLists;
