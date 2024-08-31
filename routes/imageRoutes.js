const express = require('express');
const { fetchImages, fetchRandomImages } = require('../controllers/imageController');

const router = express.Router();

router.get('/search', fetchImages);
router.get('/random', fetchRandomImages);

module.exports = router;
