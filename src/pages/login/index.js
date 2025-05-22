import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Importa o hook de navegação
import './index.scss';

const Login = () => {
  const navigate = useNavigate(); // ← Hook para navegação

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login bem-sucedido!');
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); 
      } else {
        alert(data.message || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro no servidor');
    }
  };

  
  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Cadastro realizado com sucesso!');
      } else {
        alert(data.message || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro no servidor');
    }
  };

  return (
    <div className="login-container">
      <h2>Login do Administrador</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};

export default Login;
