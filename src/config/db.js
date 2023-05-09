if(process.env.NODE_ENV == "production"){
    console.log("Conectando no banco online");
    module.exports = {mongoUri: process.env.MONGO_URL}
}else{
    console.log("Conectando no banco local");
    module.exports = {mongoUri: process.env.MONGO_LOCAL}
}