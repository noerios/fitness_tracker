const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    date: {
        type: date,
        default: date.now(),
    },

    exercizes: [{
        type: {
            type: String,
            trim: true,
            required: "exercise type",
        },
        name: {
            type: String, 
            trim: true,
            required: "exercise name",
        },
        duration: {
            type: Number,   
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        duration: {
            type: String,
            trim: true,
            required: "time in minutes",
        },
        distance: {
            type: String,
            trim: true,
            required: "distance in meters"
        }

        }]

})


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
