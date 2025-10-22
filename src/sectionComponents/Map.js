import React from "react";
import { useState, useEffect } from "react";
import { usePlacesList } from "../placesContext.js";

import '../styles/Map.css'
import SideCard from "../components/sideCard.js";
import Pinpoint from '../styles/pins.js'


export default function Map() {
  
  const places = usePlacesList()
  
   const [state, setState] = useState(null)
   const [positionState,setPosition] = useState({
       left: 0,
       top: 0
     })
  
  function getPosition(e) {
    
     const xPx = e.clientX; 
  const yPx = e.clientY; 

  const xVw = ((xPx / window.innerWidth) * 100) -6; 
  const yVh = ((yPx / window.innerHeight) * 100) -20; 


  
  setPosition({ top: yVh, left: xVw });
      
    }
   

  return(
  <>
   <section id="mapa">
   <div className="mapSection">
      <div className="map">
        <img src="assets/mapasempontos.png" onClick={getPosition} class="map" alt=""/>

        <h1 className="addButton" onClick={() => {setState('-2')}}>+</h1>
         
         {places.map((place) => (
            <Pinpoint top={place.position.top} left={place.position.left} key={place.id} className= 'pinpoint' onClick={() => {setState(place.id)}} >
              <h1>{place.name}</h1>
              <img src="assets/pin verde.png"  alt=""/>
            </Pinpoint>



         ))
         
         } 
         
         
      </div>
     


      <SideCard key={state} places={places} Id={state} position={positionState}/>
      

    </div>
    </section>
  
  </>
  
  )


}