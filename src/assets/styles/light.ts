import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

const light: DefaultTheme = {
  ...defaultTheme,
  background: '#FFFFFF',
  cardBackground: '#F5F8FC',
  cardBorderColor: '#D4D8DE',
  textColor: '#0E1217',
};

export { light };
