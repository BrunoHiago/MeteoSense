const sensorValues = require("../models/sensorValues");

const SaveValues = (req, res)=>{
    const values = req.body;
    console.log(values);
    sensorValues.create({
        temperatura: values.temperatura,
        umidade: values.umidade
    }).then((obj)=>{
        console.log("Valores Salvos com sucesso: ", obj);
        res.send("Salvo");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send(err);
    })
}

const getValues = async (req, res)=>{
    try{
        let info = await sensorValues.find().then((arr)=>{
            return arr.map((item)=>{
                return {
                    umidade: item.umidade,
                    temperatura: item.temperatura,
                    createAt: item.createAt
                }
            });
        });
        res.status(200).send(info);
    }catch(err){
        res.status(500).send(err);
    }
    
}

module.exports =  {SaveValues, getValues};