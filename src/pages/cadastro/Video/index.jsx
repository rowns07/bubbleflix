import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { useForm } from '../../../hooks/useForm';
import repositoryVideos from '../../../repositories/videos';
import repositoryCategories from '../../../repositories/categories';
import ButtonFlix from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { handleChange, values, clearForm } = useForm({
    title: '',
    url: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    repositoryCategories
      .getAll()
      .then((success) => {
        setCategorias(success);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <ButtonFlix>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </ButtonFlix>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => categoria.title === values.category);

        repositoryVideos.create({
          title: values.title,
          url: values.url,
          description: values.description,
          categoryId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >

        <FormField
          label="title"
          value={values.title}
          name="title"
          onChange={handleChange}
        />
        <FormField
          label="URL"
          value={values.url}
          name="url"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          value={values.description}
          name="description"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <ButtonFlix type="submit">
          Cadastrar Video
        </ButtonFlix>
        <ButtonFlix type="button" onClick={clearForm} style={{ marginLeft: 5, backgroundColor: 'white', color:'black' }}>
          Limpar
        </ButtonFlix>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
