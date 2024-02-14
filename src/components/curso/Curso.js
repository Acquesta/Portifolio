import './Curso.css'

export default function Curso({nome, icone, link}){
    return(
        <>
            <a href={link}>
                <div className='curso'>
                    <div className='img' style={{backgroundImage: icone}}>
                        
                    </div>
                    <h3>{nome}</h3>
                </div>
            </a>
        </>
    )
}