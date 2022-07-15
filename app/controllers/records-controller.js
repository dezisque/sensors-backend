const db = require("../models");
const Record = db.records;
const SensorData = db.sensorsData;
const Sequelize = require("sequelize");

// Create records
exports.create = (req, res) => {
  // Validate request
  //     if (!req.body.value) {
  //         res.status(400).send({
  //             message: "Content can not be empty!"
  //         });
  //         return;
  //     }

  Record.bulkCreate(req.body, {
    ignoreDuplicates: true,
    include: [
      {
        association: "sensorsData",
        updateOnDuplicate: ["type"],
      },
    ],
  }).then((data) => {
    res.send(data);
  });

  // req.body.forEach((measure) => {
  //   Record.create({
  //     measureId: measure.measureId,
  //     engineId: measure.engineId,
  //     measureDate: measure.measureDate,
  //   })
  //     .then(() => {
  //       SensorData.bulkCreate(measure.sensorsData).then((data) => {
  //         res.send(data);
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Record.",
  //       });
  //     });
  // });
};

// Find all record
exports.findAll = (req, res) => {
  Record.findAll({
    where: {},
    include: [
      {
        association: "sensorsData",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find record by id
exports.findOne = (req, res) => {
  const measureId = req.params.measureId;
  Record.findOne({
    where: { measureId: measureId },
    include: [
      {
        association: "sensorsData",
      },
    ],
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find all dates
exports.getDate = (req, res) => {
  const engineId = req.params.engineId;
  Record.findAll({
    where: { engineId: engineId },
    attributes: ["measureId", "measureDate"],
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.getEngines = (req, res) => {
  Record.findAll({
    attributes: [
      Sequelize.fn("DISTINCT", Sequelize.col("engineId")),
      "engineId",
    ],
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// exports.update = (req, res) => {};
// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Record.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Records were deleted successfully!` });
      SensorData.destroy({
        where: {},
        truncate: false,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all records.",
      });
    });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
