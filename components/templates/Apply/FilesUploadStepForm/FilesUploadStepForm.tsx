import { FC, useRef, ChangeEvent, DragEvent, useState } from 'react';
import classnames from 'classnames';

import { FormDataType, FileType } from 'util/form';
import { uploadFile } from 'api/application';

import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';

import styles from './FilesUploadStepForm.module.scss';

type FilesUploadStepFormType = {
  data: FormDataType;
  updateFields: Function;
};

const FilesUploadStepForm: FC<FilesUploadStepFormType> = ({ data, updateFields }) => {
  const [isOnDrag, setIsOnDrag] = useState<FileType | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);
  const certificationInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = (fileType: FileType) => {
    // redirect the click event onto the hidden input element
    console.log('click');
    if (fileType === 'resume') resumeInputRef.current?.click();
    else certificationInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>, fileType: FileType) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    // 超過 5MB 就擋住
    if (e.target.files[0].size > 1048576 * 5) {
      return;
    }

    const file = e.target.files[0];
    const reponse = await uploadFile(file, fileType);

    updateFields({
      files: {
        ...data.files,
        [fileType]: {
          file,
          name: reponse.data.name,
          path: reponse.data.path,
        },
      },
    });
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
  const handleDrop = async (e: DragEvent<HTMLDivElement>, fileType: FileType) => {
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();

    if (!e.dataTransfer) return;

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

    if (!file) return;

    // TODO: send file to backend
    const reponse = await uploadFile(file, fileType);
    updateFields({
      files: {
        ...data.files,
        [fileType]: {
          file,
          name: reponse.data.name,
          path: reponse.data.path,
        },
      },
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
        <h3 className={styles.title}>1.個人資料</h3>
        <div className={styles.description}>
          <p>請以「pdf」上傳限制大小為 5 MB</p>
          <p>內容</p>
          <p>1. 一頁以內</p>
          <p>2. 建議內含：姓名、學歷、經歷、專長能力，及其他有利審查資料</p>
          <p>檔案命名規則「姓名_個人履歷」</p>
          <p>(如：報名者 陳資種，則將檔案命名為 「陳資種_個人履歷」)</p>
        </div>
        <div
          className={classnames(styles.uploadBlock, isOnDrag === 'resume' && styles.onDrag)}
          onDragEnter={() => setIsOnDrag('resume')}
          onDragLeave={() => setIsOnDrag(null)}
          onDrop={(e) => handleDrop(e, 'resume')}
          onDragOver={handleDragOver}
        >
          可拖曳檔案至此或點選檔案上傳
        </div>
        <input
          type="file"
          accept=".pdf"
          ref={resumeInputRef}
          onChange={(e) => handleFileChange(e, 'resume')}
          style={{ display: 'none' }}
        />
        {data.files.resume && <p className={styles.fileName}>{data.files.resume.name}</p>}
        <Button onClick={() => handleUploadClick('resume')}>檔案上傳</Button>
      </div>
      <div className={styles.divisionLine} />
      <div>
        <h3 className={styles.title}>2.學生證明</h3>
        <div className={styles.description}>
          <p>請以「pdf」上傳限制大小為 5 MB</p>
          <p>內容</p>
          <p>1. 學生證正反面影本或照片、研究所錄取證明書影本或照片 檔案命名規則「姓名_學生證明」</p>
          <p>(如：報名者 陳資種，則將檔案命名為 「陳資種_學生證明」)</p>
        </div>
        <div
          className={classnames(styles.uploadBlock, isOnDrag && styles.onDrag)}
          onDragEnter={() => setIsOnDrag('certification')}
          onDragLeave={() => setIsOnDrag(null)}
          onDrop={(e) => handleDrop(e, 'certification')}
          onDragOver={handleDragOver}
        >
          可拖曳檔案至此或點選檔案上傳
        </div>
        <input
          type="file"
          ref={certificationInputRef}
          onChange={(e) => handleFileChange(e, 'certification')}
          style={{ display: 'none' }}
        />
        {data.files.certification && <p className={styles.fileName}>{data.files.certification.name}</p>}
        <Button onClick={() => handleUploadClick('certification')}>檔案上傳</Button>
      </div>
      <div className={styles.divisionLine} />
      <div>
        <h3 className={styles.title}>3.資料確認</h3>
        <p>確認完成後點擊下方按鈕完成書審資料</p>
        <div className={styles.block}>
          <p>1.基本資料</p>
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        </div>
        <div className={styles.block}>
          <p>2.個人履歷</p>
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        </div>
        <div className={styles.block}>
          <p>3.書審問題</p>
          <Icon iconSrc="/images/icons/icon-cancel.svg" />
        </div>
        <Button>確認完成</Button>
      </div>
    </>
  );
};

export default FilesUploadStepForm;
