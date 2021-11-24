import Button from "../../components/atoms/Button";
import CollapseBox from "../../components/atoms/CollapseBox";
import SectionWrapper from "../../components/molecules/SectionWrapper";

import homeStyles from "./Home.module.scss";
import styles from "./FAQSection.module.scss";

const FAQSection = () => {
  return (
    <SectionWrapper title="常見問題">
      <div>
        <CollapseBox
          className={styles.questionBox}
          title="Q1. 為什麼會有資訊種子培訓計畫的出現？"
        >
          資訊種子培訓計劃是由新北市電腦商業同業公會所籌劃，以公會豐富的業界資源，包括具寶貴實務經驗的講師以及直接到業界實習的機會等，讓有興趣投入
          IT 產業的青年學子成為業界所需的資訊精英人才。隨著時代演進，IT
          已融入於各產業中，資訊種子也逐漸演變為「資訊素養、跨領域人才」的養成計劃。
        </CollapseBox>
        <CollapseBox
          className={styles.questionBox}
          title="Q2. 加入資訊種子，我能獲得哪些資源？"
        >
          資訊種子培訓計劃是由新北市電腦商業同業公會所籌劃，以公會豐富的業界資源，包括具寶貴實務經驗的講師以及直接到業界實習的機會等，讓有興趣投入
          IT 產業的青年學子成為業界所需的資訊精英人才。隨著時代演進，IT
          已融入於各產業中，資訊種子也逐漸演變為「資訊素養、跨領域人才」的養成計劃。
        </CollapseBox>
        <CollapseBox
          className={styles.questionBox}
          title="Q3. 在資訊種子能培養哪些軟、硬實力呢？"
        >
          測試文字
        </CollapseBox>
      </div>
      <Button text="全部問題" className={homeStyles.button} />
    </SectionWrapper>
  );
};

export default FAQSection;
