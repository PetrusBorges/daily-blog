import Logo from '../../assets/icons/blog.svg';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconInstagram from '../../assets/icons/icon-instagram.svg';
import IconTwitter from '../../assets/icons/icon-twitter.svg';
import IconYoutube from '../../assets/icons/icon-youtube.svg';

import { Link } from 'react-router-dom';

import { Button } from '../Button';

import { Container, Content, ContainerNavigation, ContainerInfo, ContainerInfoNews, ContainerFooter, ContainerSocial, ContainerSocialLink } from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
          DAILY BLOG.
        </Link>

        <ContainerNavigation>
          <ContainerInfo>
            <h2>Posts</h2>

            <Link to='/'>
              Mais vistos
            </Link>

            <Link to='/'>
              Mais comentados
            </Link>

            <Link to='/'>
              Mais populares
            </Link>

            <Link to='/'>
              Mais recentes
            </Link>
          </ContainerInfo>

          <ContainerInfo>
            <h2>Categorias</h2>

            <Link to='/'>
              Tecnologia
            </Link>

            <Link to='/'>
              Games
            </Link>

            <Link to='/'>
              Fotografia
            </Link>

            <Link to='/'>
              Cinema
            </Link>
          </ContainerInfo>

          <ContainerInfoNews>
            <h2>Quer ser avisado dos novos posts do blog?</h2>
            <p>Para ficar sabendo das novas postagens em nosso blog inscreva-se!</p>
            <ContainerFooter>
              <input
                type="text"
                placeholder='Digite seu e-mail aqui'
              />

              <Button
                type='button'
              >
                Inscreva-se
              </Button>
            </ContainerFooter>
          </ContainerInfoNews>
        </ContainerNavigation>

        <ContainerSocial>
          <small>2023 | Todos os direitos reservados.</small>

          <ContainerSocialLink>
            <Link to='/'>
              <img src={IconFacebook} alt="IconFacebook" />
            </Link>
            <Link to='/'>
              <img src={IconInstagram} alt="IconInstagram" />
            </Link>
            <Link to='/'>
              <img src={IconTwitter} alt="IconTwitter" />
            </Link>
            <Link to='/'>
              <img src={IconYoutube} alt="IconYoutube" />
            </Link>
          </ContainerSocialLink>
        </ContainerSocial>
      </Content>
    </Container>
  );
}
