import React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles/addPinPage.css'
import { usePlacesList, useUpdatePlaces } from "../placesContext.js";

export default function EditCard({ sensorId, positionState }) {


   const [sucess, setSucess] = useState(false)

  const refreshPlaces = useUpdatePlaces()

  const nameRef = useRef()
  const descRef = useRef()
  const imgRef = useRef()
  const [state,setState] = useState(false)
  const [positionPX, setStatePX] = useState({
    top: '0',
    left: '0'
  })
  const places = usePlacesList()
  const placeInfo = places.find((place) => place.id === sensorId);

 

 async function handleSubmit(e) {
     e.preventDefault();

    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const img = imgRef.current.files[0]; 
      
    const positionJSON = (positionPX.left === '0' || positionPX.top === '0')
    ? { top: placeInfo.position.top, left: placeInfo.position.left }
    : { left : `${positionPX.left}vw`,
        top : `${positionPX.top}vh`}
    
    const Finalimg = (!img)
    ? placeInfo.img
    : img
    
   

    const formData = new FormData();
    formData.append('id', sensorId);
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('position', JSON.stringify(positionJSON));
    formData.append('img', Finalimg);
    
    if (!name || !desc || !positionJSON) {
      return
    }
 
    
 
    await fetch('https://back-pure-space.vercel.app/update/places', {
        method: 'PATCH',
        body: formData
  })
  refreshPlaces()
  setSucess(true)
 }

    function handlePosition() {
     setState(true)
     
      document.body.style.cursor = 'crosshair';
    }

     useEffect(() => {
          
       if(!state)  {
      return  
     }
      else {
       //setState(false)
       setStatePX({ ...positionState });
       document.body.style.cursor = 'default'
      
      } // eslint-disable-next-line react-hooks/exhaustive-deps
     },[positionState])    
     
if (sucess) {
      return (
        <div className="sucess">
        <h1>Sensor atualizado com sucesso!</h1>
        <img className="svg1" src="assets/undraw_success_288d.svg" alt="" />
        <ul>
          <li><strong>Nome:</strong> "{placeInfo?.name ? (placeInfo.name.length > 20 ? placeInfo.desc.substring(0, 20) + "..." : placeInfo.name) : ""}"</li>
          <li><strong>ID do Sensor:</strong> {placeInfo.id}</li>
          <li><strong>Descrição:</strong> "{placeInfo?.desc ? (placeInfo.desc.length > 50 ? placeInfo.desc.substring(0, 50) + "..." : placeInfo.desc) : ""}"</li>
        </ul>
        <button>Guia de Instalação</button>
      </div>
      )
    }

    return (
      <div className="form-container">
    <h2>Atualizar Pin</h2>
    <form onSubmit={handleSubmit}>
      <label for="nome">Nome do Pin</label>
      <input type="text" ref={nameRef} id="nome" name="nome" placeholder="Ex:Pin de Localização" defaultValue={placeInfo.name} required />

      <label for="descricao">Descrição</label>
      <textarea id="descricao" ref={descRef} name="descricao" placeholder="Descreva seu pin..." defaultValue={placeInfo.desc} rows="2" required></textarea>

      <label for="imagem">Imagem Ilustrativa</label>
      <input type="file" ref={imgRef} id="imagem" name="imagem" accept=".svg,.png,.jpg,.jpeg" />

      <button type="button" onClick={handlePosition}>Atualizar posição do Pin</button>
      <p className="selectPlace-msg" style={{ display: state ? 'block' : 'none' }}>clique em algum lugar no mapa para posicionar</p>
      <button type="submit">Atualizar Pin</button>
    </form>
  </div>
    )
}