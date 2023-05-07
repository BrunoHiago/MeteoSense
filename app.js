const express = require('express');
const bodyParser = require('body-parser');
const router = require("./src/app/routes/Routes");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());

app.use("/", router);


// Iniciando o servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor iniciado na porta ${process.env.process||3000}`);
});