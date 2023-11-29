export default function Home() {
  return (
    <>
      <div className="hotbar">
        <div className="logoPortifolio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="63"
            viewBox="0 0 62 63"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1976 47.4894L23.7887 38.9913H38.5118L42.1029 47.4894H47.4894L33.8435 13.8511H29.1752L15.1702 47.4894H20.1976ZM31.3298 20.2246L25.9433 34.0341H36.7163L31.3298 20.2246Z"
              fill="#0B1FD6"
            />
            <path
              d="M3 3.32977H59V59.3298H31H21.766H3V3.32977Z"
              stroke="black"
              stroke-width="6"
            />
            <rect x="28" y="56" width="6" height="7" fill="white" />
            <rect x="28" width="6" height="7" fill="white" />
            <rect x="56" y="28" width="6" height="6" fill="white" />
            <rect y="29" width="7" height="6" fill="white" />
          </svg>
        </div>
        <div className="hotbar__itens">
            <div className="item__lista">Inicio</div>
            <div className="item__lista">Sobre Mim</div>
            <div className="item__lista">Projetos</div>
            <div className="item__lista">Contato</div>
        </div>
      </div>

      <div className="inicio">
        <div className="inicio__itens">
          <div className="item__title-principal"><p>Olá, Eu sou o Lorenzo <span className="span">Acquesta</span></p></div>
          <div className="item__subTitle"><p>Sou desenvolvedor de aplicativos mobile e web, 
também desenvolvo UI e UX para melhores experiências </p></div>
          <div className="item__button-Contato"><button id="contato">Contato</button></div>
        </div>
      </div>
    </>
  );
}
