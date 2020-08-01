import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { useForm } from '../../../hooks/useForm';
import repositoryCategories from '../../../repositories/categories';

function CadastroCategoria() {
  const formData = {
    title: '',
    description: '',
    color: '',
    link_extra: {
      text: '',
      url: '',
    },
  };

  const { handleChange, values, clearForm } = useForm(formData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    repositoryCategories.getAll()
      .then((success) => {
        setCategories(success);
      }).catch((error) => console.log(error));
  }, []);

  return (
    <PageDefault>
      <div style={{ fontSize: 25 }}>
        <h1>
          Cadastro de Categoria:
          {values.title}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategories([
            ...categories,
            values,
          ]);

          repositoryCategories.create({
            title: values.title,
            description: values.description,
            color: values.color,
            link_extra: {
              text: values.text,
              url: values.url,
            },
          })
            .then((success) => console.log('conteudo enviado', success));

          clearForm();
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            value={values.title}
            name="title"
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          <FormField
            label="Link Extra Url"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Link Extra Text"
            type="text"
            name="text"
            value={values.text}
            onChange={handleChange}
          />

          <button type="submit">
            Cadastrar
          </button>

        </form>
        <br />

        {categories.length === 0 && (<div>loading</div>)}

        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {category.title}
            </li>
          ))}
        </ul>
        <br />

        <Link to="/">
          Ir para home
        </Link>

      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
