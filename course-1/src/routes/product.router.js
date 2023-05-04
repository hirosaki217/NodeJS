const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.json({
        name: 'defautl',
    });
});

//router
router.get('/get', (req, res, next) => {
    return res.json({
        name: 'get-product',
    });
});

router.post('/post', (req, res, next) => {
    return res.json({
        name: 'post-product',
    });
});

module.exports = router;
