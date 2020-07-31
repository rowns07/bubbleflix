import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const formData = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(formData);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const API_URL = 'https://bubbleflixx.herokuapp.com/categorias';
      fetch(API_URL)
        .then(async (res) => {
          if (res.ok) {
            const resposta = await res.json();
            setCategories(resposta);
            return;
          }
          throw new Error('Não foi possível buscar os dados');
        });
    }
  }, []);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  return (
    <PageDefault>
      <div style={{ fontSize: 25 }}>
        <h1>
          Cadastro de Categoria:
          {values.name}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          // console.log('enviou né brabo?');
          setCategories([
            ...categories,
            values,
          ]);
          setValues(formData);
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            value={values.name}
            name="name"
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

          <button type="submit">
            Cadastrar
          </button>

        </form>
        <br />
        <div>
          loading
        </div>

        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {category.name}
              {category.id}
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
