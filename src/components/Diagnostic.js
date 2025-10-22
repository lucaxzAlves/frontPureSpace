import React, { useEffect, useState } from "react";

import { avaliacaoMesclada, avaliacao_Atual } from "../util/avaliacao";
import DiagnosticCard from "../styles/diagnosticStyle";

export default function Diagnostic({ id }) {

  const [state, setState] = useState({
    temp: null,
    hum: null,
    co2: null,
  })   
   
   useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://back-pure-space.vercel.app/api/atual/${id}`);
    const dataMedia = await response.json();

    const temp = dataMedia.map(d => parseFloat(d.temp));
    const hum = dataMedia.map(d => parseFloat(d.hum));
    const co2 = dataMedia.map(d => parseFloat(d.ppm));

    setState(prevState => ({
      ...prevState,
      temp: temp[0],
      hum: hum[0],
      co2: co2[0]
    }));
  };

  fetchData();
}, [id]);




   const avaliacaoTxt = avaliacaoMesclada(state.temp, state.hum, state.co2)

   const { avaliationTemp, avaliationHum, avaliation_c02 } = avaliacao_Atual(state.temp, state.hum, state.co2);

    return(<>
    
    <DiagnosticCard color={avaliacaoTxt.cor} className="avaliation-card" id="avaliation-card">
      <div className="titulo ">
        {avaliacaoTxt.titulo}
      </div>
  
      <p><strong>📍 Local:</strong> Academia no alto do ginásio, com boa ventilação natural.</p>
      <p className="italico explicacao">
        {avaliacaoTxt.explicacao}
      </p>
     <div className="causas">
      <div className="secao causa">
        <h3 className="avaliation-color">🚨 Possíveis Causas</h3>
        <ul>
          <li>{avaliacaoTxt.causas[0]}</li>
          <li>{avaliacaoTxt.causas[1]}</li>
          <li>{avaliacaoTxt.causas[2]}</li>
        </ul>
      </div>
      <div className="secao impacto">
        <h3 className="avaliation-color">⚠️ Impacto no Ambiente</h3>
        <ul>
          <li>{avaliacaoTxt.impacto[0]}</li>
          <li>{avaliacaoTxt.impacto[1]}</li>
          <li>{avaliacaoTxt.impacto[2]}</li>
        </ul>
      </div>
  
      <div className="secao solucoes">
        <h3 className="avaliation-color">🛠️ Sugestões de Ação</h3>
        <ul>
          <li>{avaliacaoTxt.solucoes[0]}</li>
          <li>{avaliacaoTxt.solucoes[1]}</li>
          <li>{avaliacaoTxt.solucoes[2]}</li>
        </ul>
      </div>
    </div>
      <div className="mensagem">
        {avaliacaoTxt.mensagem}
      </div>
      <div className="flex">
        <div>
      <h2 className="infos-temp">🌡️Temperatura atual: {state.temp}°C </h2> 
        <p className="avaliacao-temp-atual">avaliação: {avaliationTemp}</p> 
        </div>
         <div>
      <h2 className="infos-temp">🍃Qualidade do ar: {state.co2}ppm </h2> 
        <p className="avaliacao-temp-atual">avaliação: {avaliation_c02}</p> 
        </div>
        <div className="last-info">
        <h2 className="infos-hum">💧Umidade atual do ar: {state.hum}% </h2> 
        <p className="avaliacao-hum-atual">avaliação: {avaliationHum}</p>
        </div>
      </div>
    </DiagnosticCard>
    
    
    </>)
}