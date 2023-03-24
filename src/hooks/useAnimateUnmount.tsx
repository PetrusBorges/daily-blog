import { useState, useEffect, useRef } from 'react';

export function useAnimateUnmount(isVisible: boolean) {
  const [ shouldRender, setShouldRender ] = useState(false);

  const animatedElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;

    if (!isVisible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isVisible]);

  return {
    shouldRender,
    animatedElementRef,
  };
}
