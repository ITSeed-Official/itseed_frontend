import { FC, useEffect, useState, useRef } from 'react';

import { useMultistepForm } from 'util/hooks/useMultistepForm';
import { GOOGLE_LOGIN_LINK } from 'util/const';
import { FormDataType, formValidation, INITIAL_DATA } from 'util/form';
import { ErrorCode, ErrorWithCode } from 'util/error';
import { getFormData, updateFormData } from 'api/application';

import ApplyStepsBar from '../ApplyStepsBar';
import DiscStepForm from '../DiscStepForm';
import PersonalInfoStepForm from '../PersonalInfoStepForm';
import FilesUploadStepForm from '../FilesUploadStepForm';
import QuestionsStepForm from '../QuestionsStepForm';
import Button, { ButtonIcon } from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

import styles from './ApplySteps.module.scss';
import { scrollTo } from 'util/scroll';

const ApplySteps: FC = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [surveyIndex, setSurveyIndex] = useState<number>(0); // DISC 題目號碼
  const [isFormValid, setIsFormValid] = useState<boolean[]>([false, false, false]);
  const ref = useRef<HTMLDivElement | null>(null);

  console.log('formData', formData);

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

  // 更新前端某個表單 state 中的單一欄位
  const updateFields = (fields: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  // 將前端某個表單 state 儲存到後端
  const updateStepForm = (currentStepIndex: number) => {
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
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo } = useMultistepForm(
    [
      <DiscStepForm key="survey" data={formData.survey} updateFields={updateFields} surveyIndex={surveyIndex} />,
      <PersonalInfoStepForm key="info" data={formData.info} updateFields={updateFields} />,
      <QuestionsStepForm key="question" data={formData.answer} updateFields={updateFields} />,
      <FilesUploadStepForm key="files" data={formData.files} updateFields={updateFields} />,
    ],
    formData.info.step
  );

  useEffect(() => {
    if (currentStepIndex === 3) {
      const result = formValidation(formData);
      setIsFormValid(result);
    }
  }, [currentStepIndex, formData]);

  const lastStep = () => {
    back();
    scrollTo(ref);
  };

  const nextStep = () => {
    updateStepForm(currentStepIndex);
    next();
    scrollTo(ref);
  };

  const discFormStepManager = (
    <>
      <h5 className={styles.questionNum}>
        Question {surveyIndex + 1}/{formData.survey.length}
      </h5>
      {surveyIndex > 0 && (
        <Button
          onClick={() => {
            setSurveyIndex((prev) => (prev -= 1));
          }}
        >
          回上一題
        </Button>
      )}
      <Button
        className={styles.next}
        icon={ButtonIcon.arrow}
        disabled={!formData.survey[surveyIndex].answer}
        onClick={() => {
          if (surveyIndex === formData.survey.length - 1) {
            nextStep();
            return;
          }
          setSurveyIndex((prev) => (prev += 1));
        }}
      >
        {surveyIndex === formData.survey.length - 1 ? <>完成測驗</> : <>下一題</>}
      </Button>
    </>
  );

  const otherFormsStepManager = (
    <>
      <u className={styles.save} onClick={() => updateStepForm(currentStepIndex)}>
        儲存資料
      </u>
      {!isFirstStep && (
        <Button className={styles.buttonBack} onClick={lastStep}>
          回上一階段
        </Button>
      )}
      <Button
        icon={ButtonIcon.arrow}
        disabled={isLastStep}
        onClick={() => {
          nextStep();
        }}
      >
        下一步
      </Button>
    </>
  );

  const formsCheckSection = (
    <div className={styles.formsCheckSection}>
      <h3 className={styles.title}>3.資料確認</h3>
      <p>確認完成後點擊下方按鈕完成書審資料</p>
      <div className={styles.block}>
        <p>1. 基本資料</p>
        {isFormValid[0] ? (
          <Icon iconSrc="/images/icons/icon-checkcircle.svg" />
        ) : (
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        )}
        <Icon className={styles.edit} iconSrc="/images/icons/icon-edit.svg" onClick={() => goTo(1)} />
      </div>
      <div className={styles.block}>
        <p>2. 書審問題</p>
        {isFormValid[1] ? (
          <Icon iconSrc="/images/icons/icon-checkcircle.svg" />
        ) : (
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        )}
        <Icon className={styles.edit} iconSrc="/images/icons/icon-edit.svg" onClick={() => goTo(2)} />
      </div>
      <div className={styles.block}>
        <p>3. 檔案上傳</p>
        {isFormValid[2] ? (
          <Icon iconSrc="/images/icons/icon-checkcircle.svg" />
        ) : (
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        )}
        <Icon className={styles.edit} iconSrc="/images/icons/icon-edit.svg" onClick={() => scrollTo(ref)} />
      </div>
      <Button>確認完成</Button>
    </div>
  );

  return (
    <div ref={ref} className={styles.backgroundWrapper}>
      <div className={styles.applySteps}>
        <h3 className={styles.title}>報名專區</h3>
        <ApplyStepsBar curStep={currentStepIndex} goTo={goTo} updateStepForm={() => updateStepForm(currentStepIndex)} />
        <div className={styles.formContainer}>
          {step}
          {currentStepIndex === 3 && formsCheckSection}
          <div className={styles.stepManager}>
            {currentStepIndex === 0 ? discFormStepManager : otherFormsStepManager}
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
