import React, { useState } from 'react';

const ProdutoForm = () => {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/produtos', {
      method: 'POST',
      body: JSON.stringify(produto),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(() => {
        alert('Produto cadastrado com sucesso!');
        setProduto({ nome: '', preco: '', descricao: '' });
      })
      .catch(() => alert('Erro ao cadastrar produto'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>
      <input type="text" name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} />
      <input type="text" name="preco" placeholder="Preço" value={produto.preco} onChange={handleChange} />
      <textarea name="descricao" placeholder="Descrição" value={produto.descricao} onChange={handleChange}></textarea>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ProdutoForm;
