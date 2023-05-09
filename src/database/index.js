const mongoose = require('mongoose');
require("dotenv").config();
const db = require('../config/db');

mongoose.connect(db.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("Conectado com Banco de Dados com sucesso");
});


module.exports = mongoose;