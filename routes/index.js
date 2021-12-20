const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.post('/create-task', function(req, res) {
    console.log(req.body);
});

module.exports = router;