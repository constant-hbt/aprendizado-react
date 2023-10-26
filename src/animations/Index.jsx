import React from 'react';
import Produto from './Produto';
import Slide from './Slide';

import './Animations.css';

const Animations = () => {
  const [ativar, setAtivar] = React.useState(false);

  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>
        {!ativar ? 'Ativar' : 'Desativar'}
      </button>
      {ativar && <Produto />}
      <Slide slides={slides} />
    </div>
  );
};

export default Animations;
