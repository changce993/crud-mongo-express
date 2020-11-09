// Este archivo conecta a la base de datos
const mongoose = require('mongoose');

let db;

module.exports = function Connection() {
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/crud-example', {
            useMongoClient: true
        });
    }

    return db;
}