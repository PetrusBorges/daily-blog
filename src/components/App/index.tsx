import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import { ThemeButton } from '../ThemeButton';

import { useChangeTheme } from '../../hooks/useChangeTheme';

export function App() {

  const {
    theme,
    currentTheme,
    handleToggleTheme,
  } = useChangeTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <ThemeButton
        selectedTheme={theme}
        onClick={handleToggleTheme}
      />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

