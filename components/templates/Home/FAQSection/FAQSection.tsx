import Button, { ButtonIcon, ButtonTheme } from "components/atoms/Button";
import { useRouter } from "next/router";
import SectionWrapper from "components/molecules/SectionWrapper";
import styles from "./FAQSection.module.scss";
import { useFAQs, FAQ } from "util/hooks/swr/useFAQs";
import FAQBox from "./FAQBox";

interface Props {
  limit?: number;
}

const FAQSection = ({ limit }: Props) => {
  const router = useRouter();
  const { faqs, isLoading, isError } = useFAQs();

  const placeholderFaqs: FAQ[] = Array(limit || 3).fill({
    question: "",
    answer: "",
  });
  const displayedFaqs = isLoading ? placeholderFaqs : faqs.slice(0, limit);

  if (isError) return null;

  return (
    <SectionWrapper className={styles.section}>
      <h2 className={styles.title}>常見問題</h2>
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
        <Button
          icon={ButtonIcon.arrow}
          text="全部問題"
          className={styles.button}
          onClick={() => {
            router.push("/faq");
          }}
        />
      )}
      <div className={styles.cta}>
        <div className={styles.ctaBg}>
          <span className={styles.ctaBgText}>ITSEED</span>
        </div>
        <h3 className={styles.ctaTitle}>
          迎接更多挑戰
          <br />
          現在決定你的未來
        </h3>
        <Button
          theme={ButtonTheme.outlineReverse}
          icon={ButtonIcon.arrowReverse}
          onClick={() => {
            router.push("joinus");
          }}
        >
          立即報名
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
