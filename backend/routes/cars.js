const express = require('express');
const router = express.Router();
const mainsRoutes = require('../controllers/cars')


router.route("/").get(mainsRoutes.getAll);
router.route("/").post(mainsRoutes.creates);

module.exports = router;