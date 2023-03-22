import Logo from '../../assets/icons/blog.svg';
import MobileIconClose from '../../assets/icons/mobileIconClose.svg';
import MobileIconOpen from '../../assets/icons/mobileIconOpen.svg';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, Navigate, NavigateMobile, DropdownMenuMobile } from './styles';

export function Header() {

  const [ isMobileOpen, setIsMobileOpen ] = useState(false);

  function handleToggleMobileOpen() {
    setIsMobileOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <Content>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
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
