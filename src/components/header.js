import React from "react";

import '../styles/header.css'

export default function Header() {
    return (
        <header id="header">
        <img className="logo" src="assets/WhatsApp Image 2025-04-28 at 8.53.09 PM (1).png" alt=""/>
       <div className="links">
        <a href="#inicial">Inicial</a>
        <a href="#mapa">Mapa</a>
        <a href="#ifos">Gráficos</a>
        <a href="#sobre">Sobre</a>
       </div>
      </header>
    )
}