import type { FC } from "react";
import { useRouter } from "next/router";

import { useMedia } from "util/hooks/useMedia";
import { chunkArray } from "util/helper";
import { appPath } from "util/routing.config";
import type { ExperienceCategory } from "api/careers";

import SectionWrapper from "components/molecules/SectionWrapper";
import Card from "components/molecules/Card";
import type { CareerCardProperty } from "../CareerLists";

import styles from "./CareerCards.module.scss";

interface CareerCardsProperty {
  className: string;
  careerCards: CareerCardProperty[];
  category: ExperienceCategory;
  title: string;
}

const CareerCards: FC<CareerCardsProperty> = ({
  className,
  careerCards,
  category,
  title,
}) => {
  const media = useMedia();
  const router = useRouter();

  const show = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  return (
    <div className={className}>
      <SectionWrapper
        className={styles.cardsSection}
        title={title}
        titleClassName={styles.title}
      >
        {chunkArray(careerCards, show[media]).map((cards, index) => (
          <div className={styles.cards} key={index}>
            {cards.map(
              ({
                id,
                company,
                job,
                role,
                name,
                description,
                imgSrc,
                mentorsOverview,
              }) => (
                <Card
                  key={id}
                  wrapperClassName={styles.card}
                  name={name}
                  character={role}
                  content={description}
                  imgSrc={imgSrc || "/images/common/pics/alumni2.png"}
                  onClickCta={() => router.push(`${appPath.career}/${id}`)}
                >
                  {category === "company" && (
                    <div className={styles.jobInfo}>
                      {company && <p className={styles.cardTitle}>{company}</p>}
                      <p className={styles.cardSubTitle}>{job}</p>
                    </div>
                  )}
                  {category === "interview" && (
                    <div className={styles.mentorInfo}>
                      <p className={styles.cardTitle}>{job}</p>
                      <p
                        className={styles.mentorsOverview}
                      >{`訪談對象：${mentorsOverview}`}</p>
                    </div>
                  )}
                  {category === "personalization" && (
                    <div>
                      <div className={styles.jobInfo}>
                        <p className={styles.cardTitle}>{name}</p>
                        <p className={styles.cardSubTitle}>{job}</p>
                      </div>
                      <p className={styles.mentorsOverview}>
                        {`Mentor: ${mentorsOverview}`}
                      </p>
                    </div>
                  )}
                </Card>
              )
            )}
          </div>
        ))}
      </SectionWrapper>
    </div>
  );
};

export default CareerCards;
