import type { NextPage } from "next";
import BannerContainer, {
  BannerType,
} from "components/molecules/BannerContainer";
import FAQSection from "./FAQSection/FAQSection";
import NextSection from "components/atoms/NextSection";

const Faq: NextPage = () => (
  <>
    <BannerContainer
      type={BannerType.general}
      primaryTitle="常見問題"
      backgroundImage="/images/faq/pics/banner.png"
    />
    <FAQSection />
    <NextSection title="計畫介紹" path="/plan" />
  </>
);

export default Faq;
