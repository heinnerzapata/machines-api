const db = require("../models");
const Machine = db.machines;

// Create and Save a new Machine
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Machine
  const machine = new Machine({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status ? req.body.status : false,
  });

  // Save Machine in the database
  machine
    .save(machine)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Machine.",
      });
    });
};

// Retrieve all Machines from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Machine.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving machines.",
      });
    });
};

// Find a single Machine with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Machine.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Machine with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Machine with id=" + id });
    });
};

// Update a Machine by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Machine.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Machine with id=${id}. Maybe Machine was not found!`,
        });
      } else res.send({ message: "Machine was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

// Delete a Machine with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Machine.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Machine with id=${id}. Maybe Machine was not found!`,
        });
      } else {
        res.send({
          message: "Machine was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Machine with id=" + id,
      });
    });
};

// Delete all Machines from the database.
exports.deleteAll = (req, res) => {
  Machine.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Machines were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all machines.",
      });
    });
};

// Find all published Machines
exports.findAllActive = (req, res) => {
  Machine.find({ status: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving machines.",
      });
    });
};
