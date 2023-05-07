const mongoose = require("../../database/index");

const sensorValues = mongoose.Schema({
    temperatura:{
        type: String
    },
    umidade:{
        type: String
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("sensorValues", sensorValues);