import Logo from '../../assets/icons/blog.svg';
import MobileIconClose from '../../assets/icons/mobileIconClose.svg';
import MobileIconOpen from '../../assets/icons/mobileIconOpen.svg';

import { Link } from 'react-router-dom';

import { Container, Content, Navigate, NavigateMobile, DropdownMenuMobile } from './styles';

import { useHeader } from '../../hooks/useHeader';

export function Header() {

  const {
    isMobileOpen,
    handleToggleMobileOpen,
  } = useHeader();

  return (
    <Container>
      <Content>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
          DAILY BLOG.
        </Link>

        <Navigate>
          <Link to='/users'>
            Ver usuários
          </Link>
          <Link to='/about'>
            Sobre a pagina
          </Link>
        </Navigate>

        <NavigateMobile
          type='button'
          onClick={handleToggleMobileOpen}
        >
          {!isMobileOpen ? (
            <img src={MobileIconOpen} alt="MobileIconOpen" />
          ) : (
            <img src={MobileIconClose} alt="MobileIconClose" />
          )}
        </NavigateMobile>

        {isMobileOpen && (
          <DropdownMenuMobile
            isVisible={isMobileOpen}
          >
            <Link to='/users'>
            Ver usuários
            </Link>
            <Link to='/about'>
            Sobre a pagina
            </Link>
          </DropdownMenuMobile>
        )}
      </Content>
    </Container>
  );
}
