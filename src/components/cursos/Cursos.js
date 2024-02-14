import './Cursos.css'
import Curso from '../curso/Curso'

export default function Cursos(){
    return(
        <div className='cursos' id='Cursos'>  
            <p className='titulo__cursos'>Cursos</p>
            <div className='itens'>
                <div className='coluna'>
                    <Curso
                        nome = 'Git e GitHub: compartilhando e colaborando em projetos'
                        icone = "url('/icon/git-github.png')"
                        link = 'https://cursos.alura.com.br/course/git-github-compartilhando-colaborando-projetos'
                    />
                    <Curso
                        nome = 'HTML e CSS: ambientes de desenvolvimento...'
                        icone = "url('/icon/html-css-ambiente-arquivos-tags.png')"
                        link = 'https://cursos.alura.com.br/course/html-css-ambiente-arquivos-tags'
                    />
                    <Curso
                        nome = 'HTML e CSS: cabeçalho, footer e variáveis CSS'
                        icone = "url('/icon/html-css-cabecalho-footer-variaveis-css.png')"
                        link = 'https://cursos.alura.com.br/course/html-css-cabecalho-footer-variaveis-css'
                    />
                    <Curso
                        nome = 'HTML e CSS: Classes, posicionamento e Flexbox'
                        icone = "url('/icon/html-css-classes-posicionamento-flexbox.png')"
                        link = 'https://cursos.alura.com.br/course/html-css-classes-posicionamento-flexbox'
                    />
                    <Curso
                        nome = 'HTML e CSS: praticando HTML/CSS'
                        icone = "url('/icon/html-css-praticando-html-css.png')"
                        link = 'https://cursos.alura.com.br/course/html-css-praticando-html-css'
                    />
                </div>
                <div className='coluna'>
                    <Curso
                        nome = 'HTML e CSS: responsividade com mobile-first'
                        icone = "url('/icon/html-css-responsividade-mobile-first.png')"
                        link = 'https://cursos.alura.com.br/course/html-css-responsividade-mobile-first'
                    />
                    <Curso
                        nome = 'HTML e CSS: trabalhando com responsividade...'
                        icone = "url('/icon/html-css-responsividade-publicacao-projetos.png')"
                        link = 'https://cursos.alura.com.br/course/html-css-responsividade-publicacao-projetos'
                    />
                    <Curso
                        nome = 'JavaScript na Web: armazenando dados...'
                        icone = "url('/icon/javascript-web-dados-navegador.png')"
                        link = 'https://cursos.alura.com.br/course/javascript-web-armazenando-dados-navegador'
                    />
                    <Curso
                        nome = 'JavaScript na Web: armazenando dados no navegador'
                        icone = "url('/icon/javascript-web-armazenando-dados-navegador.png')"
                        link = 'https://cursos.alura.com.br/course/javascript-web-dados-navegador'
                    />
                    <Curso
                        nome = 'JavaScript para Web: Crie páginas dinâmicas'
                        icone = "url('/icon/javascript-web-paginas-dinamicas.png')"
                        link = 'https://cursos.alura.com.br/course/javascript-web-paginas-dinamicas'
                    />
                </div>
                <div className='coluna'>
                    <Curso
                        nome = 'JavaScript: manipulando elementos no DOM'
                        icone = "url('/icon/javascript-manipulando-elementos-dom.png')"
                        link = 'https://cursos.alura.com.br/course/javascript-manipulando-elementos-dom'
                    />
                    <Curso
                        nome = 'JavaScript: manipulando o DOM'
                        icone = "url('/icon/javascript-manipulando-dom.png')"
                        link = 'https://cursos.alura.com.br/course/javascript-manipulando-dom'
                    />
                    <Curso
                        nome = 'JavaScript: validações e reconhecimento de voz'
                        icone = "url('/icon/javascript-validacoes-reconhecimento-voz.png')"
                        link = 'https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz'
                    />
                    <Curso
                        nome = 'React Native: autenticação com Firebase'
                        icone = "url('/icon/react-native-autenticacao-firebase.png')"
                        link = 'https://cursos.alura.com.br/course/react-native-autenticacao-firebase'
                    />

                </div>
            </div>
        </div>
    )
}