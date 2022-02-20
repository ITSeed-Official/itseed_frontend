import type { FC } from 'react';
import { useRouter } from 'next/router';

import { appPath } from 'util/routing.config';
import { ExperienceCategory } from 'api/careers';

import Card from 'components/molecules/Card';

export type CareerCardType = {
  id: number;
  job: string;
  role: string;
  name: string;
  description: string;
  mentorsOverview: string;
  company: string | null;
  imgSrc?: string;
};

interface CareerCardProperty extends CareerCardType {
  category: ExperienceCategory;
  wrapperClassName: string;
  onClick?: () => {};
}

import styles from './CareerCard.module.scss';

const CareerCard: FC<CareerCardProperty> = ({
  id,
  name,
  job,
  role,
  description,
  mentorsOverview,
  company,
  category,
  imgSrc = '',
  onClick,
  wrapperClassName,
}) => {
  const router = useRouter();

  return (
    <Card
      wrapperClassName={wrapperClassName}
      name={name}
      character={role}
      content={description}
      imgSrc={imgSrc || '/images/common/pics/alumni2.png'}
      onClickCta={onClick ? onClick : () => router.push(`${appPath.career}/${id}`)}
    >
      {category === 'company' && (
        <div className={styles.header}>
          <div className={styles.jobInfo}>
            {company && <p className={styles.cardTitle}>{company}</p>}
            <p className={styles.cardSubTitle}>{job}</p>
          </div>
        </div>
      )}
      {category === 'interview' && (
        <div className={styles.header}>
          <div className={styles.mentorInfo}>
            <p className={styles.cardTitle}>{job}</p>
            <p className={styles.mentorsOverview}>{`訪談對象：${mentorsOverview}`}</p>
          </div>
        </div>
      )}
      {category === 'personalization' && (
        <div className={styles.header}>
          <div className={styles.jobInfo}>
            <p className={styles.cardTitle}>{name}</p>
            <p className={styles.cardSubTitle}>{job}</p>
          </div>
          <p className={styles.mentorsOverview}>{`Mentor: ${mentorsOverview}`}</p>
        </div>
      )}
    </Card>
  );
};

export default CareerCard;
