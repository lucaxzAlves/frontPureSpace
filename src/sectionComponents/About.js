import React from "react";

import '../styles/about.css'

export default function About() {
    return(
        <>
        
        <div  className="background" id="sobre" >
    
    <div>
    <h1>Sobre o projeto.</h1>
    <p className="texto">Este Trabalho de Conclusão de Curso (TCC), desenvolvido no curso técnico de Mecatrônica, tem como objetivo criar um sistema de monitoramento de umidade e temperatura utilizando o sensor DHT11 integrado a uma placa Arduino com shield Wi-Fi. A ideia do projeto surgiu da necessidade de monitorar condições ambientais em tempo real, especialmente em locais onde o controle do clima é essencial, como estufas, residências ou ambientes escolares. O sensor DHT11 realiza a leitura das variáveis ambientais, enquanto o Arduino processa os dados e os envia via Wi-Fi para uma plataforma online, permitindo o acompanhamento remoto. Este projeto aplica conceitos fundamentais da Mecatrônica, como eletrônica, sensores, automação e programação, e demonstra como tecnologias acessíveis podem ser usadas para desenvolver soluções inteligentes no contexto da Internet das Coisas (IoT).</p>
    </div>
    
    <img class="svgsobre" src="assets/undraw_personal-information_gbtc.svg" alt=""/>
</div>

     
     <footer>
      <p>© 2025 - PureSpace - Projeto de TCC em Mecatrônica</p>
      <p>Desenvolvido por: Lucas A. Moreira, João P. Carvalho, Lucas J. dos Santos e Renan T. Yoshida</p>
      <p>IFSP Campus Avaré | Contato: PureSpaceTCC@gmail.com</p>
    </footer>

        
        
        </>
    )
}