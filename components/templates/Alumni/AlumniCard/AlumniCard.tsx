import { FC } from 'react';
import { useRouter } from 'next/router';

import { Alumni } from 'api/alumni';
import Card from 'components/molecules/Card';

import styles from './AlumniCard.module.scss';
import { appPath } from 'util/routing.config';

type AlumniCardProperty = {
  alumni: Alumni;
};

const AlumniCard: FC<AlumniCardProperty> = ({ alumni }) => {
  const router = useRouter();
  const { id, title, name, position, image } = alumni;

  return (
    <Card
      key={id}
      wrapperClassName={styles.card}
      cardInfoClassName={styles.cardInfo}
      imgSrc={image.url}
      content={title}
      needCommna={false}
      onClickCta={() => router.push(`${appPath.alumni}/${id}`)}
    >
      <div className={styles.header}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
      </div>
    </Card>
  );
};

export default AlumniCard;
