import { FC, useRef, ChangeEvent, DragEvent, useState } from 'react';
import classnames from 'classnames';

import { useModals } from 'util/hooks/useModals';
import { FileType, Files } from 'util/form';
import { uploadFile } from 'api/application';

import ModalSave from 'components/molecules/ModalSave';
import Button from 'components/atoms/Button';

import styles from './FilesUploadStepForm.module.scss';

type FilesUploadStepFormType = {
  data: Files;
  updateFields: Function;
  updateFormData: Function;
};

const FilesUploadStepForm: FC<FilesUploadStepFormType> = ({ data, updateFields, updateFormData }) => {
  const [isOnDrag, setIsOnDrag] = useState<FileType | null>(null);
  const [errorMessages, setErrorMessages] = useState<string[]>(['', '']);
  const [isFormUpdateSuccess, setIsFormUpdateSuccess] = useState<boolean>(false);

  const resumeInputRef = useRef<HTMLInputElement | null>(null);
  const certificationInputRef = useRef<HTMLInputElement | null>(null);

  const { isModalOpen, setModalState } = useModals([false]);

  const handleUploadClick = (fileType: FileType) => {
    // redirect the click event onto the hidden input element
    if (fileType === 'resume') resumeInputRef.current?.click();
    else certificationInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>, fileType: FileType) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    // 超過 5MB 就擋住
    if (e.target.files[0].size > 1048576 * 5) {
      console.log('BLOCK FILE');

      if (fileType === 'resume')
        setErrorMessages((prev) => {
          let next = [...prev];
          next[0] = '檔案大小超過 5MB';
          return next;
        });
      else if (fileType === 'certification')
        setErrorMessages((prev) => {
          let next = [...prev];
          next[1] = '檔案大小超過 5MB';
          return next;
        });
      return;
    }

    const file = e.target.files[0];

    try {
      const reponse = await uploadFile(file, fileType);

      const updatedFiles = {
        ...data,
        [fileType]: {
          file,
          name: reponse.data.name,
          path: reponse.data.path,
        },
      };

      updateFields({
        files: updatedFiles,
      });

      const isSuccess = await updateFormData({ files: updatedFiles });
      setIsFormUpdateSuccess(isSuccess);
      setModalState(0);
    } catch (error) {
      setIsFormUpdateSuccess(false);
      setModalState(0);
    }

    if (fileType === 'resume' && errorMessages[0] !== '')
      setErrorMessages((prev) => {
        let next = [...prev];
        next[0] = '';
        return next;
      });
    else if (fileType === 'certification' && errorMessages[1] !== '')
      setErrorMessages((prev) => {
        let next = [...prev];
        next[1] = '';
        return next;
      });
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
  const handleDrop = async (e: DragEvent<HTMLDivElement>, fileType: FileType) => {
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();

    if (!e.dataTransfer) {
      setIsOnDrag(null);
      return;
    }

    let file = null;

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      const item = e.dataTransfer.items[0];
      if (item.kind === 'file') {
        file = item.getAsFile();
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      const item = e.dataTransfer.files[0];
      file = item;
    }

    if (!file) {
      setIsOnDrag(null);
      return;
    }

    if (file.type !== 'application/pdf') {
      setIsOnDrag(null);

      if (fileType === 'resume')
        setErrorMessages((prev) => {
          let next = [...prev];
          next[0] = '僅限 pdf 格式';
          return next;
        });
      else if (fileType === 'certification')
        setErrorMessages((prev) => {
          let next = [...prev];
          next[1] = '僅限 pdf 格式';
          return next;
        });

      return;
    }

    if (file.size > 1048576 * 5) {
      setIsOnDrag(null);

      if (fileType === 'resume')
        setErrorMessages((prev) => {
          let next = [...prev];
          next[0] = '檔案大小超過 5MB';
          return next;
        });
      else if (fileType === 'certification')
        setErrorMessages((prev) => {
          let next = [...prev];
          next[1] = '檔案大小超過 5MB';
          return next;
        });
      return;
    }

    try {
      const reponse = await uploadFile(file, fileType);
      const updatedFiles = {
        ...data,
        [fileType]: {
          file,
          name: reponse.data.name,
          path: reponse.data.path,
        },
      };

      updateFields({
        files: updatedFiles,
      });

      const isSuccess = await updateFormData({ files: updatedFiles });
      setIsFormUpdateSuccess(isSuccess);
      setModalState(0);
    } catch (error) {
      console.log(error);
      setIsFormUpdateSuccess(false);
      setModalState(0);
    }

    if (fileType === 'resume' && errorMessages[0] !== '')
      setErrorMessages((prev) => {
        let next = [...prev];
        next[0] = '';
        return next;
      });
    else if (fileType === 'certification' && errorMessages[1] !== '')
      setErrorMessages((prev) => {
        let next = [...prev];
        next[1] = '';
        return next;
      });

    setIsOnDrag(null);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    // console.log('File(s) in drop zone');
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h3 className={styles.title}>1.個人履歷</h3>
        <div className={styles.description}>
          <p>個人履歷限制一頁以內，內容可包含學經歷、專長能力等 </p>
          <p>檔案命名請按照「姓名_個人履歷」（如：陳資種_個人履歷）</p>
          <p>請以「pdf」格式上傳，檔案大小限制為 5 MB</p>
        </div>
        {data.resume.name && (
          <a className={styles.fileName} href={data.resume.path} target="_blank" rel="noreferrer">
            {data.resume.name}
          </a>
        )}
        <div
          className={classnames(styles.uploadBlock, isOnDrag === 'resume' && styles.onDrag)}
          onDragEnter={() => setIsOnDrag('resume')}
          onDragLeave={() => setIsOnDrag(null)}
          onDrop={(e) => handleDrop(e, 'resume')}
          onDragOver={handleDragOver}
        >
          可拖曳檔案至此
        </div>
        <input
          type="file"
          accept=".pdf"
          ref={resumeInputRef}
          onChange={(e) => handleFileChange(e, 'resume')}
          style={{ display: 'none' }}
        />
        <p className={styles.or}>或</p>
        <Button className={styles.uploadButton} onClick={() => handleUploadClick('resume')}>
          檔案上傳
        </Button>
        {errorMessages[0] && <p className={styles.error}>{errorMessages[0]}</p>}
      </div>
      <div className={styles.divisionLine} />
      <div>
        <h3 className={styles.title}>2.學生證明</h3>
        <div className={styles.description}>
          <p>請上傳學生證正反面影本、研究所錄取證明</p>
          <p>檔案命名請按照「姓名_學生證明」（如：陳資種_學生證明）</p>
          <p>請以「pdf」格式上傳，檔案大小限制為 5 MB</p>
        </div>
        {data.certification.name && (
          <a className={styles.fileName} href={data.certification.path} target="_blank" rel="noreferrer">
            {data.certification.name}
          </a>
        )}
        <div
          className={classnames(styles.uploadBlock, isOnDrag && styles.onDrag)}
          onDragEnter={() => setIsOnDrag('certification')}
          onDragLeave={() => setIsOnDrag(null)}
          onDrop={(e) => handleDrop(e, 'certification')}
          onDragOver={handleDragOver}
        >
          可拖曳檔案至此
        </div>
        <input
          type="file"
          accept=".pdf"
          ref={certificationInputRef}
          onChange={(e) => handleFileChange(e, 'certification')}
          style={{ display: 'none' }}
        />
        <p className={styles.or}>或</p>
        <Button className={styles.uploadButton} onClick={() => handleUploadClick('certification')}>
          檔案上傳
        </Button>
        {errorMessages[1] && <p className={styles.error}>{errorMessages[1]}</p>}
      </div>
      <div className={styles.divisionLine} />
      {isModalOpen[0] && <ModalSave isFormUpdateSuccess={isFormUpdateSuccess} closeModal={() => setModalState(0)} />}
    </>
  );
};

export default FilesUploadStepForm;
