import { useRef } from 'react';

export function useSlider() {
  const scrollPositionRef = useRef(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget;
    scrollPositionRef.current = scrollTop;
  };

  return {
    handleScroll
  };
}
