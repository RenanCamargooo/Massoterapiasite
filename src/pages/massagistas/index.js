import './index.scss';

export default function Massagistas() {
    function clicou() {
        alert('usuário clicou no clique aqui');

    }


    return (
        <div className='pagina-eventos pagina'>
           <header className='cabecalho'>
            <h1>  Massagistas  </h1>
           </header>

           <section className='secao'> 
            <h1> Escolha seu Massagista </h1>

            <p> LOREMMMMMM </p>

            <input type='text' placeholder='Digite aqui' />

            <select> 
                <option> Selecione </option>
                <option> Massagista A </option>
                <option> Massagista B </option>
            </select>

            <div>

            <input type='checkbox' /> Opção 1 
             <input type='checkbox' /> Opção 2

             </div>
              <div>

              <input type='radio' /> Opção 1 
               <input type='radio' /> Opção 2

              </div>

              <button onClick={clicou}> Clique aqui </button>
              
           </section>

        </div>
    )
}