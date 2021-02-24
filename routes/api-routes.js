const router = require("express").Router();
const db = require("../models");


//update below
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });