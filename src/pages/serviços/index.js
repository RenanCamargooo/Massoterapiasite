import React, { useState } from "react";
import './index.scss'; 

const Servicos = () => {
  const [servicos, setServicos] = useState([]);
  const [novoServico, setNovoServico] = useState({
    nome: "",
    preco: "",
    duracao: ""
  });
  const [editandoIndex, setEditandoIndex] = useState(null);

  const adicionarOuEditarServico = (e) => {
    e.preventDefault();

    if (!novoServico.nome || !novoServico.preco || !novoServico.duracao) return;

    if (editandoIndex !== null) {
      
      const atualizados = [...servicos];
      atualizados[editandoIndex] = novoServico;
      setServicos(atualizados);
      setEditandoIndex(null);
    } else {
      
      setServicos([...servicos, novoServico]);
    }

    setNovoServico({ nome: "", preco: "", duracao: "" });
  };

  const excluirServico = (index) => {
    setServicos(servicos.filter((_, i) => i !== index));
    
    if (editandoIndex === index) {
      setEditandoIndex(null);
      setNovoServico({ nome: "", preco: "", duracao: "" });
    }
  };

  const editarServico = (index) => {
    setNovoServico(servicos[index]);
    setEditandoIndex(index);
  };

  return (
    <div className="servicos-container">
      <h2>Controle de Serviços - Karen</h2>

      <form onSubmit={adicionarOuEditarServico}>
        <input
          type="text"
          placeholder="Nome do Serviço"
          value={novoServico.nome}
          onChange={(e) => setNovoServico({ ...novoServico, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Preço (R$)"
          value={novoServico.preco}
          onChange={(e) => setNovoServico({ ...novoServico, preco: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duração (ex: 1h)"
          value={novoServico.duracao}
          onChange={(e) => setNovoServico({ ...novoServico, duracao: e.target.value })}
        />
        <button type="submit">
          {editandoIndex !== null ? "Salvar Edição" : "Adicionar Serviço"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Preço</th>
            <th>Duração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico, index) => (
            <tr key={index}>
              <td>{servico.nome}</td>
              <td>R$ {parseFloat(servico.preco).toFixed(2)}</td>
              <td>{servico.duracao}</td>
              <td>
                <button onClick={() => editarServico(index)}>Editar</button>
                <button onClick={() => excluirServico(index)}>Excluir</button>
              </td>
            </tr>
          ))}
          {servicos.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>Nenhum serviço cadastrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Servicos;
