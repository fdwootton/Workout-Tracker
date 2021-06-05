const router = require('express').Router();

const path = require('path');

//GET request for home page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//GET request for exercise page
router.get('/exercise', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

//GET request for stats page
router.get('/stats', function(req, res){
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

module.exports = router;