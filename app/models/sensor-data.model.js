const db = require("./index");
const Sequelize = require("sequelize");

// module.exports = (sequelize, Sequelize) => {
//     const SensorData = sequelize.define("sensors-data", {
//         measureId: {
//             type: Sequelize.STRING,
//         },
//         value: {
//             type: Sequelize.ARRAY(Sequelize.INTEGER),
//         },
//         type: {
//             type: Sequelize.STRING,
//         },
//     });
//     // Records.belongsTo(SensorData);
//     //
//     // SensorData.hasMany(Records, {
//     //     foreignKey: {
//     //         name: 'measureId'
//     //     }
//     // });
//
//     return SensorData;
// };

module.exports = (sequelize) => {
  sequelize.define("sensorsData", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    measureId: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    type: {
      type: Sequelize.STRING,
    },
  });
};
