if(process.env.NODE_ENV == "production"){
    module.exports = {mongoUri:"mongodb+srv://Bruno:Q6Dys1t1LdpsdBop@estacaometeorologica.yhlhf5g.mongodb.net/Estacao?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoUri:"mongodb://localhost:27017/PI5"}
}