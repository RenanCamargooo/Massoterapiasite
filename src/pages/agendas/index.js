import './index.scss';
import React, { useState, useEffect } from 'react';

const Agendas = () => {
  const [agendas, setAgendas] = useState([]);
  const [form, setForm] = useState({ id: null, titulo: '', data: '', horario: '', cliente: '' });
  const [editando, setEditando] = useState(false);

  // Simula dados vindo da API (você pode trocar por uma chamada com fetch/axios)
  useEffect(() => {
    const dadosIniciais = [
      { id: 1, titulo: 'Massagem', data: '2025-05-20', horario: '14:00', cliente: 'Renan Camargo' },
      { id: 2, titulo: 'Massagem', data: '2025-05-21', horario: '10:30', cliente: 'Caique Santos' },
    ];
    setAgendas(dadosIniciais);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      setAgendas(agendas.map((agenda) => (agenda.id === form.id ? form : agenda)));
      setEditando(false);
    } else {
      const novaAgenda = { ...form, id: Date.now() };
      setAgendas([...agendas, novaAgenda]);
    }
    setForm({ id: null, titulo: '', data: '', horario: '', cliente: '' });
  };

  const handleEditar = (agenda) => {
    setForm(agenda);
    setEditando(true);
  };

  const handleExcluir = (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir esta agenda?');
    if (confirm) {
      setAgendas(agendas.filter((agenda) => agenda.id !== id));
    }
  };

  return (
    <div className="agendas-container">
      <h1 className="text-2xl font-bold mb-4">Controle de Agendas - Karen</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg mb-6">
        <input type="text" name="titulo" value={form.titulo} onChange={handleInput} placeholder="Título" className="p-2 border rounded" required />
        <input type="text" name="cliente" value={form.cliente} onChange={handleInput} placeholder="Cliente" className="p-2 border rounded" required />
        <input type="date" name="data" value={form.data} onChange={handleInput} className="p-2 border rounded" required />
        <input type="time" name="horario" value={form.horario} onChange={handleInput} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded col-span-2 hover:bg-blue-600">
          {editando ? 'Atualizar Agenda' : 'Adicionar Agenda'}
        </button>
      </form>

      <table className="w-full table-auto border border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Título</th>
            <th className="border p-2">Cliente</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Horário</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>  
          {agendas.map((agenda) => (
            <tr key={agenda.id}>
              <td className="border p-2">{agenda.titulo}</td>
              <td className="border p-2">{agenda.cliente}</td>
              <td className="border p-2">{agenda.data}</td>
              <td className="border p-2">{agenda.horario}</td>
              <td className="border p-2 space-x-2">
                <button onClick={() => handleEditar(agenda)} className="edit-btn">Editar</button>
                <button onClick={() => handleExcluir(agenda.id)} className="delete-btn">Excluir</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agendas;
