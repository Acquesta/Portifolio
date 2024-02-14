import './Contato.css'

export default function Contato(){
    return(
        <div className='contato' id='Contato'>
            <h2 className='title'>Contato</h2>
            <p className='title__subtitulo'>Envie um email pra mim, por aqui ou por lorenzzo.acquesta@gmail.com</p>
            <div className='inputs'>
                <input type='text' placeholder='Insira seu nome' ></input>
                <input type='email' placeholder='Insira seu e-mail'></input>
                <input type='text' placeholder='Assunto'></input>
                <input type='text' placeholder='Descrição' className='descricao'></input>
                <button className='enviar'>ENVIAR</button>
            </div> 
        </div>
    )
}