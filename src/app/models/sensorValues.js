const mongoose = require("../../database/index");

const sensorValues = mongoose.Schema({
    temperatura:{
        type: Number
    },
    umidade:{
        type: Number
    },
    velVento:{
        type:Number
    },
    dirVento:{
        type:String
    },
    qtdAgua:{
        type:Number
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("sensorValues", sensorValues);



