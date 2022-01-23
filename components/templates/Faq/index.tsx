import type { NextPage } from 'next';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import FAQSection from './FAQSection/FAQSection';
import NextSection from 'components/atoms/NextSection';
import { FAQ } from 'util/hooks/swr/useFAQs';
import { useState } from 'react';

interface IProps {
  faqs: FAQ[];
}

const Faq: NextPage<IProps> = (props: IProps) => {
  const [faqs, setFaqs] = useState(props.faqs);

  return (
    <>
      <BannerContainer
        type={BannerType.general}
        primaryTitle="常見問題"
        backgroundImage="/images/faq/pics/banner.png"
      />
      <FAQSection faqs={faqs} />
      <NextSection title="計畫介紹" path="/plan" />
    </>
  );
};

export default Faq;
