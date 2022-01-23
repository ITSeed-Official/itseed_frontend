import SectionWrapper from "components/molecules/SectionWrapper";
import styles from "./FAQSection.module.scss";
import { useFAQs, FAQ } from "util/hooks/swr/useFAQs";
import FAQBox from "components/templates/Home/FAQSection/FAQBox";

interface Props {
  limit?: number;
}

const FAQSection = ({ limit }: Props) => {
  const { faqs, isLoading, isError } = useFAQs();

  const placeholderFaqs: FAQ[] = Array(limit || 3).fill({
    question: "",
    answer: "",
  });
  const displayedFaqs = isLoading ? placeholderFaqs : faqs.slice(0, limit);

  if (isError) return null;

  return (
    <SectionWrapper className={styles.section}>
      <div>
        {displayedFaqs.map((faq, index) => (
          <FAQBox
            key={index + faq.question}
            serialNumber={index + 1}
            {...faq}
          />
        ))}
      </div>
      <div className={styles.paragraph}>
        如有任何其他相關問題，請私訊
        <span className={styles.green}>
          <a
            href="https://www.facebook.com/iloveitseed"
            target="_blank"
            rel="noreferrer"
          >
            資訊種子粉絲專頁
          </a>
        </span>
        ，或寄信至
        <span className={styles.green}>
          <a href="mailto:itseedsystem@gmail.com">
            ITseed 信箱（itseedsystem@gmail.com）
          </a>
        </span>
        <br />
        將由專人為您解答！
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
