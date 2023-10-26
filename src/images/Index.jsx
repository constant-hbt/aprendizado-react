import React from 'react';
import foto from '../../public/imgs/cpu.jpg';
import Genetico from '../../public/imgs/genectic.svg?react';
import './Images.css';
import DogSvg from './DogSvg';

const Index = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSvg />
      <img style={{ width: '100%' }} src={foto} alt="CPU" />
      <Genetico />
      <DogSvg color="#84e" />
    </div>
  );
};

export default Index;
