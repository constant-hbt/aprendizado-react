import React from 'react';

class Produtos extends React.Component {
  constructor() {
    super();
    this.state = {
      teste: 'teste',
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Componente montado');
  }

  componentDidUpdate() {
    console.log('Componente atualizou');
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    console.log('Componente será removido');
  }

  handleClick() {
    this.setState((stateAnterior) => ({
      ...stateAnterior,
      contar: stateAnterior.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        {this.props.titulo} : {this.state.teste}
        <div>
          <button onClick={this.handleClick}>Adicionar</button>
        </div>
        <div>{this.state.contar}</div>
      </div>
    );
  }
}

export default Produtos;
