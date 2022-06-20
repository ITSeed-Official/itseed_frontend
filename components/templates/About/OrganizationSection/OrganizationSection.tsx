import { FC } from 'react';
import styles from './OrganizationSection.module.scss';
import SectionWrapper from 'components/molecules/SectionWrapper';
import Image from 'next/image';
import sprout from 'public/images/common/icons/sprout.png';

const OrganizationSection: FC = () => {
  return (
    <SectionWrapper isBackgroundGreen title="組織架構">
      <div className={styles.content}>
        <div className={styles.block}>
          <h3>
            <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
            校友會
          </h3>
          <hr />
          <p>
            從2003年至今已累積 500
            多位校友，整合公會與校友資源，指引學員執行專案時突破自我，並傳承資訊種子分享與回饋的精神。
          </p>
        </div>
        <div className={styles.block}>
          <h3>
            <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
            校友會培訓部
          </h3>
          <hr />
          <p>負責協助當屆專案的進行及年度課程規劃，為學員與公會、校友會溝通的橋樑。</p>
        </div>
        <div className={styles.block}>
          <h3>
            <Image className={styles.icon} alt="sprout" src={sprout} width={24} height={24} />
            學員幹部
          </h3>
          <hr />
          <p>
            由當屆學員選舉產生，主要負責凝聚學員情感，以及團隊溝通協調。第十八屆幹部團隊包含：
            <ul>
              <li>正/副學員長：帶領幹部團隊進行年度規劃，與培訓部溝通合作，凝聚當屆的向心力。</li>
              <li>資訊長：帶領資訊組負責當屆官網前後端資料的維護、整合，並開創工作坊以累積學員資訊能力。</li>
              <li>設計長：帶領設計組設計當屆主視覺，產出周邊產品，留下獨一無二的紀念。</li>
              <li>行銷長：帶領行銷組建立對外的傳播形象，與紀錄學員一年培訓過程，經手管道如粉絲專頁 Medium 等。</li>
            </ul>
          </p>
          <p>（※每一屆幹部團隊職位依當屆培訓部規劃而有所不同※）</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OrganizationSection;
