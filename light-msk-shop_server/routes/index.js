const Router = require('express');

const router = new Router();

const productRouter = require('./productRouter');
const administratorRouter = require('./administratorRouter');
const typeRouter = require('./typeRouter');

router.use('/administrator', administratorRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);

module.exports = router;

