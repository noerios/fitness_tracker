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

  router.get("/api/workouts", (req, res) => {
      db.Workout.aggregate([{
          $addFields: {
              totalDuration: {
                  $sum: '$exercises.duration',
              },
          },
      }])
      .then((dbWorkouts) => {
          res.json(dbWorkouts);
      })
      .catch((err) => {
          res.json(err);
      });
  });