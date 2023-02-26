import { ReactElement, useEffect, useState } from 'react';

export function useMultistepForm(steps: ReactElement[], initialStep: number) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    // 加入 if 條件，防止一開始 render 兩次，確定在跟後端拿完 step 資料後才更改現在的 step 數
    if (initialStep >= 1) {
      setCurrentStepIndex(initialStep);
    }
  }, [initialStep]);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 2, // 檔案上傳的 index
    goTo,
    next,
    back,
  };
}
