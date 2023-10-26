import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { produto } = React.useContext(GlobalContext);

  if (produto === null) return null;

  return (
    <ul>
      {produto.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
    </ul>
  );
};

export default Produto;
