import React, { useState } from 'react';
import ProdutoForm from './components/ProdutoForm';
import ProdutoLista from './components/ProdutoLista';
import Login from './components/Login';

function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [tela, setTela] = useState('formulario');

  if (!autenticado) {
    return <Login onLogin={setAutenticado} />;
  }

  return (
    <div className="App">
      <h1>Minha SPA com React</h1>
      <button onClick={() => setTela('formulario')}>Cadastrar Produto</button>
      <button onClick={() => setTela('lista')}>Visualizar Produtos</button>

      {tela === 'formulario' ? <ProdutoForm /> : <ProdutoLista />}
    </div>
  );
}

export default App;
