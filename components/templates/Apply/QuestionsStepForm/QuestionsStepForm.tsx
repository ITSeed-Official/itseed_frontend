import { FC, ChangeEvent } from 'react';
import { Answer } from 'util/form';

import styles from './QuestionsStepForm.module.scss';

const getLength = (str: string) => {
  return str.replace(/[^\x00-\xff]/g, 'O').length;
};

type QuestionsStepFormProps = {
  data: Answer;
  updateFields: Function;
};

const QuestionsStepForm: FC<QuestionsStepFormProps> = ({ data, updateFields }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>, number: number, wordLimit: number) => {
    if (getLength(e.target.value) > wordLimit) return;

    let answer = [...data];
    answer[number - 1].answer = e.target.value;

    updateFields({
      answer,
    });
  };

  return (
    <>
      <div className={styles.intro}>
        <p>本階段共有六道題目，建議花30-40分鐘的時間填寫。</p>
        <p>※可從此處下載文字檔書審題目。</p>
      </div>
      <>
        {data.map(({ number, title, answer, limit }) => (
          <div key={number} className={styles.questionBlock}>
            <p>{title}</p>
            <textarea
              value={answer}
              onChange={(e) => {
                onChangeHandler(e, number, limit);
              }}
              name={title}
              id={title}
            ></textarea>
          </div>
        ))}
      </>
    </>
  );
};

export default QuestionsStepForm;
