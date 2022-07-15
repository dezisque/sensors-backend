// const db = require("./index");
// const SensorData = db.sensorsData;

const Sequelize = require("sequelize");
// const dbConfig = require("../config/db.config");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });
//
// const Records = sequelize.define("records", {
//     id: {
//         type: Sequelize.STRING,
//         primaryKey: true,
//     },
//     engineId: {
//         type: Sequelize.STRING,
//     },
//     measureDate: {
//         type: Sequelize.DATE,
//     }
// });
//
// Records.hasMany(SensorData,{as: 'sensorsData', foreignKey: 'measureId'})
//
//
// module.exports = Records;
//
//
//
//
// const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
    sequelize.define('records', {
        measureId: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        engineId: {
            type: Sequelize.STRING,
        },
        measureDate: {
            type: Sequelize.DATE,
        }
    });
};