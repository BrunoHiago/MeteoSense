const mongoose = require("../../database/index");

const sensorValues = mongoose.Schema({
    temperatura:{
        type: Number
    },
    umidade:{
        type: Number
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("sensorValues", sensorValues);