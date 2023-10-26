import React from 'react';
import useForm from './useForm';
import Input from './Input';

const UseFormUtilizacao = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nomeValidacao = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cepVa">Cep</label>
      <Input id="cepVa" type="text" {...cep} placeholder="00000-000" />
      <label htmlFor="emailVa">Cep</label>
      <Input
        id="emailVa"
        type="email"
        {...email}
        placeholder="teste@teste.com"
      />
      <label htmlFor="nomeValidacao">Nome</label>
      <Input id="nomeValidacao" type="text" />
      <button>Enviar</button>
    </form>
  );
};

export default UseFormUtilizacao;
