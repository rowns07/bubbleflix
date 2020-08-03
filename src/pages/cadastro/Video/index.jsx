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
    <PageDefault padding={50}>
      <h1 className="title-page">Novo de Video</h1>
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

        <div style={{
          display: 'flex', justifyContent: 'space-between', width: '100%',
        }}
        >
          <div>

            <ButtonFlix type="submit">
              Adicionar Video
            </ButtonFlix>
            <ButtonFlix type="button" onClick={clearForm} style={{ marginLeft: 5, backgroundColor: 'white', color: 'black' }}>
              Limpar
            </ButtonFlix>
          </div>

          <div>
            <ButtonFlix style={{ backgroundColor: '#d4552b', border: '#d4552b' }}>
              <Link to="/cadastro/categoria" style={{ textDecoration: 'none', color: 'white' }}>
                Cadastrar Categoria
              </Link>
            </ButtonFlix>
          </div>
        </div>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
