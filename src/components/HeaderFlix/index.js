import React from 'react';
import HeaderFlix from './styles';
import ButtonFlix from '../ButtonFlix';
import LogoMflix from '../LogoMflix';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <HeaderFlix>
      <Link to="/">
        <LogoMflix />
      </Link>
      <ButtonFlix as={Link} to="/cadastro/video">
        Novo vídeo
      </ButtonFlix>
    </HeaderFlix>
  );
}

export default Menu;
