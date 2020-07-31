import config from '../config';

const URL_VIDEOS = `${config.API_BACKEND_URL}/videos`;

function getAll() {
  return fetch(URL_VIDEOS)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {

  getAll,
};
