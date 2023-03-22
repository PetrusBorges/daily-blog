import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

const light: DefaultTheme = {
  ...defaultTheme,
  background: '#F7F9FC',
  cardBackground: '#D8DBE3',
  cardBorderColor: '#0F141F',
  textColor: '#717274',
};

export { light };
