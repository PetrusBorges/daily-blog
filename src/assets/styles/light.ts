import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

const light: DefaultTheme = {
  ...defaultTheme,
  background: '#F2F6F7',
  cardBackground: '#FAFCFC',
  cardBorderColor: '#D4D8DE',
  textColor: '#0E1217',
};

export { light };
