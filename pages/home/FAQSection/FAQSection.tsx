import Button from "components/atoms/Button";
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
    </SectionWrapper>
  );
};

export default FAQSection;
