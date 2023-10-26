import React from 'react';

import data from '../data';
import Titulo from './TituloExercicio3';
import Produto from './ProdutoExercicio3';

const Produtos = () => {
  const produtos = data.produtosPaginas;

  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
