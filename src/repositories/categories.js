import config from '../config';

const URL_CATEGORIES = `${config.API_BACKEND_URL}/categories`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

function create(objetoDoVideo) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

function deleteCategory(objetoDoVideo) {
  console.log('OBJ - ', `${URL_CATEGORIES}/${objetoDoVideo}`);
  return fetch(`${URL_CATEGORIES}/${objetoDoVideo}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo.id),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  deleteCategory,
};
