module.exports = (app) => {
  const records = require("../controllers/records-controller");

  const router = require("express").Router();

  router.get("/:engineId", records.getDate);

  app.use("/api/dates", router);
};
