import Light from '../../assets/icons/light.svg';
import Dark from '../../assets/icons/dark.svg';

import { Container } from './styles';

interface ThemeButtonProps {
  selectedTheme: string;
  onClick: () => void;
}

export function ThemeButton({ selectedTheme, onClick }: ThemeButtonProps) {
  return (
    <Container
      onClick={onClick}
    >
      {selectedTheme === 'dark' && (
        <img src={Light} alt="Light" />
      )}
      {selectedTheme === 'light' && (
        <img src={Dark} alt="Dark" />
      )}
    </Container>
  );
}
