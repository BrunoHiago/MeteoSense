const express = require("express");
const Route = express.Router();
const sensorValues = require("../controllers/sensorValuesController");

Route.post("/newSensorValues", sensorValues.SaveValues);
Route.get("/getValues", sensorValues.getValues);
Route.get("/mean-data", sensorValues.meanData);
module.exports = Route;