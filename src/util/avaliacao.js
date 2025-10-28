
let avaliação = ""; 
let avaliação_umid = ""; 
let avaliacao_c02


export function avaliacao_Atual(temp, umidade, ppm) {

 if (temp < 15) {
  avaliação = "muito frio";
} else if (temp >= 15 && temp < 20) {
  avaliação = "frio";
} else if (temp >= 20 && temp < 24) {
  avaliação = "confortável";
} else if (temp >= 24 && temp < 27) {
  avaliação = "normal";
} else if (temp >= 27 && temp <= 35) {
  avaliação = "quente";
} else if (temp >= 35 && temp < 40) {
  avaliação = "muito quente";
} else if (temp >= 40) {
  avaliação = "insalubre";
} else {
  avaliação = "sem valor";
}


// avaliação umidade
if (umidade < 20) {
    avaliação_umid = "muito seco";
  } else if (umidade >= 20 && umidade < 30) {
    avaliação_umid = "seco";
  } else if (umidade >= 30 && umidade < 50) {
    avaliação_umid = "confortável";
  } else if (umidade >= 50 && umidade < 60) {
    avaliação_umid = "um pouco umido";
  } else if (umidade >= 60 && umidade <= 70) {
    avaliação_umid = "umido";
  } else if (umidade >= 70 && umidade < 80) {
    avaliação_umid = "muito umido";
  } else if (umidade >= 80) {
    avaliação_umid = "bastante umido";
  } else {
    avaliação_umid = "sem valor";
  }
  if(ppm<600) {
    avaliacao_c02 = 'limpo'
  } else if(ppm >= 600 && ppm < 1000) {
    avaliacao_c02 = 'razoável'
  } else if(ppm >= 1000 && ppm < 2000) {
    avaliacao_c02 = 'viciado'
  } else if(ppm >= 2000) {
    avaliacao_c02 = 'ambiente perigoso'
  } 
 return {
  avaliationTemp: avaliação,  
  avaliationHum: avaliação_umid,
  avaliation_c02: avaliacao_c02
};


}
 



// funções para fazer avaliação dos gráficos 



//amplitude
export function amplitude(values) {

const menorValor = Math.min(...values)
const maiorValor = Math.max(...values)

return (maiorValor-menorValor).toFixed(2)
}

//valores exedentes ou picos




export function exedente(values) {
  let e = 0;
  

  for (let i=0;i<values.length;i++) {
   if (values[i]<=15) {
    e++;
   } else if (values[i]>=35) {
    e++
   }
  }

 return ((e/values.length)*100).toFixed(1)


}

export function exedenteHum(values) {
  let e = 0;
  

  for (let i=0;i<values.length;i++) {
   if (values[i]<=20) {
    e++;
   } else if (values[i]>=70) {
    e++
   }
  }

 return ((e/values.length)*100).toFixed(1)


}


 // tendencia do gráfico
 


export function tendencias(values) {
  const diferença = values[values.length - 1] - values[0];

  if (diferença > 5) {
    return 'aumento';
  } else if (diferença < -5) {
    return 'baixa';
  } else {
    return 'estabilizado';
  }
}



  
  //avaliaçãoes mescladas

