const express = require('express');
const tse = require('../controllers/robots/robot')
const router = express.Router();


//const user = require('../controllers/user.js');

router.get('/api/data', (req, res) => {
    const response = tse.init();
    console.log(JSON.stringify(response))
    res.json(response);
})

module.exports = router;