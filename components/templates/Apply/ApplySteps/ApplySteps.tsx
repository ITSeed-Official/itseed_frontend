import { FC, useEffect, useState, useRef } from 'react';

import { useMultistepForm } from 'util/hooks/useMultistepForm';
import { useModals } from 'util/hooks/useModals';
import { GOOGLE_LOGIN_LINK } from 'util/const';
import { FormDataType, formValidation, INITIAL_DATA, stepMap } from 'util/form';
import { ErrorCode, ErrorWithCode } from 'util/error';
import { EMAIL } from 'util/const';
import { getFormData, updateFormData } from 'api/application';

import ApplyStepsBar from '../ApplyStepsBar';
import DiscStepForm from '../DiscStepForm';
import PersonalInfoStepForm from '../PersonalInfoStepForm';
import FilesUploadStepForm from '../FilesUploadStepForm';
import QuestionsStepForm from '../QuestionsStepForm';
import PaymentStep from '../PaymentStep';

import Modal from 'components/molecules/Modal';
import ModalSave from 'components/molecules/ModalSave';
import Button, { ButtonIcon } from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

import styles from './ApplySteps.module.scss';
import { scrollTo } from 'util/scroll';
import SectionWrapper from 'components/molecules/SectionWrapper';

const ApplySteps: FC = () => {
  const [formData, setFormData] = useState<FormDataType>(INITIAL_DATA);
  const [surveyIndex, setSurveyIndex] = useState<number>(0); // DISC 題目號碼
  const [isFormValid, setIsFormValid] = useState<boolean[]>([false, false, false]); // 單一表單頁面是否符合格式(=完成)
  const [isFormUpdateSuccess, setIsFormUpdateSuccess] = useState<boolean>(false);
  const { isModalOpen, setModalState } = useModals([false, false]); // 0 是確認繳交的 state, 1 是儲存資料的 state

  const ref = useRef<HTMLDivElement | null>(null);
  //const { isOpen, closeModal, openModal } = useContext(ModalContext);

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
  const updateStepForm = async (currentStepIndex?: number) => {
    try {
      let isSuccess = false;

      switch (currentStepIndex) {
        default:
          // 更新全部 data
          isSuccess = await updateFormData(formData);
          break;
        case 0:
          isSuccess = await updateFormData({ survey: formData.survey });
          break;
        case 1:
          isSuccess = await updateFormData({ info: formData.info });
          break;
        case 2:
          isSuccess = await updateFormData({ answer: formData.answer });
          break;
        case 3:
          isSuccess = await updateFormData({ files: formData.files });
          break;
      }

      setIsFormUpdateSuccess(isSuccess);
    } catch (error) {
      setIsFormUpdateSuccess(false);
    }
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo } = useMultistepForm(
    [
      <DiscStepForm key="survey" data={formData.survey} updateFields={updateFields} surveyIndex={surveyIndex} />,
      <PersonalInfoStepForm key="info" data={formData.info} updateFields={updateFields} />,
      <QuestionsStepForm key="question" data={formData.answer} updateFields={updateFields} />,
      <FilesUploadStepForm
        key="files"
        data={formData.files}
        updateFields={updateFields}
        updateFormData={updateFormData}
      />,
      <PaymentStep key="payment" />,
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
          className={styles.buttonBack}
          onClick={() => {
            setSurveyIndex((prev) => (prev -= 1));
          }}
        >
          回上一題
        </Button>
      )}
      <Button
        className={styles.buttonNext}
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
      <u
        className={styles.save}
        onClick={() => {
          updateStepForm(currentStepIndex);
          setModalState(1);
        }}
      >
        儲存資料
      </u>
      {!isFirstStep && (
        <Button className={styles.buttonBack} onClick={lastStep}>
          回上一階段
        </Button>
      )}
      {!isLastStep && (
        <Button
          className={styles.buttonNext}
          icon={ButtonIcon.arrow}
          disabled={isLastStep}
          onClick={() => {
            nextStep();
          }}
        >
          下一步
        </Button>
      )}
      {isModalOpen[1] && <ModalSave isFormUpdateSuccess={isFormUpdateSuccess} closeModal={() => setModalState(1)} />}
    </>
  );

  const formsCheckSection = (
    <div className={styles.formsCheckSection}>
      <h3 className={styles.title}>3.資料確認</h3>
      <p>確認完成後點擊下方「送出申請」按鈕繳交書審資料</p>
      <div className={styles.block}>
        <p>1. {stepMap[1]}</p>
        {isFormValid[0] ? (
          <Icon iconSrc="/images/icons/icon-checkcircle.svg" />
        ) : (
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        )}
        <Icon className={styles.edit} iconSrc="/images/icons/icon-edit.svg" onClick={() => goTo(1)} />
      </div>
      <div className={styles.block}>
        <p>2. {stepMap[2]}</p>
        {isFormValid[1] ? (
          <Icon iconSrc="/images/icons/icon-checkcircle.svg" />
        ) : (
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        )}
        <Icon className={styles.edit} iconSrc="/images/icons/icon-edit.svg" onClick={() => goTo(2)} />
      </div>
      <div className={styles.block}>
        <p>3. {stepMap[3]}</p>
        {isFormValid[2] ? (
          <Icon iconSrc="/images/icons/icon-checkcircle.svg" />
        ) : (
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        )}
        <Icon className={styles.edit} iconSrc="/images/icons/icon-edit.svg" onClick={() => scrollTo(ref)} />
      </div>
      <Button
        className={styles.buttonConfirm}
        disabled={
          isFormValid.find((isValid) => {
            return !isValid;
          }) !== undefined
        }
        onClick={() => {
          setModalState(0);
        }}
      >
        送出申請
      </Button>
      {isModalOpen[0] && (
        <Modal closeModal={() => setModalState(0)}>
          <h3>確定繳交嗎？不能再更改囉!</h3>
          <div className={styles.modalControl}>
            <Button
              className={styles.button}
              onClick={() => {
                setModalState(0);
              }}
            >
              取消
            </Button>
            <Button
              className={styles.button}
              onClick={async () => {
                await updateStepForm();
                const { data } = await getFormData();
                setModalState(0);
                if (data.info.step === 4) {
                  goTo(4);
                  scrollTo(ref);
                } else {
                  setIsFormUpdateSuccess(false);
                  setModalState(1);
                }
              }}
            >
              確認繳交
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );

  return (
    <div ref={ref} className={styles.backgroundWrapper}>
      <SectionWrapper className={styles.applySteps}>
        <h3 className={styles.title}>報名專區</h3>
        <ApplyStepsBar curStep={currentStepIndex} />
        {formData.info.nickname === undefined ? (
          <div className={styles.loadingPage}>
            <span className={styles.loader}></span>
          </div>
        ) : (
          <>
            <div className={styles.formContainer}>
              {step}
              {currentStepIndex === 3 && formsCheckSection}
              <div className={styles.stepManager}>
                {currentStepIndex === 0 ? discFormStepManager : currentStepIndex < 4 && otherFormsStepManager}
              </div>
            </div>
            <div>
              <h5 className={styles.note}>
                如有任何其他相關問題，請私訊 資訊種子粉絲專頁，或寄信至 ITseed 信箱（{EMAIL}）將由專人為您解答！
              </h5>
            </div>
          </>
        )}
      </SectionWrapper>
    </div>
  );
};

export default ApplySteps;
