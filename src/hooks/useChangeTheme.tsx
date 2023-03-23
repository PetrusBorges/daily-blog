import { useState, useEffect, useMemo } from 'react';

import { Theme } from '../assets/styles';

export function useChangeTheme() {
  type ThemeKeys = 'dark' | 'light';

  const storedTheme = localStorage.getItem('Theme');
  const initialTheme: ThemeKeys = storedTheme ? JSON.parse(storedTheme) : 'light';

  const [ theme, setTheme ] = useState<ThemeKeys>(initialTheme);

  const currentTheme = useMemo(() => {
    return Theme[theme] || Theme.dark;
  }, [ theme ]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('Theme', JSON.stringify(theme));
  }, [ theme ]);

  return {
    theme,
    currentTheme,
    handleToggleTheme,
  };
}
