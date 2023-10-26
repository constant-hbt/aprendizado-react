import React from 'react';

import Exercicio1 from './exercicio1';
import Exercicio2 from './Exercicio2';
import Header from './HeaderExercicio3';
import Produtos from './ProdutosExercicio3';
import Home from './HomeExercicio3';

const IndexExercicioBasico = () => {
  const { pathname } = window.location;
  let Component = pathname === '/produtos' ? Produtos : Home;

  return (
    <>
      <Exercicio1 />
      <Exercicio2 />
      <hr />
      <Header />
      <Component />
    </>
  );
};

export default IndexExercicioBasico;
