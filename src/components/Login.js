import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === 'admin') {
      onLogin(true);
    } else {
      setErro('Usuário ou senha incorretos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Entrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </form>
  );
};

export default Login;
