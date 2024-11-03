var express = require('express');
var router = express.Router();

router.post('/login', function(req, res){
    res.json({
        message: "You shiiiit"
    })
})

module.exports = router;
