const router = require('express').Router();

const workoutDB = require('../models/workout');

//GET request for all workouts
router.get('/api/workouts', function(req, res) {
    workoutDB.find({})
    .then(function(data){
        res.json(data);
    })
    .catch(function(error){
        res.json(error);
    });
});

// PUT request to add exercise
router.put('/api/workouts/:id', function ({ body, params }, res) {
	workoutDB.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then(function(data){
			res.json(data);
		})
		.catch(function(error){
			res.json(error);
		});
});

// POST request to create new workout
router.post("/api/workouts", function({ body }, res) {
	workoutDB.create(body)
		.then(function(data) {
			res.json(data);
		})
		.catch(function(error) {
			res.json(error);
		});
});

// GET request for workouts in range
router.get("/api/workouts/range", function(req, res) {
	workoutDB.find()
		.then(function(data) {
			res.json(data);
		})
		.catch(function(error) {
			res.json(error);
		});
});

module.exports = router;