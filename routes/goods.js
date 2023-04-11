const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is homg page');
});

router.get('/about/:aaa', (req, res) => {
    console.log(req.params);
    res.send('this is about page');
});

module.exports = router;