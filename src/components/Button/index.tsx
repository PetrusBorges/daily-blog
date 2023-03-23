import { Spinner } from '../Spinner';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit';
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ children, type, onClick, isLoading, disabled }: ButtonProps) {
  return (
    <Container
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading
        ? <Spinner
          size={16}
        />
        : children
      }
    </Container>
  );
}
