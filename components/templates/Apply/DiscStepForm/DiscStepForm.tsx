import { FC } from 'react';

import { Survey } from 'util/form';

import styles from './DiscStepForm.module.scss';
import classnames from 'classnames';

type DiscStepFormProps = {
  data: Survey;
  surveyIndex: number;
  updateFields: Function;
};

const DiscStepForm: FC<DiscStepFormProps> = ({ data, updateFields, surveyIndex }) => {
  const storeAnswer = (index: number, answer: number) => {
    let survey = [...data];
    survey[index].answer = answer;

    updateFields({
      survey,
    });
  };

  return (
    <div className={styles.discStepForm}>
      <h2 className={styles.title}>{data[surveyIndex].title}</h2>
      <div className={styles.options}>
        {data[surveyIndex].options.map(({ number, description }) => (
          <div
            className={classnames(styles.option, data[surveyIndex].answer === number && styles.choosed)}
            key={number}
            onClick={() => storeAnswer(surveyIndex, number)}
          >
            {description}
          </div>
        ))}
      </div>
      <p className={styles.note}>*「特質調查」填答內容不會作為書審評分的標準</p>
    </div>
  );
};

export default DiscStepForm;
