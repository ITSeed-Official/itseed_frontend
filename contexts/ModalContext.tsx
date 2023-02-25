import { useState, useContext, createContext, FC } from 'react';

interface Context {
  isOpen: boolean;
  openModal: Function;
  closeModal: Function;
}

const defaultValue: Context = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

// Create a context for the modal state
export const ModalContext = createContext(defaultValue);

// App component that sets up the modal state and passes it down to child components
export const ModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const value = {
    isOpen,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
