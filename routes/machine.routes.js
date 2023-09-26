module.exports = (app) => {
  const machines = require("../controllers/machine.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", machines.create);

  // Retrieve all Tutorials
  router.get("/", machines.findAll);

  // Retrieve all published Tutorials
  router.get("/all-active", machines.findAllActive);

  // Retrieve a single Tutorial with id
  router.get("/:id", machines.findOne);

  // Update a Tutorial with id
  router.put("/:id", machines.update);

  // Delete a Tutorial with id
  router.delete("/:id", machines.delete);

  // Delete all Tutorials
  router.delete("/", machines.deleteAll);

  app.use("/api/machines", router);
};
