import App from './pages/app/index';
import Login from './pages/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NaoEncontrado from './pages/naoEncontrado';
import Massagistas from './pages/massagistas';
import Agendas from './pages/agendas';
import Servico from './pages/serviços';
import Sobre from './pages/sobre';


export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element= {  <App />}  />
              <Route path='/login' element = {< Login />} />
              <Route path='*' element={<NaoEncontrado />} />

              <Route path='/massagistas' element={<Massagistas />} />
              <Route path='/agendas' element={<Agendas />} />
              <Route path='/serviços' element={<Servico />} />
              <Route path='/sobre' element={<Sobre />} />

              </Routes>
        </BrowserRouter>
    )
}