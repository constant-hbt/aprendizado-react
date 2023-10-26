import React from 'react';

import data from '../data';
import Radio from './Radio';

const Index = () => {
  const perguntas = data.perguntas;

  const initialStateRespostasForm = {
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  };

  const [respostas, setRespostas] = React.useState(initialStateRespostasForm);

  const [slide, setSlide] = React.useState(0);

  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function calcularResultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    setSlide(slide + 1);
    if (slide >= perguntas.length - 1) calcularResultado();
  }

  function resetarForm() {
    setSlide(0);
    setResultado(null);
    setRespostas(initialStateRespostasForm);
  }

  return (
    <form onSubmit={(evento) => evento.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          {...pergunta}
          key={pergunta.id}
          onChange={handleChange}
          value={respostas[pergunta.id]}
        />
      ))}
      {resultado ? (
        <>
          <p>{resultado}</p>
          <button onClick={resetarForm}>Reiniciar</button>
        </>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default Index;
