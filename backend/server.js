const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Funções para ler e salvar o "banco"
const loadDB = () => {
  const data = fs.readFileSync('db.json', 'utf8');
  return JSON.parse(data);
};

const saveDB = (db) => {
  fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
};

// 👉 Rota de cadastro
app.post('/api/admin/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  const db = loadDB();

  const userExists = db.users.find((u) => u.email === email);

  if (userExists) {
    return res.status(400).json({ message: 'Usuário já existe.' });
  }

  const newUser = { email, password };
  db.users.push(newUser);
  saveDB(db);

  res.json({ message: 'Usuário cadastrado com sucesso!' });
});

// 👉 Rota de login
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;

  const db = loadDB();

  const user = db.users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    const token = 'fake-jwt-token-' + Date.now(); // ← Simula um token
    res.json({ message: 'Login bem-sucedido', token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas.' });
  }
});

// Servidor online
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
