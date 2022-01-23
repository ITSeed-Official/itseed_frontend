import { FC } from "react";
import { useMedia } from "util/hooks/useMedia";
import Button, { ButtonIcon } from "components/atoms/Button";
import { useRouter } from "next/router";
import Card from "components/molecules/Card";
import SectionWrapper from "components/molecules/SectionWrapper";
// import Carousel from "components/organisms/Carousel";
import styles from "./AlumniSection.module.scss";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "賴一霖1",
    img: "/images/common/pics/alumni.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 2,
    name: "賴一霖2",
    img: "/images/common/pics/alumni2.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 3,
    name: "賴一霖3",
    img: "/images/common/pics/alumni3.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 4,
    name: "賴一霖4",
    img: "/images/common/pics/alumni.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 5,
    name: "賴一霖5",
    img: "/images/common/pics/alumni2.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
  {
    id: 6,
    name: "賴一霖6",
    img: "/images/common/pics/alumni3.png",
    content:
      "「我曾經被學長姐無私的回饋而感動，那種認真聽、耐心答、樂於分享的學長姐，不但沒有距離，更是我們未來前進的力量！」",
    character: "第18屆副學員長",
  },
];

const AlumniSection: FC = () => {
  const media = useMedia();
  const router = useRouter();
  const show = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  return (
    <div className={styles.alumniContainer}>
      <SectionWrapper>
        <h2 className={styles.title}>聽聽校友怎麼說</h2>
        <div className={styles.swiperArea}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              "768": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "1024": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data.map(({ id, content, name, img, character }) => (
              <SwiperSlide key={id}>
                <Card
                  wrapperClassName={styles.cardWrapper}
                  content={content}
                  name={name}
                  imgSrc={img}
                  character={character}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
          text="全部校友評價"
          className={styles.button}
          icon={ButtonIcon.arrow}
          onClick={() => {
            router.push("/sharing");
          }}
        />
        {/* <Carousel show={show[media]} slide={1} className={styles.carousel}>
          {data.map(({ id, content, name, img, character }) => (
            <Card
              key={id}
              wrapperClassName={styles.cardWrapper}
              className={styles.card}
              content={content}
              name={name}
              imgSrc={img}
              character={character}
            />
          ))}
        </Carousel> */}
      </SectionWrapper>
    </div>
  );
};

export default AlumniSection;
