import { FC, useEffect, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";

import { CareerDetailType } from "api/careers";
import { categoriesTranslateMap } from "util/helper";
import { useScroll } from "util/hooks/event";

import SectionWrapper from "components/molecules/SectionWrapper";
import Icon from "components/atoms/Icon";

import styles from "./CareerDetail.desktop.module.scss";

const DesktopComponent: FC<{ data: CareerDetailType }> = ({ data }) => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 400 && !slideLeft) {
      setSlideLeft(true);
    }
    if (scrollY > 800 && !slideRight) {
      setSlideRight(true);
    }
  }, [scrollY, slideRight, slideLeft]);

  return (
    <>
      <div className={styles.backgroundWrapper}>
        <SectionWrapper
          className={styles.menteeSection}
          title={categoriesTranslateMap[data.category]}
          titleClassName={styles.mainTitle}
        >
          <div
            className={classnames(styles.image, slideLeft && styles.slidein)}
          >
            <Image
              src={"/images/common/pics/alumni.png"}
              width={660}
              height={440}
            />
          </div>
          <div className={styles.contentWrapper}>
            <div
              className={classnames(
                styles.content,
                slideRight && styles.slidein
              )}
            >
              <div className={styles.jobInfo}>
                {data.company && (
                  <p className={styles.company}>{data.company}</p>
                )}
                <p
                  className={classnames(
                    data.company ? styles.job : styles.company
                  )}
                >
                  {data.position}
                </p>
              </div>
              <div className={styles.menteeInfo}>
                <p>{data.mentee_school}</p>
                <p>{data.mentee}</p>
              </div>
              <ReactMarkdown>{data.content}</ReactMarkdown>
            </div>
            <div className={styles.leaf} />
            <div className={styles.emptyLeaf} />
            <div className={styles.rotateLeaf} />
          </div>
        </SectionWrapper>
        {data.mentors && (
          <SectionWrapper className={styles.mentorsSection}>
            {data.mentors.map(
              ({
                id,
                name,
                image_url,
                description,
                facebook_link,
                linkedin_url,
                email_address,
              }) => (
                <div key={id} className={styles.mentor}>
                  <div className={styles.mentorInfo}>
                    <Icon
                      iconSrc={"/images/common/icons/icon-headshot.svg"}
                      width={60}
                      height={60}
                    />
                    <div className={styles.mentorName}>
                      <p>Mentor</p>
                      <p>{name}</p>
                    </div>
                  </div>
                  <ReactMarkdown className={styles.mentorDescription}>
                    {description}
                  </ReactMarkdown>
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
                      <Icon
                        className={styles.icon}
                        link={email_address}
                        iconSrc="/images/common/icons/icon-mail-deepgreen.svg"
                      />
                    )}
                  </div>
                </div>
              )
            )}
          </SectionWrapper>
        )}
      </div>
    </>
  );
};

export default DesktopComponent;
