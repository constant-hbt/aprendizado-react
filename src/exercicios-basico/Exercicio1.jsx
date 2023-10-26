import React, { useState } from 'react';

import data from '../data';

const Exercicio1 = () => {
  const { luana, mario } = data;
  const [dados, setDados] = useState(luana);

  const calculaTotal = () =>
    dados.compras
      .map((c) => Number(c.preco.replace('R$ ', '')))
      .reduce((a, b) => a + b);

  let total = calculaTotal();

  const trocar = (_) => {
    let info = dados.id == 1 ? mario : luana;
    setDados(info);
    calculaTotal();
  };

  return (
    <section>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
      <button onClick={trocar}>Trocar</button>
    </section>
  );
};

export default Exercicio1;
