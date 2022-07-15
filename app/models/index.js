const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const modelDefiners = [
    require('./sensor-data.model'),
    require('./records.model'),
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

const { records, sensorsData } = sequelize.models;

records.hasMany(sensorsData, {as: 'sensorsData', foreignKey: 'measureId'});
sensorsData.belongsTo(records, {as: 'records', foreignKey: 'measureId'});
db.records = records;
db.sensorsData = sensorsData;

module.exports = db;