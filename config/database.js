const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true })
    .then(() => console.log('Conectado a Database'))
    .catch((err) => console.error('Um erro ocorreu', err));

module.exports = db;