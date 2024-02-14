"use client"

import Inicio from "@/components/inicio/Inicio";
import { SobreMim, teste } from "@/components/Sobre-mim/SobreMim";
import Projetos from "@/components/projetos/Projetos";
import Cursos from "@/components/cursos/Cursos";
import Contato from "@/components/contato/Contato";
import Rodape from "@/components/rodape/Rodape";
import { useRef } from "react";

export default function Home() {

  const refSobreMim = useRef(null)

  console.log(teste);
  
  // const toElement = (ref) => {
  //   window.scrollTo({top: ref.current?.offsetTop, bahavior: 'smooth'})
  // }

  return (
    <>
      <Inicio 
        // toElement = {toElement}
        ref = {refSobreMim}
      />
      <SobreMim
        
      />
      <Projetos
        
      />
      <Cursos
        
      />
      <Contato
        
      />
      <Rodape/>
    </>
  );
}
