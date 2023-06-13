const sensorValues = require("../models/sensorValues");

const saveValues = (req, res) => {
  const values = req.body;
  console.log(values);

  sensorValues
    .create({
      temperatura: values.temperatura,
      umidade: values.umidade,
      velVento: values.velVento,
      dirVento: values.dirVento,
      qtdAgua: values.qtdAgua,
    })
    .then((obj) => {
      console.log("Valores Salvos com sucesso: ", obj);
      res.send("Salvo");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getValues = async (req, res) => {
  try {
    let info = await sensorValues.find().then((arr) => {
      return arr.map((item) => {
        return {
          umidade: item.umidade,
          temperatura: item.temperatura,
          createAt: item.createAt,
        };
      });
    });
    res.status(200).send(info);
  } catch (err) {
    res.status(500).send(err);
  }
};

const meanData = async (req, res) => {
  try {
    const data = await sensorValues.find();
    const groupedData = {};
    const mean = {};

    data.forEach((doc) => {
      const date = new Date(doc.createAt);
      const day = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;

      if (!groupedData.hasOwnProperty(day)) {
        groupedData[day] = [];
      }

      groupedData[day].push(doc);
    });

    for (const day in groupedData) {
      const sum = {
        temperatura: 0,
        umidade: 0,
      };
      const n = groupedData[day].length;
      console.log(n);

      groupedData[day].forEach((doc) => {
        sum.temperatura += doc.temperatura;
        sum.umidade += doc.umidade;
      });
      mean[day] = {
        mdTemperatura: sum.temperatura / n,
        mdUmidade: sum.umidade / n,
      };

      console.log(sum);
    }
    res.status(200).send(mean);
  } catch (err) {
    res.status(500).send(err);
  }
};

const last24h = async (req, res) => {
  const now = Date.now();
  const last = now - 24 * 60 * 60 * 1000;

  sensorValues
    .find({ createdAt: { $gte: last, $lte: now } })
    .then((response) => {
      res.status(200).send(response);
    });
};

const buscaData = async (req, res) => {
  const start = new Date("2023-05-30");
  const end = new Date("2023-05-31");

  sensorValues.find(
    { createdAt: { $gte: start, $lte: end } },
  
  ).then((result)=>{
    console.log(result);
    res.send(result);
  })
};

module.exports = {
  saveValues,
  getValues,
  meanData,
  last24h,
  buscaData
};
