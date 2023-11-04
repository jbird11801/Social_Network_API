const router = require('express').Router();
const courseRoutes = require('./route1');
const studentRoutes = require('./route2');

router.use('/route1', courseRoutes);
router.use('/route2', studentRoutes);

module.exports = router;
