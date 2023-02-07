import { FC, useEffect, useState } from 'react';

import { useMultistepForm } from 'util/hooks/useMultistepForm';
import { GOOGLE_LOGIN_LINK } from 'util/const';
import { FormDataType, INITIAL_DATA } from 'util/form';
import { ErrorCode, ErrorWithCode } from 'util/error';
import { getFormData, updateFormData } from 'api/application';

import ApplyStepsBar from '../ApplyStepsBar';
import DiscStepForm from '../DiscStepForm';
import PersonalInfoStepForm from '../PersonalInfoStepForm';
import FilesUploadStepForm from '../FilesUploadStepForm';
import QuestionsStepForm from '../QuestionsStepForm';
import Button, { ButtonIcon } from 'components/atoms/Button';

import styles from './ApplySteps.module.scss';

const ApplySteps: FC = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);

  const getData = async () => {
    try {
      const response = await getFormData();
      setFormData(response.data);
    } catch (e) {
      if (e instanceof ErrorWithCode) {
        if (e.errorCode === ErrorCode.NoAuth) {
          window.location.href = GOOGLE_LOGIN_LINK;
          return;
        }
        throw e;
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('formData', formData);

  const updateFields = (fields: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <DiscStepForm key="survey" />,
    <PersonalInfoStepForm key="info" data={formData.info} updateFields={updateFields} />,
    <QuestionsStepForm key="question" data={formData.answer} updateFields={updateFields} />,
    <FilesUploadStepForm key="files" data={formData} updateFields={updateFields} />,
  ]);

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.applySteps}>
        <h3 className={styles.title}>報名專區</h3>
        <ApplyStepsBar curStep={currentStepIndex} />
        <div className={styles.formContainer}>
          {step}
          <div className={styles.stepManager}>
            <u
              className={styles.save}
              onClick={() => {
                switch (currentStepIndex) {
                  case 0:
                    updateFormData({ survey: formData.survey });
                    break;
                  case 1:
                    updateFormData({ info: formData.info });
                    break;
                  case 2:
                    updateFormData({ answer: formData.answer });
                    break;
                  case 3:
                    updateFormData({ files: formData.files });
                    break;
                }
              }}
            >
              儲存資料
            </u>
            {!isFirstStep && (
              <Button className={styles.buttonBack} onClick={back}>
                回上一階段
              </Button>
            )}
            <Button icon={ButtonIcon.arrow} disabled={isLastStep} onClick={next}>
              下一步
            </Button>
          </div>
        </div>
        <div>
          <h5 className={styles.note}>
            如有任何其他相關問題，請私訊 資訊種子粉絲專頁，或寄信至 ITseed
            信箱（itseed19th@gmail.com）將由專人為您解答！
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ApplySteps;
