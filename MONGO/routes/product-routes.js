const router = require('express').Router();

const { insertProduct, getProducts, getProductAnalytics } = require('../controllers/product-controller');

router.post('/add', insertProduct);
router.get('/get', getProducts);
router.get('/analis', getProductAnalytics);

module.exports = router;