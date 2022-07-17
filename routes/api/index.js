const router = require('express').Router();
const affirmationsRoutes = require('./affirmations-routes');
const moodRoutes = require('./mood-routes');
const quotesRoutes = require('./quotes-routes');

router.use('/affirmations', affirmationsRoutes);
router.use('/mood', moodRoutes);
router.use('/quotes', quotesRoutes);

module.exports = router;