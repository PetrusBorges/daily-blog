import { BrowserRouter } from 'react-router-dom';
import { ReactRoutes } from '../../routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import { Header } from '../Header';
import { ThemeButton } from '../ThemeButton';
import { Footer } from '../Footer';

import { useChangeTheme } from '../../hooks/useChangeTheme';

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

        <ReactRoutes />

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

