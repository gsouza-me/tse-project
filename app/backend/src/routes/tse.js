const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/cand', (req, res) => {
    var obj;
    fs.readFile('src/var/data.json', 'utf-8', (err, data) => {
        if(err) throw err;
        obj = JSON.parse(data);
        res.json(obj)
    })
})

module.exports = router;