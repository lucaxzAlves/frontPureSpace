import React, { useEffect, useState } from "react";
import { avaliacao_Atual } from "../util/avaliacao";
import AddCard from "./AddPin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditCard from "./EditCard";
import { useUpdatePlaces } from '../placesContext.js';

export default function SideCard({ places, Id, position }) {
  const [data, setData] = useState(null);
  const [animateClass, setAnimateClass] = useState('animation');
  const [idState, setId] = useState(Id)  

  const refreshPlaces = useUpdatePlaces()

  useEffect(() => {
    if (Id || Id == '0') {
      const fetchSensorData = async () => {
        const response = await fetch(`https://back-pure-space-g4cnbh202-lucas-projects-27aead0d.vercel.app/api/atual/${Id}`);
        const data = await response.json();
        setData(data[0]);
      };

      fetchSensorData();

      
      setAnimateClass('');
      
      setTimeout(() => {
        setAnimateClass('animation');
      }, 10);  
    }
  }, [Id]);

  if (Id === null || Id === undefined) {
    return (
      <div className="control">
        <img className="svg1" src="assets/undraw_world_bdnk.svg" alt="" />
        <p>escolha algum ponto para começar.</p>
      </div>
    );
  }

  if(Id === '-2') {
    return (<AddCard positionState={position}/>)
  }

  if(idState === '-3') {
    return <EditCard sensorId={Id} positionState={position}/>
  }

  const placeInfo = places.find((place) => place.id === Id);


  if (!data || !placeInfo) {
    return <div className="control">
      <div className="btnRow-notfound">
         <div><FontAwesomeIcon className="infosBtn" onClick={() => {setId('-3')}} icon={faEdit} /></div>
         <div><FontAwesomeIcon className="infosBtn" onClick={handleDelete} icon={faTrash} /></div>
        </div>
        <img className="svg2" src="assets/undraw_questions_g2px.svg" alt="" />
        <p className="p2">Nenhuma informação encontrada.</p>
      </div>;
  }

  const { avaliationTemp, avaliationHum, avaliation_c02 } = avaliacao_Atual(data.temp, data.hum, data.ppm);
 
  async function handleDelete() {
 
  await fetch(`https://back-pure-space-g4cnbh202-lucas-projects-27aead0d.vercel.app/delete/places/${Id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('Item deletado com sucesso!');
      refreshPlaces() 
         
    } else {
      console.error('Erro ao deletar o item');
    }
  })
  .catch(error => {
    console.error('Erro de rede:', error);
  });
  setId(null)
  }


  return (
    <>
       <div className={`infos ${animateClass}`}>
        <div className="btnRow">
         <div><FontAwesomeIcon className="infosBtn" onClick={() => {setId('-3')}} icon={faEdit} /></div>
         <div><FontAwesomeIcon className="infosBtn" onClick={handleDelete} icon={faTrash} /></div>
        </div>
  <img src={placeInfo.img || ''} alt="" />
        <h1>{placeInfo.name}</h1>
        <h2 className="infos-temp">Temperatura atual: {data.temp}°C 🌡️</h2>
        <p className="avaliacao-temp-atual">avaliação: {avaliationTemp}</p>
        <h2 className="infos-hum">Umidade atual do ar: {data.hum}% 💧</h2>
        <p className="avaliacao-hum-atual">avaliação: {avaliationHum}</p>
        <h2 className="infos-hum">Qualidade do ar: {avaliation_c02}🍃</h2>
        <button className="moreInfos"onClick={() => document.getElementById('avaliation-card').scrollIntoView({ behavior: 'smooth' })}>Informações mais detalhadas</button>
      </div>
    </>
  );
}
