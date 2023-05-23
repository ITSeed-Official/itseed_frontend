import type { NextPage } from 'next';

import { FAQ } from 'util/hooks/swr/useFAQs';
import { appPath } from 'util/routing.config';
import FAQBox from 'components/templates/Home/FAQSection/FAQBox';
import TemplateWrapper from 'components/organisms/TemplateWrapper';
import SectionWrapper from 'components/molecules/SectionWrapper';
import { Type as NextSectionType } from 'components/atoms/NextSection';

import styles from './FAQ.module.scss';

interface IProps {
  faqs: FAQ[];
}

const Faq: NextPage<IProps> = ({ faqs }) => {
  return (
    <TemplateWrapper
      primaryTitle="常見問題"
      description="我們整理了歷來報名者所提出的疑問，提供解惑。"
      desktopBackgroundImage="/images/faq/pics/faq_desktop_banner@2x.png"
      mobileBackgroundImage="/images/faq/pics/faq_mobile_banner@2x.png"
      nextSectionPath={appPath.plan}
      nextSectionTitle="計畫介紹"
      nextSectionType={NextSectionType.green}
    >
      <SectionWrapper className={styles.section}>
        <div>
          {faqs.map((faq, index) => (
            <FAQBox key={index + faq.question} serialNumber={index + 1} {...faq} />
          ))}
        </div>
        <div className={styles.paragraph}>
          如有任何其他相關問題，請私訊
          <span className={styles.green}>
            <a href="https://www.facebook.com/iloveitseed" target="_blank" rel="noreferrer">
              資訊種子粉絲專頁
            </a>
          </span>
          ，或寄信至
          <span className={styles.green}>
            <a href="mailto:itseed21th@gmail.com"> ITSeed 信箱（itseed21th@gmail.com）</a>
          </span>
          <br />
          將由專人為您解答！
        </div>
      </SectionWrapper>
    </TemplateWrapper>
  );
};

export default Faq;
