// index.js in v1 folder
const express = require('express');
const authRouter  = require('./auth');

var router = express.Router();

router.use('/auth', authRouter)

module.exports = router;