import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import { ThemeButton } from '../ThemeButton';

import { useChangeTheme } from '../../hooks/useChangeTheme';
import { Header } from '../Header';

export function App() {

  const {
    theme,
    currentTheme,
    handleToggleTheme,
  } = useChangeTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header />
        <ThemeButton
          selectedTheme={theme}
          onClick={handleToggleTheme}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

