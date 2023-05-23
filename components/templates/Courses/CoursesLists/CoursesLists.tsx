import { FC, useState, forwardRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import type { CourseDetailType } from 'api/courses';
import { appPath } from 'util/routing.config';

import CoursesLayout from '../CoursesLayout';
import CoursesCard from '../CoursesCard';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import ArrowDownIcon from 'public/images/common/icons/arrow_down.svg';

import styles from './CoursesList.module.scss';

type CoursesListsProperty = {
  courses: CourseDetailType[];
};

type CourseListSectionProperty = CoursesListsProperty & { onClick: () => {}; ctaText: string; courseLimit?: number };

export const CourseListSection = forwardRef<HTMLDivElement, CourseListSectionProperty>(
  ({ courses, onClick, ctaText, courseLimit = 20 }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div ref={ref}>
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
      </div>
    );
  }
);

CourseListSection.displayName = 'CourseListSection';

const CoursesLists: FC<CoursesListsProperty> = ({ courses }) => {
  const router = useRouter();

  return (
    <CoursesLayout>
      <CourseListSection courses={courses} onClick={() => router.push(appPath.plan)} ctaText={'回到計畫內容'} />
    </CoursesLayout>
  );
};

export default CoursesLists;
