import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


export default function Chart({ id, dataKey, date }) {

 

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
    }]
  });

 const fetchData = async () => {
  try {
    const response = await fetch(`https://back-pure-space.vercel.app/api/medias${date}/${id}`);
    const dataMedia = await response.json();

  
    const dataArray = Array.isArray(dataMedia) ? dataMedia : [];

    if (dataArray.length === 0) {

      console.warn('API retornou vazio ou inválido:', dataMedia);
      setChartData({
        labels: ['Sem Dados'],
        datasets: [{ data: [null] }]
      });
      return;
    }
         if (dataArray.length === 0) {
          return 
         } else {
    const novasLabels = dataArray.map(d =>
      d.timestamp
        ? new Date(d.timestamp).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'short'
          }).replace(' de ', ' ')
        : 'Data inválida'
    ); 
    
    
    const novosDados = dataArray.map(d =>
      d[dataKey] !== undefined ? parseFloat(d[dataKey]) : null
    ); 

    setChartData({
      labels: novasLabels,
      datasets: [{ data: novosDados }]
    });
         }
  } catch (error) {
    console.error('Erro no fetch:', error);
    setChartData({
      labels: ['Erro'],
      datasets: [{ data: [null] }]
    });
  }
};
  useEffect(() => {
    fetchData(); 
    console.log("rodou o effect")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, date, dataKey]);

  

  return (
    <>
      <Line
        data={chartData}
        options={{
          responsive: true,
     maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                callback: function(context) {
                   if (dataKey.includes('ppm')) {
                  return context + 'ppm' }
                else if (dataKey.includes('hum')) {
                  return context + '%'
                } else if (dataKey.includes('temp')) {
                  return context + '°C'
                }
                }
              }
            },
            x: { display: true }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(context) {
                  if (dataKey.includes('ppm')) {
                  return context.raw + 'ppm' }
                else if (dataKey.includes('hum')) {
                  return context.raw + '%'
                } else if (dataKey.includes('temp')) {
                  return context.raw + '°C'
                }
                }
              }
            }
          }
        }}
      />
    </>
  );
}
