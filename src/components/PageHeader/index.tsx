import { useLocation } from 'react-router-dom';

import { Container, Content, ContainerInfo, PageHeaderContainer, Select } from './styles';

interface PageHeaderProps {
  logoHeader: string;
  title: string;
  description: string;
  onChange?: () => void;
}

export function PageHeader({ logoHeader, title, description, onChange }: PageHeaderProps) {

  const location = useLocation();

  return (
    <Container>
      <Content>
        <ContainerInfo>
          <PageHeaderContainer>
            <img src={logoHeader} alt={logoHeader} />
            <h1>{title}</h1>
          </PageHeaderContainer>

          <p>{description}</p>
        </ContainerInfo>

        {location.pathname === '/about' ? null : (
          <Select onChange={onChange}>
            <option value="filterByFetchData">Filtrar por Padrão</option>
            <option value="filterByAlphabet">Filtrar por ordem alfabética</option>
            <option value="filterByCourses">Filtrar por quantidade de cursos</option>
          </Select>
        )}
      </Content>
    </Container>
  );
}
