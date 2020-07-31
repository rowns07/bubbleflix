import { useState } from 'react';

export function useForm(formData) {
  const [values, setValues] = useState(formData);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(formData);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
