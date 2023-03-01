import { useState } from 'react';

export const useModals = (initialState: boolean[]) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean[]>(initialState);

  const setModalState = (index: number) => {
    const newState = [...isModalOpen];
    newState[index] = !newState[index];
    setIsModalOpen(newState);
  };

  return { isModalOpen, setModalState };
};
