const router = require("express").Router();
const db = require("../models");


//update below
router.post("/api/transaction", ({ body }, res) => {
    Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });