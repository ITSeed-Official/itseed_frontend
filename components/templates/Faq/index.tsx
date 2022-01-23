import type { NextPage } from 'next';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import FAQSection from './FAQSection/FAQSection';
import NextSection from 'components/atoms/NextSection';
import { FAQ } from 'util/hooks/swr/useFAQs';

interface IProps {
  faqs: FAQ[];
}

const Faq: NextPage<IProps> = (props: IProps) => {
  return (
    <>
      <BannerContainer
        type={BannerType.general}
        primaryTitle="常見問題"
        description="我們整理了歷來報名者所提出的疑問，提供解惑。"
        desktopBackgroundImage="/images/faq/pics/banner--desktop.png"
        mobileBackgroundImage="/images/faq/pics/banner--mobile.png"
      />
      <FAQSection faqs={props.faqs} />
      <NextSection title="計畫介紹" path="/plan" />
    </>
  );
};

export default Faq;
