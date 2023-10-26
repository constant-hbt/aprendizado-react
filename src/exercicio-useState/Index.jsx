import React from 'react';

import data from '../data';
import Produto from './Produto';

const Index = () => {
  const produtos = data.urlExercicioUseState;

  const [carregando, setCarregando] = React.useState(null);
  const [dadosProd, setDadosProd] = React.useState(null);

  async function handleClick(url) {
    setCarregando(true);
    const response = await fetch(url);
    const prodData = await response.json();
    setDadosProd(prodData);
    setCarregando(false);
  }

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {produtos.map((p) => (
          <button key={p.id} onClick={() => handleClick(p.url)}>
            {p.nome}
          </button>
        ))}
      </div>
      <div>
        {carregando && <p>Carregando...</p>}
        {!carregando && dadosProd && <Produto dados={dadosProd} />}
      </div>
    </section>
  );
};

export default Index;
