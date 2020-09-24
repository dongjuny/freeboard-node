var router = require('express').Router();

router.use('/', require('./post'))
router.use('/', require('./auth'))

module.exports = router;