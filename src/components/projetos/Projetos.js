import './Projetos.css'
import Projeto from '../projeto/Projeto'

export default function Projetos(){
    return (
        <div className='projetos' id='Projetos'>
            <div className='titulo'>
                <p className='title__titulo'>Projetos</p>
                <p className='title__subtitulo'>Nesses projetos usei meus conhecimentos para desenvolver possiveis soluções para problemas</p>
            </div>
            <div className='projetoInfo'>
                
                    <Projeto
                        nome =  'GESTECH'
                        descricao = 'Um aplicativo para ajudar os pequenos empreendedores a se organizarem melhor'
                        imagem = 'url("/icon/logo.png")'
                    />
                    <Projeto
                        nome =  'SOBRE FILMES'
                        descricao = 'Um aplicativo sobre filmes, sérires e atores, com informações e tela para cada um.'
                        imagem = 'url("/appFilmes.png")'
                        invertido = {true}
                    />
                    <Projeto
                        nome = 'Organo'
                        descricao = 'Um site para gerenciar suas equipes no trabalho'
                        imagem = 'url("/organo.png")'
                    />
                                
            </div>
        </div>
    )
}

