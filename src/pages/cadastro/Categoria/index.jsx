import React, { useState } from 'react';
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
        <ul>
          {categories.map((category, indice) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${category}${indice}`}>
              {category.name}
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
