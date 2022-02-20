import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ContentRender.module.scss';

type IProp = {
  content: string;
};

const ContentRender: FC<IProp> = ({ content }) => {
  return <ReactMarkdown className={styles.RenderWrapper}>{content}</ReactMarkdown>;
};

export default ContentRender;
