import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

import styles from './Markdown.module.scss';

type MarkdownProperty = {
  className?: string;
  text: string;
};

const Markdown: FC<MarkdownProperty> = ({ className, text }) => {
  return <ReactMarkdown className={classnames(styles.markdown, className)}>{text}</ReactMarkdown>;
};

export default Markdown;
