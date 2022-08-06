import { RefObject } from 'react';

export const scrollTo = (elRef: RefObject<HTMLDivElement>) => {
  const headerHeight = window.document.querySelector('main')?.offsetTop || 0;
  const contentOffsetTop = elRef.current?.offsetTop || 0;

  window.scrollTo({ left: 0, top: contentOffsetTop - headerHeight - 57, behavior: 'smooth' });
};
