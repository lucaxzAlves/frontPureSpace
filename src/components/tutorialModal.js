


export default function TutorialModal({ open, fecharModal }) {
      if (!open) return null;
    return(
        <tutorialCard>
           <h1>Manual de pareamento</h1> <span className="closeTag" onClick={fecharModal}>X</span>
             <div>
              <h2>1. Pegue o ID do sensor</h2>
              <p>Ao criar o sensor no site, ele ganhou um código único (ID), mostrado no card lateral. Guarde-o — é a identidade do sensor.</p>
              <h2>2. Programe o envio de dados</h2>
              <p>No software do sensor, configure o envio para o endereço de recepção do site (use o botão abaixo para copiar).Sempre envie junto o ID e as medições (temperatura, umidade ou CO₂).</p>
              <h2>3. Confirmação automática</h2>
              <p>O site verifica o ID e os dados. Se estiver tudo certo, salva e associa ao seu sensor.</p>
              <h2>4. Acompanhe e ajuste</h2>
              <p>Veja as medições no site, em teampo real ou em gráficos, e altere configurações quando quiser.</p>
             </div>

           <button>Copiar endereço de recepção</button>
  
        </tutorialCard>
    )
}