import React, { useEffect, useState } from 'react';

const ProdutoLista = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/produtos')
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch(() => alert('Erro ao carregar produtos'));
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((p) => (
            <li key={p.id}>
              <strong>{p.nome}</strong> - R${p.preco}
              <br />
              <em>{p.descricao}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProdutoLista;
