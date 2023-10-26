import React from 'react';
import Header from './Header';

const Index = () => {
  const [contar, setCountar] = React.useState(0);

  return (
    <div>
      <Header />
      Contagem: {contar}
      <div>
        <button
          onClick={() => setCountar(contar + 1)}
          style={{ padding: '10px', margin: '10px' }}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Index;
