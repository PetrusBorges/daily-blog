import { useState } from 'react';

export function useHeader() {
  const [ isMobileOpen, setIsMobileOpen ] = useState(false);

  function handleToggleMobileOpen() {
    setIsMobileOpen((prevState) => !prevState);
  }

  return {
    isMobileOpen,
    handleToggleMobileOpen,
  };
}
