import { Link } from 'react-router-dom';

import { SvgTecnologies } from '../SvgTecnologies';

import { Container, Content, ContainerInfo, ContainerTecnologies, ContainerList, AlignSvg, ContainerSocials } from './styles';

export function AboutInfo() {
  return (
    <Container>
      <Content>
        <ContainerInfo>
          <h2>Sobre</h2>

          <p>Esse projeto foi desenvolvido para o teste técnico de Desenvolvedor Front End. O projeto consiste em uma aplicação web de controle de posts em um blog com possibilidade de visualizar os usuários que interagiram com o post selecionado e suas informações pessoais.</p>
        </ContainerInfo>

        <ContainerInfo>
          <h2>Desafio</h2>

          <p>A equipe recebeu uma demanda para desenvolver um front-end para uma API RESTful. No
          cenário proposto, a interface deve exibir posts de um blog e, ao clicar em um post, os
          comentários associados.
          </p>
        </ContainerInfo>

        <ContainerTecnologies>
          <h2>Tecnologias</h2>

          <ContainerList>
            <Link
              to='https://axios-http.com'
              target="_blank"
            >
            Axios
            </Link>

            <Link
              to='https://eslint.org'
              target="_blank"
            >
            ESLint
            </Link>

            <Link
              to='https://vitejs.dev'
              target="_blank"
            >
            Vite.js
            </Link>

            <Link
              to='https://react.dev'
              target="_blank"
            >
            React.js
            </Link>

            <Link
              to='https://www.typescriptlang.org'
              target="_blank"
            >
            Typescript
            </Link>

            <Link
              to='https://reactrouter.com/en/main'
              target="_blank"
            >
            React Router Dom
            </Link>

            <Link
              to='https://styled-components.com'
              target="_blank"
            >
            Styled Components
            </Link>
          </ContainerList>

          <AlignSvg>
            <SvgTecnologies />
          </AlignSvg>
        </ContainerTecnologies>

        <ContainerSocials>
          <h2>Autor</h2>

          <Link
            to='https://github.com/PetrusBorges'
            target="_blank"
          >
            Petrus Borges - GitHub
          </Link>

          <Link
            to='https://www.linkedin.com/in/petrusborgesmachado/'
            target="_blank"
          >
            Petrus Borges - Linkedin
          </Link>

          <Link
            to='https://petrusborgesportfolio.netlify.app'
            target="_blank"
          >
            Petrus Borges - Portfólio
          </Link>
        </ContainerSocials>
      </Content>
    </Container>
  );
}
