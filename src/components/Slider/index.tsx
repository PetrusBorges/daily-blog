import { Container, Content } from './styles';

import { useSlider } from '../../hooks/useSlider';

interface VerticalScrollProps {
  children: React.ReactNode;
}

export function VerticalScroll({ children }: VerticalScrollProps) {

  const {
    handleScroll
  } = useSlider();

  return (
    <Container
      onScroll={handleScroll}
    >
      <Content>
        {children}
      </Content>
    </Container>
  );
}
