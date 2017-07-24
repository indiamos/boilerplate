const router = require('express').Router();

// matches GET requests to /api/products/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/products/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/products/:puppyId
router.put('/:productId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/products/:productId
router.delete('/:productId', function (req, res, next) { /* etc */});

module.exports = router;
