import React, { useState } from 'react';
import './index.css';

import { Link } from 'react-router-dom';

function App() {
  const [section, setSection] = useState('');

  const sections = {
    massagistas: (
      <>
        <h2>Massagistas</h2>
        <p>Conheça nossos profissionais qualificados e suas especializações.</p>
      </>
    ),
    agendas: (
      <>
        <h2>Agendas</h2>
        <p>Veja os horários disponíveis e agende seu atendimento.</p>
      </>
    ),
    servicos: (
      <>
        <h2>Serviços</h2>
        <p>Oferecemos diversos tipos de massagem para seu bem-estar.</p>
      </>
    ),
    sobre: (
      <>
        <h2>Sobre Nós</h2>
        <p>Somos especialistas em massoterapia com anos de experiência cuidando do seu corpo e mente.</p>
      </>
    ),


  };

  return (
    <>
      <header>
        <div className="logo">
          MASSOTERAPIA <br /> <strong>KAREN</strong>
        </div>
        <div className="login">



          <ul>
            <li>
              <Link to='/login'>  </Link>
            </li>

          
          </ul>

          <nav className="seu-header">


            <a href="/login" className="login-link">
              <span className="login-icon">👤</span>
              Login admin
            </a>
          </nav>


        </div>
      </header>



      <nav>
        <button><Link to='/massagistas'> Ver massagistas </Link></button>
        <button><Link to='/agendas'> Agendas </Link></button>
        <button><Link to='/serviços'> Controle de serviços </Link></button>
        <button><Link to='/sobre'> Sobre a aplicação </Link></button>
      </nav>

      <div className="content">
        {section ? sections[section] : <p>Selecione uma das opções acima para navegar.</p>}
      </div>

      <footer>
        <img
          src="https://img.freepik.com/fotos-gratis/mulher-recebe-massagem-nas-costas-em-um-spa_23-2148941165.jpg?w=740&t=st=1701536725~exp=1701537325~hmac=81dc72adce9933c0c7197a0bbac582325a8a66126a5eacc71a5db72a9496517b"
          alt="massagem"
        />
        <div className="footer-text">
          <p>Plataforma de agendamentos e serviços.</p>
          <p>Para agendar, basta clicar no botão acima.</p>
        </div>
      </footer>


    </>
  );

}

export default App;
