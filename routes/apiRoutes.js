const router = require('express').Router();

const workoutDB = require('../models/workout');

//GET request for all workouts
router.get('/api/workout', function(req, res) {
    workoutDB.find({})
    .then(function(dbData){
        res.json(dbData);
    })
    .catch(function(error){
        res.json(error);
    });
});

module.exports = router;