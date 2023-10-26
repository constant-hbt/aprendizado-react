import React from 'react';

import data from '../data';

const Exercicio2 = () => {
  const { produtos } = data;
  return (
    <section>
      {produtos
        .filter((p) => Number(p.preco.replace('R$ ', '') > 1500))
        .map((p) => (
          <div key={p.id}>
            <h1>{p.nome}</h1>
            <p>{p.preco}</p>
            <ul>
              {p.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: '#FFF' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default Exercicio2;
