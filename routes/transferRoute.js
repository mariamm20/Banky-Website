const express = require('express');
const router = express.Router();

const transferController = require('../controllers/transferController')

router.get("/", transferController.transfer_transfer_get);

module.exports = router;