import type { FC } from 'react';

import type { CourseDetailType } from 'api/courses';
import { appPath } from 'util/routing.config';

import CoursesLayout from '../CoursesLayout';
import CoursesCard from '../CoursesCard';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Button, { ButtonIcon } from 'components/atoms/Button';
import NextSection from 'components/atoms/NextSection';

import styles from './CoursesList.module.scss';

type CoursesListsProperty = {
  courses: CourseDetailType[];
};

const CoursesLists: FC<CoursesListsProperty> = ({ courses }) => {
  return (
    <CoursesLayout primaryTitle="講座課程">
      <div className={styles.backgroundWrapper}>
        <SectionWrapper title="講座課程">
          <div className={styles.courses}>
            {courses.map((course, index) => (
              <CoursesCard
                key={course.id}
                className={styles.card}
                data={course}
                courseNumber={index < 9 ? `0${(index + 1).toString()}` : (index + 1).toString()}
              ></CoursesCard>
            ))}
          </div>
          <Button text="回到計畫內容" icon={ButtonIcon.arrow} />
        </SectionWrapper>
      </div>
      <NextSection title="專案實作" path={appPath.plan} />
    </CoursesLayout>
  );
};

export default CoursesLists;
