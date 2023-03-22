import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      blue: string,
      blueLight: string,
      blueDark: string,
    },
    background: string,
    cardBackground: string,
    cardBorderColor: string,
    textColor: string,
  }
}
