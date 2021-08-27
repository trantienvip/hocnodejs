const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/slug', newsController.slug);
router.get('/:error', newsController.error);
router.get('/', newsController.index);

module.exports = router;
