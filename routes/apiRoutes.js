const router = require('express').Router()

router.get('/api/workout', function(req, res) {
    console.log('api/workouts route hit')
    res.end()
    
    Workout.find({})
    .then(function(){})
    
    //logic

    res.json();


})

module.exports = router;