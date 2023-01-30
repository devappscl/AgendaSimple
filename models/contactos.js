const Sequelize = require('sequelize')

const db = require('../database/database')

const Contacto = db.define('contactos',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING(255)
    },
    telefono:{
        type: Sequelize.STRING(20)
    }
});

module.exports = Contacto;