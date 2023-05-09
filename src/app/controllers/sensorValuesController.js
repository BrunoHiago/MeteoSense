const sensorValues = require("../models/sensorValues");

const SaveValues = (req, res) => {
    const values = req.body;
    console.log(values);
    sensorValues.create({
        temperatura: values.temperatura,
        umidade: values.umidade
    }).then((obj) => {
        console.log("Valores Salvos com sucesso: ", obj);
        res.send("Salvo");
    }).catch((err) => {
        console.log(err);
        res.status(500).send(err);
    })
}

const getValues = async (req, res) => {
    try {
        let info = await sensorValues.find().then((arr) => {
            return arr.map((item) => {
                return {
                    umidade: item.umidade,
                    temperatura: item.temperatura,
                    createAt: item.createAt
                }
            });
        });
        res.status(200).send(info);
    } catch (err) {
        res.status(500).send(err);
    }

}

const meanData = async (req, res) => {
    try {
        const data = await sensorValues.find();
        const groupedData = {};
        const mean = {};

        
        data.forEach(doc => {
            const date = new Date(doc.createAt);
            const day = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

            if (!groupedData.hasOwnProperty(day)) {
                groupedData[day] = [];
            }

            groupedData[day].push(doc);
        });
        
        for (const day in groupedData) {
            const sum = {
                temperatura: 0,
                umidade: 0
            };
            const n = groupedData[day].length;
            console.log(n);

            groupedData[day].forEach(doc => {
                sum.temperatura += doc.temperatura;
                sum.umidade += doc.umidade;
            });
            mean[day] = {
                mdTemperatura: sum.temperatura / n,
                mdUmidade: sum.umidade / n
            };

            console.log(sum);
        }
        res.status(200).send(mean);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { SaveValues, getValues, meanData };