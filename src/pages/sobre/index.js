import './index.scss';

export default function Sobre() {

    return (
        <div className='pagina-eventos pagina'>
           <header className='cabecalho'>
            <h1>  Sobre a aplicação </h1>
           </header>

           <section className='secao'> 
            <h1> detalhes </h1>

            <p> LOREMMMMMM </p>

            <input type='text' placeholder='Digite aqui' />

            <select> 
                <option> Selecione </option>
                <option> Serviço A </option>
                <option> Serviço B </option>
            </select>

            <div>

            <input type='checkbox' /> Opção 1 
             <input type='checkbox' /> Opção 2

             </div>
              <div>

              <input type='radio' /> Opção 1 
               <input type='radio' /> Opção 2

              </div>

              <button> Clique aqui </button>
              
           </section>

        </div>
    )
}