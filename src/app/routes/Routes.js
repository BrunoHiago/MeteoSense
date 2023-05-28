const express = require("express");
const Route = express.Router();
const sensorValues = require("../controllers/sensorValuesController");

Route.post("/newSensorValues", sensorValues.saveValues);
Route.get("/getValues", sensorValues.getValues);
Route.get("/mean-data", sensorValues.meanData);
Route.get("/last24h", sensorValues.last24h);

module.exports = Route;