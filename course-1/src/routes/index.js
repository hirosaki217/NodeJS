const express = require('express');
const products = require('./product.router');

const router = express.Router();

// /products

router.use('/products/', products);

//router
router.get('/', (req, res, next) => {
    return res.json({
        name: 'get',
    });
});

router.post('/', (req, res, next) => {
    return res.json({
        name: 'post',
    });
});

module.exports = router;
