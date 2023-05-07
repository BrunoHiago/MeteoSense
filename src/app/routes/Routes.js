const express = require("express");
const Route = express.Router();
const sensorValues = require("../controllers/sensorValuesController");

Route.post("/newSensorValues", sensorValues.SaveValues);
Route.get("/getValues", sensorValues.getValues);

module.exports = Route;