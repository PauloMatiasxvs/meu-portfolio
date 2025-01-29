import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

// Função para logar as métricas no console
const logVitals = (metric) => {
  console.log(metric);
};

// Usando as funções do 'web-vitals' para monitorar as métricas de desempenho
onCLS(logVitals);
onFCP(logVitals);
onFID(logVitals);
onLCP(logVitals);
onTTFB(logVitals);

export default logVitals;
