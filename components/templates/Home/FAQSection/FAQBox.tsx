import ReactMarkdown from 'react-markdown';
import CollapseBox from 'components/atoms/CollapseBox';
import styles from './FAQBox.module.scss';

interface Props {
  serialNumber: number;
  question: string;
  answer: string;
}

const FAQBox = ({ serialNumber, question = '', answer = '' }: Props) => (
  <CollapseBox className={styles.questionBox} title={`Q${serialNumber}. ${question}`}>
    <ReactMarkdown>{answer}</ReactMarkdown>
  </CollapseBox>
);

export default FAQBox;
