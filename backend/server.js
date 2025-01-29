const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('API Backend funcionando');
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
