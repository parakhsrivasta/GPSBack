const express = require('express');
const router = express.Router();
const data = require('./data');

router.get('/train-status', (req, res) => {
    res.send({
        status: 'success',
        data: data,
        message: 'SUCCESS'
      });
});

module.exports = router;