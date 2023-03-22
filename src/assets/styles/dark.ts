import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

const dark: DefaultTheme = {
  ...defaultTheme,
  background: '#151B26',
  cardBackground: '#06090F',
  cardBorderColor: '#E8EBF0',
  textColor: '#D8DBE3',
};

export { dark };
