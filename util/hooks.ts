import { useState, useEffect } from "react";

export type Media = "desktop" | "mobile" | "tablet";

export const useMedia = () => {
  const mobileMedia = window.matchMedia("(max-width: 768px)");
  const tabletMedia = window.matchMedia(
    "(max-width: 1279px) and (min-width: 769px)"
  );
  const desktopMedia = window.matchMedia("(min-width: 1280px)");

  let defaultMedia: Media = "desktop";

  if (mobileMedia.matches) {
    defaultMedia = "mobile";
  }

  if (tabletMedia.matches) {
    defaultMedia = "tablet";
  }

  const [media, setMedia] = useState(defaultMedia);

  const handleMediaChange =
    (mediaName: Media) => (mediaHandler: MediaQueryListEventInit) => {
      if (mediaHandler.matches && mediaName !== media) {
        setMedia(mediaName);
      }
    };

  useEffect(() => {
    const mobileHandler = handleMediaChange("mobile");
    const tabletHandler = handleMediaChange("tablet");
    const desktopHandler = handleMediaChange("desktop");

    mobileMedia.addListener(mobileHandler);
    tabletMedia.addListener(tabletHandler);
    desktopMedia.addListener(desktopHandler);

    return () => {
      mobileMedia.removeListener(mobileHandler);
      tabletMedia.removeListener(tabletHandler);
      desktopMedia.removeListener(desktopHandler);
    };
  }, [media]);

  return media;
};
