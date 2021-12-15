import { FC } from "react";
import { useMedia } from "util/hooks/useMedia";
import Button, { ButtonIcon } from "components/atoms/Button";
import Card from "components/molecules/Card";
import SectionWrapper from "components/molecules/SectionWrapper";
import Carousel from "components/organisms/Carousel";
import styles from "./AlumniSection.module.scss";

const data = [
  {
    id: 1,
    name: "賴一霖",
    img: "images/common/pics/alumni.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 2,
    name: "賴一霖",
    img: "images/common/pics/alumni2.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 3,
    name: "賴一霖",
    img: "images/common/pics/alumni3.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 4,
    name: "賴一霖",
    img: "images/common/pics/alumni.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 5,
    name: "賴一霖",
    img: "images/common/pics/alumni2.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 6,
    name: "賴一霖",
    img: "images/common/pics/alumni3.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
];

const AlumniSection: FC = () => {
  const media = useMedia();

  const show = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  return (
    <div className={styles.alumniContainer}>
      <SectionWrapper
        title="聽聽校友怎麼說"
        className={styles.alumniSection}
        titleClassName={styles.title}
      >
        <Carousel show={show[media]} slide={1} className={styles.carousel}>
          {data.map(({ id, content, name, img, character }) => (
            <Card
              key={id}
              className={styles.card}
              content={content}
              name={name}
              imgSrc={img}
              character={character}
            />
          ))}
        </Carousel>
        <Button
          text="校友評價"
          className={styles.button}
          icon={ButtonIcon.arrow}
        />
      </SectionWrapper>
    </div>
  );
};

export default AlumniSection;
