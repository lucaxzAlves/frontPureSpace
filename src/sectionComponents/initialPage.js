import React from "react";

import '../styles/initial.css'

export default function InitialPage() {
    return (
        
      <section id="inicial" className="inicial">
    
    <div className="cardfoto">
        <img className="fotoifsp" alt="" src="/assets/capa.jpeg"/>
        <img className="logoInicial fade-in logohover" alt="" src="/assets/logo.png"/>
    </div>

    <div className="conteudoInicial">
        <div className="fundo slide-rightF textcapa">
        <div className="textcapa slide-right ">
          <h1>Monitoramento Inteligente de Temperatura e Umidade</h1>
          <p>Um sistema simples, eficiente e conectado à Internet.</p>
        </div>
       </div>
      </div>
</section>

    )
}

