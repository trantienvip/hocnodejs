const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/slug', newsController.slug);
router.use('/:error', newsController.error);
router.use('/', newsController.index);

module.exports = router;