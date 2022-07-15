module.exports = (app) => {
  const records = require("../controllers/records-controller");

  const router = require("express").Router();

  router.get("/", records.getEngines);

  app.use("/api/engines", router);
};
