import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { useForm } from '../../../hooks/useForm';
import repositoryVideos from '../../../repositories/videos';

function CadastroVideo() {
  const formData = {
    title: '',
    description: '',
    url: '',
  };

  const { handleChange, values, clearForm } = useForm(formData);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    repositoryVideos.getAll()
      .then((success) => {
        console.log(success);
      }).catch((error) => console.log(error));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          // console.log('enviou né brabo?');
          setMovies([
            ...movies,
            values,
          ]);
          clearForm();
        }}
      >
        <FormField
          label="Titulo"
          type="text"
          value={values.title}
          name="name"
          onChange={handleChange}
        />
        <FormField
          label="Link do Video"
          type="text"
          value={values.url}
          name="name"
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          type="text"
          value={values.description}
          name="name"
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar Video
        </button>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
