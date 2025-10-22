import styled from 'styled-components';

const colorMap = {
  vermelho: { border: '#dc2626', txt: '#b91c1c', message: '#fecaca' },
  verde:    { border: '#51dc26ff', txt: '#26b91cff', message: '#cafed8ff' },
  amarelo:  { border: '#dcd926ff', txt: '#b9b91cff', message: '#fafecaff' },
  laranja:  { border: '#dc9626ff', txt: '#b9751cff', message: '#fef2caff' }
};

 
 

 const DiagnosticCard = styled.div `

 #avaliation-card {
    scroll-margin-top: 20vh;
   }
   
   
  width: 95%;
  max-width: 1100px;
  height: 130vh;
  color: whitesmoke;
  background-color: #1e1e27;
  backdrop-filter: blur(6px);
  border-left: 8px solid ${props => colorMap[props.color]?.border};
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin: 10vh 30vh;
  padding: 40px;
   
    

    .titulo {
      display: flex;
      align-items: center;
      font-size: 26px;
      font-weight: 800;
      color: ${props => colorMap[props.color]?.txt};
      margin-bottom: 20px;
    }

    .emoji {
      font-size: 40px;
      margin-right: 15px;
    }

     .causas {
      
      display: flex;
     }

    .secao {
      margin-left: 20px;
      margin-top: 20px;
    }

    .secao h3 {
      color: ${props => colorMap[props.color]?.txt};
      font-size: 20px;
      margin-bottom: 8px;
    }

    ul {
      padding-left: 20px;
      margin: 0;
    }

    ul li {
      margin-bottom: 6px;
      color: whitesmoke;
    }

    .mensagem {
      background-color:  ${props => colorMap[props.color]?.message};
      color: black;
      padding: 15px 20px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      margin-top: 30px;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
    }

    .avaliation-card p {
      color: white;
      line-height: 1.6;
    }

    .flex {
    margin: 20px 50px;
    display: flex;
    justify-content: space-between;
    }
    .flex h2 {
      font-size: 23px;
    }
    .flex p {
    font-size: 24px;
    }
  
    .flex div {
      margin-top: 8vh;
      padding: 0px 1vh;
    }
`

export default DiagnosticCard