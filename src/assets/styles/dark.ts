import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

const dark: DefaultTheme = {
  ...defaultTheme,
  background: '#0E1217',
  cardBackground: '#1C1F26',
  cardBorderColor: '#383D47',
  textColor: '#D8DBE3',
};

export { dark };
