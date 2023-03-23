import { useLocation } from 'react-router-dom';

import { Container, Content, ContainerInfo, PageHeaderContainer, Select } from './styles';

interface PageHeaderProps {
  logoHeader: string;
  title: string;
  description: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
            <option value="filteredUsersByFetchData">Filtrar por Padrão</option>
            <option value="filteredUsersByAlphabet">Filtrar por ordem alfabética</option>
          </Select>
        )}
      </Content>
    </Container>
  );
}
