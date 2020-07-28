import React from 'react';
import HeaderFlix from './components/HeaderFlix';
import LogoMflix from './components/LogoMflix';
import ButtonFlix from './components/ButtonFlix';
import FooterFlix from './components/FooterFlix';
import LinkFlix from './components/LinkFlix';



function App() {
  return (
    <>
      <HeaderFlix>
        <LogoMflix />
        <ButtonFlix as="a" href="/">Novo vídeo</ButtonFlix>
      </HeaderFlix>

      {/* <FooterFlix>
        <LogoMflix />
        <p>Site feito na <strong>#ImersãoReact</strong> da
        <LinkFlix href="https://alura.com.br"> Alura</LinkFlix>
        </p>
      </FooterFlix> */}
    </>
  )
}

export default App;
