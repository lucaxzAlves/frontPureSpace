import React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles/addPinPage.css'
import { usePlacesList, useUpdatePlaces } from "../placesContext.js";
import TutorialModal from "./tutorialModal.js";

export default function AddCard({ positionState }) {

  const [error, setError] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [modal, SetModal] = useState(false) 

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
  const place = places[places.length-1]

 async function handleSubmit(e) {
     e.preventDefault();

    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const img = imgRef.current.files[0]; 
      
    
    const lastId = Number(places[places.length-1].id)
    const id = lastId+1
    
   const positionJSON = {}

    positionJSON.left = `${positionPX.left}vw`
    positionJSON.top = `${positionPX.top}vh`
    
   

    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('position', JSON.stringify(positionJSON));
    formData.append('img', img);
    
    if (!name || !desc || !positionJSON || !img) {
      setError(true)
      return
    }
 
    
 
    await fetch('https://back-pure-space-g4cnbh202-lucas-projects-27aead0d.vercel.app/send/places', {
        method: 'POST',
        body: formData
  }) 
  setSucess(true)
  refreshPlaces()
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
       setState(false)
       setStatePX({ ...positionState });
       document.body.style.cursor = 'default'
      
      } 
     },[positionState, state])    
     
    if (sucess) {
      return (
        <div className="sucess">
        <h1>Sensor adicionado com sucesso!</h1>
        <img className="svg1" src="assets/undraw_success_288d.svg" alt="" />
        <ul>
          <li><strong>Nome:</strong> "{place.name}"</li>
          <li><strong>ID do Sensor:</strong> {place.id}</li>
          <li><strong>Descrição:</strong> "{place?.desc ? (place.desc.length > 50 ? place.desc.substring(0, 50) + "..." : place.desc) : ""}"</li>
        </ul>
        <button onClick={() => {SetModal(true)}}>Guia de Instalação</button>
        <TutorialModal open={modal} fecharModal={() => SetModal(false)} />
      </div>
      )
    }

    return (
      <div className="form-container">
    <h2>Adicionar Novo Pin</h2>
    <form onSubmit={handleSubmit}>
      <label for="nome">Nome do Pin</label>
      <input type="text" ref={nameRef} id="nome" name="nome" placeholder="Ex:Pin de Localização" required />

      <label for="descricao">Descrição</label>
      <textarea id="descricao" ref={descRef} name="descricao" placeholder="Descreva seu pin..." rows="2" required></textarea>

      <label for="imagem">Imagem Ilustrativa</label>
      <input type="file" ref={imgRef} id="imagem" name="imagem" accept=".svg,.png,.jpg,.jpeg" />

      <p className="error-msg" style={{ display: error ? 'block' : 'none' }}>Preencha todos os campos para continuar<span className="dot">.</span></p>

      <button type="button" onClick={handlePosition}>Escolha posição do Pin</button>
      <p className="selectPlace-msg" style={{ display: state ? 'block' : 'none' }}>clique em algum lugar no mapa para posicionar</p>
      <button type="submit">Salvar Pin</button>
      
    </form>
  </div>
    )
}