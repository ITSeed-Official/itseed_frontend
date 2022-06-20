import Markdown from 'components/molecules/Markdown';
import CollapseBox from 'components/atoms/CollapseBox';
import styles from './FAQBox.module.scss';

interface Props {
  serialNumber: number;
  question: string;
  answer: string;
}

const FAQBox = ({ serialNumber, question = '', answer = '' }: Props) => (
  <CollapseBox className={styles.questionBox} title={`Q${serialNumber}. ${question}`}>
    <Markdown text={answer} />
  </CollapseBox>
);

export default FAQBox;
