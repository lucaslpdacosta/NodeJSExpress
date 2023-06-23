const mongoose = require('mongoose')

const DB_PASSWORD = encodeURIComponent('root')

mongoose.connect('mongodb+srv://root:${DB_PASSWORD}@cluster0.vrcuxmb.mongodb.net/')
    .then(() => {
        console.log("Banco de Dados conectado com sucesso");
    })
    .catch(err => console.log(err))