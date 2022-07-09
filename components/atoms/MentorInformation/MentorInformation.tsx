import { MentorDetailType } from 'api/careers';
import { FC } from 'react';
import styles from './MentorInformation.module.scss';
import Icon from 'components/atoms/Icon';
import ReactMarkdown from 'react-markdown';

type Prop = {
  MentorDetail: MentorDetailType;
};

const MentorInformation: FC<Prop> = ({ MentorDetail }) => {
  const { name, description, facebook_link, linkedin_url, email_address } = MentorDetail;

  return (
    <div className={styles.mentor}>
      <div className={styles.mentorInfo}>
        <Icon iconSrc={'/images/common/icons/icon-headshot.svg'} width={60} height={60} />
        <div className={styles.mentorName}>
          <p>Mentor</p>
          <p>{name}</p>
        </div>
      </div>
      <ReactMarkdown className={styles.mentorDescription}>{description}</ReactMarkdown>
      {facebook_link || linkedin_url || email_address ? (
        <div className={styles.mentorLinks}>
          {facebook_link && (
            <Icon
              className={styles.icon}
              link={facebook_link}
              iconSrc="/images/common/icons/icon-facebook-deepgreen.svg"
            />
          )}
          {linkedin_url && (
            <Icon
              className={styles.icon}
              link={linkedin_url}
              iconSrc="/images/common/icons/icon-medium-deepgreen.svg"
            />
          )}
          {email_address && (
            <Icon className={styles.icon} link={email_address} iconSrc="/images/common/icons/icon-mail-deepgreen.svg" />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default MentorInformation;
