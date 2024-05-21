import { FC } from 'react';

import SectionWrapper from 'components/molecules/SectionWrapper';
import Icon from 'components/atoms/Icon';
import sprout from 'public/images/common/icons/sprout.png';
import { CURRENT_SESSION, FB_PAGE, IG_PAGE } from 'util/const';

import styles from './OrganizationSection.module.scss';

const OrganizationSection: FC = () => {
  return (
    <SectionWrapper isBackgroundGreen title="組織架構">
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.title}>
            <Icon iconSrc={sprout} />
            <h3>校友會</h3>
          </div>
          <hr />
          <p>
            從 2003 年至今已累積 700
            多位校友，整合公會與校友資源，指引學員執行專案時突破自我，並傳承資訊種子分享與回饋的精神。
          </p>
        </div>
        <div className={styles.block}>
          <div className={styles.title}>
            <Icon iconSrc={sprout} />
            <h3>校友會培訓部</h3>
          </div>
          <hr />
          <p>負責協助當屆專案的進行及年度課程規劃，為學員與公會、校友會溝通的橋樑。</p>
        </div>
        <div className={styles.block}>
          <div className={styles.title}>
            <Icon iconSrc={sprout} />
            <h3>學員幹部</h3>
          </div>
          <hr />
          <p>
            由當屆學員選舉產生，主要負責凝聚學員情感，以及團隊溝通協調。第 {CURRENT_SESSION} 屆幹部團隊包含：
            <ul>
              <li>正/副學員長：促使學員彼此交流互動，共同成長，打造該屆的團隊文化，凝聚彼此感情。</li>
              <li>
                正/副行銷長：帶領行銷部建立對外形象，並紀錄學員一年的培訓過程，經營管道包含{' '}
                <a className={styles.link} href={FB_PAGE} target="blank">
                  Facebook
                </a>
                、
                <a className={styles.link} href={IG_PAGE} target="blank">
                  Instagram
                </a>{' '}
                等粉絲專頁 。
              </li>
            </ul>
          </p>
          <p>（※每一屆幹部團隊職位依當屆培訓部規劃而有所不同※）</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OrganizationSection;
