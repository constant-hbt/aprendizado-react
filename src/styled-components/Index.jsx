import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

function template(value, total) {
  console.log(value);
  console.log(total);
}

const total = 10;
template`Teste ${total} X`;

const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const Index = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>
        Compre aqui
      </Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu texto no parágrafo estilizado</Paragrafo>
          <Preco cor="#84e">R$2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu texto no parágrafo estilizado</Paragrafo>
          <Preco cor="#53d956">R$1000</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default Index;
