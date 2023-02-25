import { FC, useContext } from 'react';
import classnames from 'classnames';

import { ModalContext } from 'contexts/ModalContext';

import Portal from 'components/atoms/Portal';
import Backdrop from 'components/atoms/Backdrop';

import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
};

const Modal: FC<ModalProps> = ({ className, children }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <>
      <Portal>
        <Backdrop
          onClick={() => {
            closeModal();
          }}
        />
      </Portal>
      <Portal>
        <div className={classnames(styles.modal, className)}>{children}</div>
      </Portal>
    </>
  );
};

export default Modal;
