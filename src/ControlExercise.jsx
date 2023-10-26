import React from 'react';

const ControlExercise = ({ children, titulo }) => {
  const [visualizar, setVisualizar] = React.useState(false);

  return (
    <div style={{ margin: '1rem auto', borderBottom: '5px solid' }}>
      <h2>{titulo}</h2>
      <div style={{ display: visualizar ? 'block' : 'none' }}>{children}</div>
      <div style={{ padding: '1rem 0px' }}>
        <button
          style={{ fontWeight: 'bold' }}
          onClick={() => setVisualizar((v) => !v)}
        >
          {visualizar ? 'Fechar' : 'Visualizar'}
        </button>
      </div>
    </div>
  );
};

export default ControlExercise;
