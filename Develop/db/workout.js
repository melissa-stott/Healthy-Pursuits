const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length}) => length >= 6, "Please choose one"],
        },
        name: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length >= 6, "Name is not long enough"]
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;