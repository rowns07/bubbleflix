import React from 'react';
import HeaderFlix from './styles';
import ButtonFlix from '../Button';
import LogoBubbleFlix from '../Logo';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <HeaderFlix>
      <Link to="/">
        <LogoBubbleFlix />
      </Link>
      <ButtonFlix as={Link} to="/cadastro/video">
        Novo vídeo
      </ButtonFlix>
    </HeaderFlix>
  );
}

export default Menu;
