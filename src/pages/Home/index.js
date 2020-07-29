import React from 'react';
import BannerMain from '../../components/BannerMain';
import ButtonFlix from '../../components/ButtonFlix';
import FooterM from '../../components/FooterFlix';
import HeaderFlix from '../../components/HeaderFlix';
import LogoMflix from '../../components/LogoMflix';
import dadosIniciais from '../../data/dados_iniciais.json';



function Home() {
  return (
    <>
      <div style={{ background: "#141414" }}>
        <HeaderFlix>
          <LogoMflix />
          <ButtonFlix as="a" href="/">Novo vídeo</ButtonFlix>
        </HeaderFlix>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"DESCRICAO"}>
        </BannerMain>

        <FooterM>

        </FooterM>
      </div>
    </>
  )
}

export default Home;
