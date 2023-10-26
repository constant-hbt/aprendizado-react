import React from 'react';
import Exemplo from './Exemplo';

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error('Erro, action inválida!');
  }
}

const Index = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  // function aumentar() {
  //   setContar(contar + 1);
  // }

  // function diminuir() {
  //   setContar(contar - 1);
  // }

  return (
    <div>
      <button onClick={() => dispatch('aumentar')} style={{ margin: '10px' }}>
        Aumentar + 1
      </button>
      <button onClick={() => dispatch('diminuir')} style={{ margin: '10px' }}>
        Diminuir - 1
      </button>
      <button
        onClick={() => dispatch('valorErrado')}
        style={{ margin: '10px' }}
      >
        Produzir Erro
      </button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default Index;
