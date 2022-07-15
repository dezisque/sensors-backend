module.exports = (app) => {
  const records = require("../controllers/records-controller");
  const sensorData = require("../controllers/records-controller");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", records.create);

  // Retrieve all Tutorials
  router.get("/", records.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);
  //
  // Retrieve a single Tutorial with id
  router.get("/:measureId", records.findOne);
  //
  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);
  //
  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);
  //
  // Delete all Records
  router.delete("/", records.deleteAll);
  router.delete("/", records.deleteAll);

  app.use("/api/records", router);
};
