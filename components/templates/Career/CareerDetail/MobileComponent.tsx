import { FC } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { CareerDetailType } from 'api/careers';

import SectionWrapper from 'components/molecules/SectionWrapper';
import Icon from 'components/atoms/Icon';

import styles from './CareerDetail.mobile.module.scss';

const MobileComponent: FC<{ data: CareerDetailType }> = ({ data }) => {
  return (
    <>
      <div className={styles.backgroundWrapper}>
        <SectionWrapper title="公司實習" className={styles.titleSection} titleClassName={styles.title} />
      </div>
      <div className={styles.image}>
        <Image src={'/images/common/pics/alumni.png'} layout="fill" />
      </div>
      <SectionWrapper className={styles.menteeSection}>
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </SectionWrapper>
      {data.mentors && (
        <SectionWrapper className={styles.mentorsSection}>
          {data.mentors.map(({ id, name, image_url, description, facebook_link, linkedin_url, email_address }) => (
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
      <SectionWrapper className={styles.carouselSection} title="看看其他人的心得分享"></SectionWrapper>
    </>
  );
};

export default MobileComponent;