export function avaliacaoMesclada(temp, hum, co2) {

let t = ''
let h = ''
let c = ''

 if (temp>29) {
  t = 1
 } else if (temp<18) {
  t = 0
 } else {
  t = 5
 }
 
  if (hum>65) {
  h = 1
 } else if (hum<40) {
  h = 0
 } else {
  h = 5
 }

 if (co2>=1500) {
  c = 1
 } else if (co2<=500) { 
  c = 0
 } else {
  c = 5
 }

 const combinacao = `${t}${h}${c}`;


 switch (combinacao) {
   default:
  return {
    titulo: "❄️ Frio seco e bem ventilado",
    explicacao: "Ambiente frio, seco e com boa ventilação. Desconfortável por longos períodos, mas não crítico.",
    causas: [
      "Clima externo frio e seco",
      "Ventilação contínua",
      "Pouco fluxo de pessoas"
    ],
    impacto: [
      "Ressecamento das vias respiratórias",
      "Rigidez muscular",
      "Desconforto térmico"
    ],
    solucoes: [
      "Alongamento pré-treino",
      "Uso de roupas térmicas leves",
      "Umidificação do ambiente se necessário"
    ],
    mensagem: "⚠️ Frio e seco. Aqueça-se e hidrate-se bem.",
    cor: "amarelo"
  };
    case '000':
  return {
    titulo: "❄️ Frio seco e bem ventilado",
    explicacao: "Ambiente frio, seco e com boa ventilação. Desconfortável por longos períodos, mas não crítico.",
    causas: [
      "Clima externo frio e seco",
      "Ventilação contínua",
      "Pouco fluxo de pessoas"
    ],
    impacto: [
      "Ressecamento das vias respiratórias",
      "Rigidez muscular",
      "Desconforto térmico"
    ],
    solucoes: [
      "Alongamento pré-treino",
      "Uso de roupas térmicas leves",
      "Umidificação do ambiente se necessário"
    ],
    mensagem: "⚠️ Frio e seco. Aqueça-se e hidrate-se bem.",
    cor: "amarelo"
  };
  case '111':
  return {
    titulo: "🔴 Ambiente saturado! Ar quente, úmido e mal ventilado.",
    explicacao: "Apesar da ventilação natural da academia, os níveis estão muito altos. Provável excesso de pessoas e treino intenso sem renovação de ar efetiva.",
    causas: [
      "Excesso de alunos treinando ao mesmo tempo",
      "Zonas de ar parado mesmo com janelas abertas",
      "Acúmulo de umidade do suor e calor corporal"
    ],
    impacto: [
      "Estresse térmico",
      "Queda de performance física",
      "Desconforto respiratório"
    ],
    solucoes: [
      "Ligar ventiladores estratégicos para circular o ar",
      "Intercalar treinos com pausas para ventilação",
      "Limpeza frequente do ambiente para reduzir umidade acumulada"
    ],
    mensagem: "🔴 Ar saturado e úmido demais. Ventile e reduza a intensidade do ambiente.",
    cor: "vermelho"
  };
case '001':
  return {
    titulo: "❄️ Frio seco e mal ventilado",
    explicacao: "A temperatura e umidade estão baixas e há pouca renovação do ar. Pode causar desconforto respiratório e cansaço.",
    causas: [
      "Portas e janelas fechadas",
      "Pouca circulação de pessoas",
      "Ambiente isolado"
    ],
    impacto: [
      "Ar parado",
      "Baixa oxigenação",
      "Risco de dores de cabeça e sonolência"
    ],
    solucoes: [
      "Ventilar o espaço com janelas ou exaustores",
      "Fazer pausas ao ar livre",
      "Reavaliar distribuição dos equipamentos"
    ],
    mensagem: "⚠️ Ar frio e parado. Reative a circulação.",
    cor: "laranja"
  };
case '005':
  return {
    titulo: "❄️ Frio seco com ventilação parcial",
    explicacao: "Temperatura baixa e ar seco, com leve circulação. Situação tolerável por curtos períodos.",
    causas: [
      "Climatização prolongada",
      "Pouca entrada de ar fresco",
      "Ambiente semiaberto"
    ],
    impacto: [
      "Ressecamento nasal leve",
      "Desânimo temporário",
      "Menor suor durante treino"
    ],
    solucoes: [
      "Ajustar climatização",
      "Hidratar o ambiente com plantas ou bacias de água",
      "Alongamento prévio ao exercício"
    ],
    mensagem: "⚠️ Frio seco. Prepare-se bem antes de treinar.",
    cor: "amarelo"
  };
case '010':
  return {
    titulo: "❄️ Frio úmido com boa ventilação",
    explicacao: "Clima frio e úmido, porém com ar limpo. Pode ser desconfortável, mas estável.",
    causas: [
      "Clima externo úmido",
      "Pouca exposição ao sol",
      "Pouco aquecimento no ambiente"
    ],
    impacto: [
      "Sensação de pegajosidade",
      "Ligeira fadiga",
      "Incômodo respiratório leve"
    ],
    solucoes: [
      "Aumentar entrada de luz natural",
      "Secar áreas úmidas após treinos intensos",
      "Manter ventilação constante"
    ],
    mensagem: "⚠️ Frio e úmido. Mantenha o ambiente seco e iluminado.",
    cor: "amarelo"
  };
case '011':
  return {
    titulo: "🧊 Frio, úmido e mal ventilado",
    explicacao: "Ambiente propício à formação de mofo e desconforto respiratório.",
    causas: [
      "Alta umidade acumulada",
      "Pouca circulação de ar",
      "Ventilação bloqueada por móveis ou paredes"
    ],
    impacto: [
      "Risco de fungos",
      "Agravamento de alergias",
      "Sensação de cansaço contínuo"
    ],
    solucoes: [
      "Limpeza e desumidificação frequente",
      "Abrir entradas de ar regularmente",
      "Desobstruir passagens de vento"
    ],
    mensagem: "⚠️ Umidade alta e ar preso. Ventile e cuide da limpeza.",
    cor: "laranja"
  };
case '015':
  return {
    titulo: "❄️ Frio úmido e ventilação média",
    explicacao: "A temperatura está baixa com umidade alta e ventilação parcial. Atenção ao conforto térmico e respiratório.",
    causas: [
      "Ambiente úmido sem sol",
      "Ventilação lateral leve",
      "Presença constante de suor e respiração intensa"
    ],
    impacto: [
      "Sensação de abafamento frio",
      "Baixa produtividade física",
      "Agravamento de rinite"
    ],
    solucoes: [
      "Utilizar roupas adequadas",
      "Evitar superlotação em dias úmidos",
      "Desumidificação passiva com cal hidratado ou similares"
    ],
    mensagem: "⚠️ Frio e úmido. Mantenha o ambiente controlado.",
    cor: "amarelo"
  };
case '050':
  return {
    titulo: "🌬️ Frio com umidade média e ar limpo",
    explicacao: "Condição razoável para treino leve, mas ainda fria. Umidade em nível moderado não traz riscos imediatos.",
    causas: [
      "Pouca insolação",
      "Ventilação aberta",
      "Madrugada"
    ],
    impacto: [
      "Frio inicial",
      "Menor suor",
      "Desânimo temporário"
    ],
    solucoes: [
      "Roupas leves mas térmicas",
      "Aquecimento muscular",
      "Pausa ativa"
    ],
    mensagem: "⚠️ Leve desconforto. Aqueça antes de treinar.",
    cor: "amarelo"
  };
case '051':
  return {
    titulo: "🧊 Frio, úmido e mal ventilado",
    explicacao: "Ambiente frio e úmido com pouca circulação de ar. Propício à formação de mofo e desconforto respiratório.",
    causas: [
      "Janelas e portas fechadas",
      "Acúmulo de umidade interna",
      "Baixa circulação de pessoas"
    ],
    impacto: [
      "Risco de fungos",
      "Irritação nasal",
      "Queda na resistência física"
    ],
    solucoes: [
      "Abrir janelas para ventilação",
      "Usar desumidificadores",
      "Manter o ambiente limpo e seco"
    ],
    mensagem: "⚠️ Umidade alta e ar parado. Atenção ao mofo.",
    cor: "laranja"
  };
case '055':
  return {
    titulo: "❄️ Frio moderado e ventilação razoável",
    explicacao: "Temperatura amena com umidade e CO₂ em níveis médios. Ambiente confortável para exercícios leves.",
    causas: [
      "Boa ventilação natural",
      "Pouca variação de temperatura externa",
      "Fluxo moderado de pessoas"
    ],
    impacto: [
      "Conforto térmico adequado",
      "Boa oxigenação",
      "Desempenho físico estável"
    ],
    solucoes: [
      "Manter as janelas abertas",
      "Organizar fluxo de pessoas",
      "Garantir pausas para ventilação"
    ],
    mensagem: "✅ Ambiente estável e confortável.",
    cor: "verde"
  };
case '100':
  return {
    titulo: "🔥 Calor seco com boa ventilação",
    explicacao: "Temperatura alta, ar seco e boa circulação. Pode causar desconforto leve e risco de desidratação.",
    causas: [
      "Clima quente e seco",
      "Ventilação natural eficaz",
      "Baixa umidade relativa do ar"
    ],
    impacto: [
      "Desconforto térmico",
      "Ressecamento da pele e mucosas",
      "Risco de fadiga"
    ],
    solucoes: [
      "Hidratação constante",
      "Usar roupas leves",
      "Ventilação adicional se necessário"
    ],
    mensagem: "⚠️ Calor seco. Hidrate-se e mantenha o ambiente ventilado.",
    cor: "laranja"
  };
case '101':
  return {
    titulo: "🔥 Calor seco e ar estagnado",
    explicacao: "Temperatura alta, ar seco e CO₂ elevado sugerem baixa renovação mesmo num local aberto. Pode haver zonas com pouca circulação.",
    causas: [
      "Dia quente com vento insuficiente",
      "Acúmulo de CO₂ gerado pelos alunos",
      "Exaustores desligados ou mal posicionados"
    ],
    impacto: [
      "Desidratação",
      "Cansaço precoce",
      "Desconforto respiratório"
    ],
    solucoes: [
      "Refrescar o ambiente com ventiladores",
      "Hidratar-se constantemente",
      "Ajustar posição dos equipamentos para liberar circulação de ar"
    ],
    mensagem: "⚠️ Calor seco. Hidratação e circulação de ar são essenciais agora.",
    cor: "laranja"
  };
case '105':
  return {
    titulo: "🔥 Calor seco com ventilação média",
    explicacao: "Ambiente quente, seco, com circulação de ar moderada. Conforto relativo, mas atenção ao ressecamento.",
    causas: [
      "Ventilação parcial",
      "Uso moderado de ar-condicionado",
      "Baixa umidade ambiente"
    ],
    impacto: [
      "Desconforto leve",
      "Ressecamento ocular e nasal",
      "Fadiga leve"
    ],
    solucoes: [
      "Hidratar olhos e pele",
      "Ventilar mais o ambiente",
      "Manter pausas para descanso"
    ],
    mensagem: "⚠️ Calor seco com ventilação. Cuide da hidratação.",
    cor: "amarelo"
  };
case '150':
  return {
    titulo: "🔥 Calor moderado com umidade média",
    explicacao: "Temperatura alta moderada e umidade no meio termo com ar limpo. Ambiente estável para exercícios intensos.",
    causas: [
      "Ventilação natural eficaz",
      "Pouca variação climática",
      "Fluxo controlado de pessoas"
    ],
    impacto: [
      "Conforto térmico razoável",
      "Boa oxigenação",
      "Desempenho físico satisfatório"
    ],
    solucoes: [
      "Manter ventilação constante",
      "Hidratação adequada",
      "Monitorar fluxo de pessoas"
    ],
    mensagem: "✅ Ambiente estável e saudável para treinos.",
    cor: "verde"
  };
case '151':
  return {
    titulo: "🔥 Calor moderado, umidade média e CO₂ alto",
    explicacao: "Temperatura e umidade em níveis confortáveis, porém com alta concentração de CO₂, indicando má ventilação.",
    causas: [
      "Ambiente fechado em horário de pico",
      "Ventilação insuficiente",
      "Alta ocupação"
    ],
    impacto: [
      "Fadiga precoce",
      "Desconforto respiratório",
      "Redução do rendimento"
    ],
    solucoes: [
      "Aumentar a ventilação",
      "Reduzir o número de pessoas no local",
      "Fazer pausas para ventilar"
    ],
    mensagem: "⚠️ Atenção ao CO₂ elevado. Ventile o ambiente.",
    cor: "laranja"
  };
case '155':
  return {
    titulo: "🔥 Calor moderado, umidade e CO₂ altos",
    explicacao: "Ambiente quente, úmido e com pouca renovação do ar, causando desconforto e potencial risco à saúde.",
    causas: [
      "Alta ocupação",
      "Pouca ventilação efetiva",
      "Excesso de suor acumulado"
    ],
    impacto: [
      "Desconforto térmico intenso",
      "Desconforto respiratório",
      "Redução da capacidade física"
    ],
    solucoes: [
      "Ligar ventiladores e exaustores",
      "Intercalar treinos com pausas",
      "Manter o ambiente limpo e seco"
    ],
    mensagem: "⚠️ Ambiente quente e úmido. Ventile e hidrate-se.",
    cor: "vermelho"
  };
case '500':
  return {
    titulo: "🌱 Temperatura média, umidade baixa e CO₂ baixo",
    explicacao: "Condições moderadas e secas, com boa renovação de ar, ideal para a maioria dos treinos.",
    causas: [
      "Boa ventilação natural",
      "Pouca umidade externa",
      "Fluxo controlado de pessoas"
    ],
    impacto: [
      "Conforto geral",
      "Boa respiração",
      "Risco baixo de desconforto"
    ],
    solucoes: [
      "Manter as janelas abertas",
      "Hidratar-se normalmente",
      "Controlar fluxo de pessoas"
    ],
    mensagem: "✅ Ambiente agradável e seguro para atividades.",
    cor: "verde"
  };
case '501':
  return {
    titulo: "🌱 Temperatura média, umidade baixa e CO₂ alto",
    explicacao: "Boa temperatura e umidade, mas alta concentração de CO₂ indica ventilação insuficiente.",
    causas: [
      "Ambiente com muitas pessoas",
      "Ventilação deficiente",
      "Picos de atividade intensa"
    ],
    impacto: [
      "Desconforto respiratório",
      "Fadiga precoce",
      "Diminuição do desempenho"
    ],
    solucoes: [
      "Abrir janelas ou portas",
      "Ligar ventiladores",
      "Revezar atividades para reduzir ocupação"
    ],
    mensagem: "⚠️ Atenção ao CO₂. Ventile o ambiente.",
    cor: "laranja"
  };
case '505':
  return {
    titulo: "🌱 Temperatura média, umidade baixa e CO₂ médio",
    explicacao: "Boa temperatura com baixa umidade e ventilação razoável. Condição confortável para treinos moderados.",
    causas: [
      "Ventilação natural adequada",
      "Clima seco moderado",
      "Fluxo médio de pessoas"
    ],
    impacto: [
      "Conforto térmico razoável",
      "Baixo risco de fadiga",
      "Boa oxigenação"
    ],
    solucoes: [
      "Manter ventilação",
      "Hidratação leve",
      "Monitorar número de pessoas"
    ],
    mensagem: "✅ Ambiente confortável e bem ventilado.",
    cor: "verde"
  };
case '511':
  return {
    titulo: "🌫️ Temperatura e umidade médias, CO₂ alto",
    explicacao: "Boa temperatura e umidade, porém alta concentração de CO₂, indicando possível falha na ventilação.",
    causas: [
      "Ambiente fechado em horários de pico",
      "Pouca renovação de ar",
      "Elevado número de pessoas"
    ],
    impacto: [
      "Fadiga precoce",
      "Desconforto respiratório",
      "Redução da concentração"
    ],
    solucoes: [
      "Aumentar ventilação",
      "Reduzir número de pessoas",
      "Fazer pausas para ventilar"
    ],
    mensagem: "⚠️ CO₂ elevado. Ventile o ambiente e faça pausas.",
    cor: "laranja"
  };
case '515':
  return {
    titulo: "🌫️ Temperatura e umidade médias, CO₂ alto e umidade alta",
    explicacao: "Ambiente com umidade e CO₂ elevados, mesmo com temperatura confortável. Atenção para ventilação e controle de umidade.",
    causas: [
      "Alta ocupação",
      "Ventilação insuficiente",
      "Ambiente úmido"
    ],
    impacto: [
      "Sensação de abafamento",
      "Fadiga física e mental",
      "Risco de proliferação de fungos"
    ],
    solucoes: [
      "Melhorar circulação de ar",
      "Usar desumidificadores",
      "Reduzir ocupação temporariamente"
    ],
    mensagem: "⚠️ Ambiente úmido e mal ventilado. Ventile e hidrate-se.",
    cor: "vermelho"
  };
case '550':
  return {
    titulo: "🌞 Temperatura média, umidade alta e CO₂ médio",
    explicacao: "Ambiente com temperatura estável, umidade alta e ventilação razoável. Atenção ao conforto respiratório.",
    causas: [
      "Clima úmido externo",
      "Fluxo constante de pessoas",
      "Ventilação parcialmente bloqueada"
    ],
    impacto: [
      "Sensação de abafamento",
      "Cansaço mais rápido",
      "Risco de alergias"
    ],
    solucoes: [
      "Abrir janelas e portas",
      "Usar ventiladores para circulação",
      "Reduzir a umidade do ambiente"
    ],
    mensagem: "⚠️ Umidade alta. Ventile bem o espaço.",
    cor: "laranja"
  };
case '551':
  return {
    titulo: "🌞 Temperatura média, umidade alta e CO₂ alto",
    explicacao: "Boa temperatura, porém umidade e CO₂ elevados. Ambiente pode causar desconforto e fadiga.",
    causas: [
      "Alta ocupação",
      "Pouca ventilação eficaz",
      "Ambiente úmido"
    ],
    impacto: [
      "Desconforto respiratório",
      "Redução do desempenho físico",
      "Sensação de fadiga"
    ],
    solucoes: [
      "Melhorar circulação do ar",
      "Intercalar treinos com pausas para ventilar",
      "Reduzir ocupação temporariamente"
    ],
    mensagem: "⚠️ Umidade e CO₂ altos. Ventile e hidrate-se.",
    cor: "vermelho"
  };
case '555':
  return {
    titulo: "🌪️ Ambiente instável: Temperatura, umidade e CO₂ médios",
    explicacao: "Variações frequentes nos níveis indicam instabilidade ambiental. Pode prejudicar o conforto e a saúde.",
    causas: [
      "Fluxos variáveis de pessoas",
      "Abertura e fechamento constante de portas",
      "Equipamentos de climatização desregulados"
    ],
    impacto: [
      "Fadiga mental e física",
      "Irritação respiratória",
      "Redução da concentração"
    ],
    solucoes: [
      "Regularizar o sistema de ventilação",
      "Controlar fluxo de pessoas",
      "Estabilizar temperatura e umidade"
    ],
    mensagem: "⚠️ Ambiente instável. Busque equilíbrio nos parâmetros.",
    cor: "amarelo"
  };
case '510':
  return {
    titulo: "🌞 Temperatura média, umidade média e CO₂ baixo",
    explicacao: "Ambiente equilibrado com boa ventilação e níveis confortáveis para treinos intensos.",
    causas: [
      "Boa circulação de ar",
      "Controle adequado da umidade",
      "Fluxo de pessoas moderado"
    ],
    impacto: [
      "Alto desempenho",
      "Conforto geral",
      "Bem-estar físico e mental"
    ],
    solucoes: [
      "Manter ventilação constante",
      "Hidratação adequada",
      "Evitar superlotação"
    ],
    mensagem: "✅ Ambiente ideal para treinos prolongados.",
    cor: "verde"
  };


  }
}