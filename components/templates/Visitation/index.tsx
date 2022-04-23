import type { NextPage } from 'next';
import BannerContainer, { BannerType } from 'components/molecules/BannerContainer';
import Content from './Content';
import NextSection from 'components/atoms/NextSection';
import { Visitation } from '../../../api/visitations';

interface IProps {
  visitations: Visitation[];
}

const Visitation: NextPage<IProps> = ({ visitations }: IProps) => {
  return (
    <>
      <BannerContainer
        type={BannerType.general}
        primaryTitle="企業參訪"
        subTitle="參訪宗旨"
        description="透過不同產業的企業參訪，了解各產業的趨勢，並藉此深入接觸企業文化、職場環境、公司發展與未來規劃。讓學員能更貼近職場，也更能增進對未來職涯探索的規劃。"
        desktopBackgroundImage="/images/faq/pics/banner--desktop.png"
        mobileBackgroundImage="/images/faq/pics/banner--mobile.png"
      />
      <Content visitations={visitations} />
      <NextSection title="計畫介紹" path="/plan" />
    </>
  );
};

export default Visitation;
