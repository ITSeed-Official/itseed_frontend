import type { FC } from 'react';
import classnames from 'classnames';

import type { CourseDetailType } from 'api/courses';

import Cta from 'components/atoms/Cta';

import styles from './CoursesCard.module.scss';
import { useRouter } from 'next/router';
import { appPath } from 'util/routing.config';

export type CoursesCardProperty = {
  data: CourseDetailType;
  courseNumber: string;
  className?: string;
};

const CoursesCard: FC<CoursesCardProperty> = ({ data, courseNumber, className }) => {
  const router = useRouter();

  return (
    <div className={classnames(styles.card, className)}>
      <div className={styles.number}>{courseNumber}</div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.lecturer}>
        <p className={styles.name}>{data.lecturer}</p>
        <p className={styles.job}>{`${data.lecturer_company} ${data.lecturer_position}`}</p>
      </div>
      <Cta ctaText="講座回顧" className={styles.cta} onClickCta={() => router.push(`${appPath.courses}/${data.id}`)} />
    </div>
  );
};

export default CoursesCard;
