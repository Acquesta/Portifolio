import './Rodape.css'

export default function Rodape(){
    return(
        <div className='Rodape'>
            <div className='redes'>
                <p className='redesSocias'>Redes Sociais</p>
                <a href='#'>Email: lorezzno.acquesta@gmail.com</a>
                <a href='#'>Instagram: lorenzoacquesta_</a>
                <a href='#'>Linkedin: linkedin.com/in/lorenzo-acquesta</a>
            </div>
            <div className='curriculo'>
                <div className='logo'>

                </div>
                <div className='download'>
                    <p className='download__title'>Currículo</p>
                    <a href='#' className='download__link'>Clique para abrir o currículo</a>
                </div>
            </div>
        </div>
    )
}