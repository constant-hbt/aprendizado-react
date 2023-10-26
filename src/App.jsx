import React from 'react';

import ExerciciosBasicos from './exercicios-basico/IndexExercicioBasico';
import ExercicioUseState from './exercicio-useState/Index';
import ExercicioUseEffect from './exercicio-useEffect/Index';
import ExercicioUseContext from './exercicio-useContext/Index';
import ExercicioUseFetch from './useFetch/Index';
import ExercicioInput from './exercicio-input/Index';
import ExercicioCheckBox from './exercicio-checkbox/Index';
import CompentesFormulario from './componentes-formulario/Index';
import ValidacaoCampoFormulario from './validacao-formulario/Index';
import UseFormUtilizacao from './validacao-formulario/useFormUtilizacao';
import DesafioFormulario from './desafio-formularios/Index';
import Control from './ControlExercise';
import ImportCss from './import-css/Index';
import CssModule from './css-modules/Index';
import StyledComponents from './styled-components/Index';
import CssFrameworks from './css-frameworks/Index';
import Animations from './animations/Index';
import Images from './images/Index';
import PropTypes from './prop-types/Index';
import ExemploMemo from './memo/Index';
import UseReduce from './useReduce/Index';
import UtilizandoClasse from './componentes-classes/Index';
const LazySuspense = React.lazy(() => import('./lazy-suspense/Index'));

const App = () => {
  return (
    <>
      <Control titulo={'Exercícios Básicos'}>
        <ExerciciosBasicos />
      </Control>
      <Control titulo={'Exercício UseState'}>
        <ExercicioUseState />
      </Control>
      <Control titulo={'Exercício Use Effect'}>
        <ExercicioUseEffect />
      </Control>
      <Control titulo={'Exercício Use Context'}>
        <ExercicioUseContext />
      </Control>
      <Control titulo={'Exercício Use Fetch - Custom Hook'}>
        <ExercicioUseFetch />
      </Control>
      <Control titulo={'Exercício Input'}>
        <ExercicioInput />
      </Control>
      <Control titulo={'Exercício Checkbox'}>
        <ExercicioCheckBox />
      </Control>
      <Control titulo={'Componentes de Formulário'}>
        <CompentesFormulario />
      </Control>
      <Control titulo={'Validação de campo de formulário'}>
        <ValidacaoCampoFormulario />
      </Control>
      <Control titulo={'Validação de campo com Hook UseForm'}>
        <UseFormUtilizacao />
      </Control>
      <Control titulo={'Desafio Formulário'}>
        <DesafioFormulario />
      </Control>
      <Control titulo={'Desafio Import CSS'}>
        <ImportCss />
      </Control>
      <Control titulo={'Desafio CSS Module'}>
        <CssModule />
      </Control>
      <Control titulo={'Desafio Styled Components'}>
        <StyledComponents />
      </Control>
      <Control titulo={'Desafio Css Frameworks'}>
        <CssFrameworks />
      </Control>
      <Control titulo={'Desafio Animações'}>
        <Animations />
      </Control>
      <Control titulo={'Desafio Imagens'}>
        <Images />
      </Control>
      <Control titulo={'Desafio PropTypes'}>
        <PropTypes width={300}>Clique aqui - prototypes</PropTypes>
      </Control>
      <Control titulo={'Desafio Lazy e Suspense'}>
        {/*Excelente quando precisa carregar algo muito grande e que não precisa carregar sempre*/}
        <React.Suspense fallback={<div>Carregando...</div>}>
          <LazySuspense />
        </React.Suspense>
      </Control>
      <Control titulo={'Exemplo Memo - Não é o useMemo'}>
        <ExemploMemo />
      </Control>
      <Control titulo={'Exemplo useReduce'}>
        <UseReduce />
      </Control>
      <Control titulo={'Exemplo utilizando componentes de classe'}>
        <UtilizandoClasse titulo="componente de classe" />
      </Control>
    </>
  );
};

export default App;
