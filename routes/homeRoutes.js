const router = require('express').Router();
const path = require('path');

router.get('/exercise', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats', function(req, res){
    
})

module.exports = router;