import React from 'react';
import { Link } from 'react-router-dom';
import HeaderFlix from './styles';
import ButtonFlix from '../Button';
import LogoBubbleFlix from '../Logo';

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
