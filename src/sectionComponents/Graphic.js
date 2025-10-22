import React from "react";
import { useState } from "react";
import { usePlacesList } from "../placesContext";
import '../styles/graphic.css'
import Chart from "../components/Chart";
import Assessment from "../components/Assessment";
import Diagnostic from "../components/Diagnostic";

export default function Graphic() {
 
   const [state, setState] = useState('0')
   const [currentIndex, setIndex] = useState(0)
   const places = usePlacesList()

   const place = places[currentIndex]
      
  

    return(<>


    <div className="grafalign" id="ifos">
 <div className="abas">
    
        <div
          className="arrows arrow-left"
          onClick={() => {
            const newIndex =
              currentIndex > 0 ? currentIndex - 1 : places.length - 1;
            setIndex(newIndex);
            setState(places[newIndex]?.id || null);
          }}
        />

        <h1 key={state}>{place ? place.name : null}</h1>

        
        <div
          className="arrows arrow-right"
          onClick={() => {
            const newIndex =
              currentIndex < places.length - 1 ? currentIndex + 1 : 0;
            setIndex(newIndex);
            setState(places[newIndex]?.id || null);
          }}
        />
      </div>



  <div className="container">
   
    <div className="linha-graficos firtsGrafic">
   <div className="card">
  <h2>Temperatura - Última Semana</h2>
  <p className="data-info">Dados diários - 7 entradas</p>
  <div className="graphic">
    <Chart id={state} dataKey="mediatemp" date='week' />
  </div>
</div>
 

  <div className="card">
    <h2>Temperatura - Último Mês</h2>
    <p className="data-info">Dados diários - 30 entradas</p>
    <div className="graphic">
      <Chart id={state} dataKey="mediatempdiaria" date='month' />
    </div>
  </div>
</div>
    <div className="avaliacoes">
    <Assessment id={state} dataKey={'mediatemp'} date={'week'}/>
    <Assessment id={state} dataKey={'mediatempdiaria'} date={'month'}/>
    </div>
    <div className="linha-graficos">
      <div className="card">
        <h2>Umidade - Última Semana</h2>
        <p className="data-info">Dados diários - 7 entradas</p>
        <div className="graphic">
          <Chart id={state} dataKey="mediahum" date='week' />
        </div>
      </div>


      <div className="card">
        <h2>Umidade - Último Mes</h2>
        <p className="data-info">Dados diários - 30 entradas</p>
        <div className="graphic">
          <Chart id={state} dataKey="mediahumdiaria" date='month' />
        </div>
      </div>
    </div>
   <div className="avaliacoes">
    <Assessment id={state} dataKey={'mediahum'} date={'week'}/>
    <Assessment id={state} dataKey={'mediahumdiaria'} date={'month'}/> 
 </div>
    <div className="linha-graficos">
      <div className="card">
        <h2>Qualidade do Ar - Última Semana</h2>
        <p className="data-info">Dados diários - 7 entradas</p>
         <div className="graphic">
          <Chart id={state} dataKey="mediappm" date='week' />
        </div>
      </div>


      <div className="card">
        <h2>Qualidade do Ar - Última Semana</h2>
        <p className="data-info">Dados diários - 30 entradas</p>
         <div className="graphic">
          <Chart id={state} dataKey="mediappmdiaria" date='month' />
        </div>
      </div>
    </div>
   <div className="avaliacoes">
   <Assessment id={state} dataKey={'mediappm'} date={'week'}/> 
   <Assessment id={state} dataKey={'mediappmdiaria'} date={'month'}/>
    </div>
      <Diagnostic id={state}/>



  </div>
  </div>
 
    </>)
}