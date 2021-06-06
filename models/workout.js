const mongoose = require('mongoose');

//mongoose schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'Please enter exercise name'
            },
            type: {
                type: String,
                trim: true,
                required: 'Please enter exercise type'
            },
            duration: {
                type: Number,
                required: 'Please enter duration of exercise'
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;