import React from 'react';

import Titulo from './Titulo';
import data from '../data';
import Produto from './Produto';

function obterDadosLocalStorage() {
  return localStorage.getItem('produto');
}

const Index = () => {
  const produtos = data.urlExercicioUseState;

  const [dados, setDados] = React.useState(null);

  async function handleClick(url) {
    if (url !== '') {
      const response = await fetch(url);
      const dataProd = await response.json();
      if (dataProd) {
        setDados(dataProd);
      }
    }
  }

  React.useEffect(() => {
    const dadosSalvos = localStorage.getItem('produto');
    if (dadosSalvos) {
      setDados(JSON.parse(dadosSalvos));
    }
  }, []);

  React.useEffect(() => {
    if (dados) {
      localStorage.setItem('produto', JSON.stringify(dados));
    }
  }, [dados]);

  return (
    <>
      {dados && <Titulo titulo={dados.nome} />}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {produtos.map((p) => (
          <button key={p.id} onClick={() => handleClick(p.url)}>
            {p.nome}
          </button>
        ))}
      </div>
      {dados && <Produto dados={dados} />}
    </>
  );
};

export default Index;
