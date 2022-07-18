const express = require('express');
const router = express.Router();

const historyController = require('../controllers/historyController');

router.get("/", historyController.history_history_get );

module.exports = router;