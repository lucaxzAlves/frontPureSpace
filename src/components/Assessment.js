import React, { useEffect, useState } from "react";
import { amplitude, exedente, exedenteHum, tendencias } from "../util/avaliacao";


export default function Assessment({ id, dataKey, date }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://back-pure-space-g4cnbh202-lucas-projects-27aead0d.vercel.app/api/medias${date}/${id}?timestamp=${Date.now()}`);
      const dataMedia = await response.json();

      const data = dataMedia.map(d => parseFloat(d[dataKey]));
      setDatas(data);
    };

    fetchData();

    
  }, [id, dataKey, date]);

  if (datas.length === 0) {
  return <div className="avaliacao perigo">Dados não foram encontrados...</div>;
}
 

  const amplitudeValue = amplitude(datas);
  const exedenteValue = (dataKey === 'mediatempdiaria' || dataKey === 'mediatemp') 
    ? exedente(datas)
    : exedenteHum(datas);
  const tendenciaValue = tendencias(datas);

 let colorStyle = 'avaliacao ok'

  if(exedenteValue < 6) {
    colorStyle = 'avaliacao ok'
  }

 else if (exedenteValue >= 6 || exedenteValue < 15) {
   colorStyle = 'avaliacao atencao'
  }  else if (exedenteValue >= 15 )
   colorStyle = 'avaliacao perigo'
  return (
    
      <div className={`${colorStyle}`}>
        Amplitude: {amplitudeValue}°C<br />
        Porcentagem de dados fora do padrão: {exedenteValue}%<br />
        Tendência: {tendenciaValue}
      </div>
  
  );
}
