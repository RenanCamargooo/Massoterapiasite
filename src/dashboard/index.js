import React from 'react';
import "./index.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/'); // ← Redireciona para a página principal
  };

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Painel do Administrador!</h1>

      <button onClick={handleGoToHome}>
        Ir para Página Principal
      </button>
    </div>
  );
};

export default Dashboard;
