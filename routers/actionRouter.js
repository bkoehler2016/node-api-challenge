const express = require("express");
const db = require("../data/helpers/actionModel");
const router = express.Router();

//Get all actions
router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting actions"
      });
    });
});

//Get actions for specific ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(action => {
      res.json(action);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting action"
      });
    });
});

module.exports = router;
