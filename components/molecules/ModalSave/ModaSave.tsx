import { FC } from 'react';

import Modal from '../Modal/Modal';
import Icon from 'components/atoms/Icon';

import styles from './ModalSave.module.scss';

type ModalProps = {
  className?: string;
  closeModal?: Function;
  isFormUpdateSuccess: boolean;
};

const ModalSave: FC<ModalProps> = ({ closeModal = () => {}, isFormUpdateSuccess = false }) => {
  return (
    <Modal noBackDrop autoClose closeModal={closeModal} className={styles.modalSave}>
      {isFormUpdateSuccess ? (
        <>
          <Icon className={styles.saveIcon} iconSrc="/images/icons/icon-checkcircle.svg" />
          儲存成功！
        </>
      ) : (
        <>
          <Icon className={styles.saveIcon} iconSrc="/images/icons/icon-cancel.svg" />
          儲存失敗，請再試一次
        </>
      )}
    </Modal>
  );
};

export default ModalSave;
