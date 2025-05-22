import App from './pages/app/index.js';
import Login from './pages/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NaoEncontrado from './pages/naoEncontrado';
import Massagistas from './pages/massagistas';
import Agendas from './pages/agendas';
import Servico from './pages/serviços';
import Sobre from './pages/sobre';
import Dashboard from './dashboard';


export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element= {  <App />}  />
              <Route path='/login' element = {< Login />} />
              <Route path='*' element={<NaoEncontrado />} />
              <Route path="/" element={<Login />} />
              <Route path='/massagistas' element={<Massagistas />} />
              <Route path='/agendas' element={<Agendas />} />
              <Route path='/serviços' element={<Servico />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path="/dashboard" element={<Dashboard />} />

              </Routes>
        </BrowserRouter>
    )
}