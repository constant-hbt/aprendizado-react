import React from 'react';

import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const Index = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default Index;
