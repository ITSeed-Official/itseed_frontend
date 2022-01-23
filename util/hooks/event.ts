import { useState, useEffect } from "react";

interface EventHandlers {
  [key: string]: EventListenerOrEventListenerObject;
}

export const useDom = (eventHandlers: EventHandlers) => {
  useEffect(() => {
    Object.keys(eventHandlers).forEach((event) =>
      window.addEventListener(event, eventHandlers[event])
    );

    return () => {
      Object.keys(eventHandlers).forEach((event) =>
        window.removeEventListener(event, eventHandlers[event])
      );
    };
  }, []);
};

export const useScroll = () => {
  const [scrollY, setState] = useState(0);

  const scrollEvent = () => {
    setState(window.scrollY);
  };

  useDom({ scroll: scrollEvent });

  return { scrollY };
};
