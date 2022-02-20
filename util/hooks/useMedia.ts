import { useState, useEffect } from 'react';

export type Media = 'desktop' | 'mobile' | 'tablet';

export const useMedia = () => {
  const defaultMedia: Media = 'desktop';
  const [media, setMedia] = useState<Media>(defaultMedia);

  const handleMediaChange = (mediaName: Media) => (mediaHandler: MediaQueryListEventInit) => {
    if (mediaHandler.matches && mediaName !== media) {
      setMedia(mediaName);
    }
  };

  useEffect(() => {
    const mobileMedia = window.matchMedia('(max-width: 767px)');
    const tabletMedia = window.matchMedia('(max-width: 1439px) and (min-width: 768px)');
    const desktopMedia = window.matchMedia('(min-width: 1440px)');

    const mobileHandler = handleMediaChange('mobile');
    const tabletHandler = handleMediaChange('tablet');
    const desktopHandler = handleMediaChange('desktop');

    mobileMedia.addEventListener('change', mobileHandler);
    tabletMedia.addEventListener('change', tabletHandler);
    desktopMedia.addEventListener('change', desktopHandler);

    return () => {
      mobileMedia.removeEventListener('change', mobileHandler);
      tabletMedia.removeEventListener('change', tabletHandler);
      desktopMedia.removeEventListener('change', desktopHandler);
    };
  }, [media]);

  return media;
};
