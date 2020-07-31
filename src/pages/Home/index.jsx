import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';

import repositiroryCategories from '../../repositories/categories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    repositiroryCategories.getAllWithVideos()
      .then((success) => setDadosIniciais(success))
      .catch((error) => error);
  }, []);

  return (
    <>
      <PageDefault padding={0}>

        {dadosIniciais.map((category, indice) => {
          if (indice === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[3].titulo}
                  url={dadosIniciais[0].videos[3].url}
                  videoDescription={dadosIniciais[0].videos[3].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}

      </PageDefault>

    </>
  );
}

export default Home;
