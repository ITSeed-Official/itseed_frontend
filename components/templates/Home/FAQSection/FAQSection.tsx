import Button from "components/atoms/Button";
import { SubTitle } from "components/atoms/SectionTitle";
import SectionWrapper from "components/molecules/SectionWrapper";
import styles from "./FAQSection.module.scss";
import { useFAQs, FAQ } from "hooks/swr/useFAQs";
import FAQBox from "./FAQBox";

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
    <SectionWrapper title="常見問題">
      <div>
        {displayedFaqs.map((faq, index) => (
          <FAQBox
            key={index + faq.question}
            serialNumber={index + 1}
            {...faq}
          />
        ))}
      </div>
      {!!limit && faqs.length > limit && (
        <Button text="全部問題" className={styles.button} />
      )}
      <div className={styles.cta}>
        <div className={styles.slogan}>
          <SubTitle title="迎接更多挑戰" />
          <SubTitle title="現在決定你的未來" />
        </div>
        <Button text="立即報名" />
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
