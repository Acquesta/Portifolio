import './Projeto.css'

export default function Projeto({nome, descricao, imagem, invertido }){
    return(
        <>
            <div className={invertido == true ? 'projeto invertido' : 'projeto'}>
                <div className='imagem' style={{backgroundImage: imagem}}>
                           
                </div>
                <div className={invertido ? 'infos invertidos' : 'infos'}>
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                    <button>VISUALIZAR</button>
                </div>
            </div>
        </>
    )
}