import { FC, useEffect } from 'react';
import classnames from 'classnames';

import Portal from 'components/atoms/Portal';
import Backdrop from 'components/atoms/Backdrop';

import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
  closeModal?: Function;
  noBackDrop?: boolean;
  autoClose?: boolean;
};

const Modal: FC<ModalProps> = ({
  className,
  children,
  closeModal = () => {},
  noBackDrop = false,
  autoClose = false,
}) => {
  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        closeModal();
      }, 1000);
    }
  }, [autoClose]);

  return (
    <>
      {!noBackDrop && (
        <Portal>
          <Backdrop
            onClick={() => {
              closeModal();
            }}
          />
        </Portal>
      )}
      <Portal>
        <div className={classnames(styles.modal, className)}>{children}</div>
      </Portal>
    </>
  );
};

export default Modal;
