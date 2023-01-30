const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB,process.env.USER,process.env.PASS,
    {
        host:process.env.HOTS,
        dialect:process.env.DIALECT,
        port:process.env.DBPORT,
        logging: console.log,
        define:{
            timestamps: false
        },
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }
);

module.exports = db;