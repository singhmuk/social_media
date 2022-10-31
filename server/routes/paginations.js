const express = require('express');
const router = express.Router();
const pagesRoutes = require('../controllers/paginations')


router.route("/").get(pagesRoutes.getAll);
router.route("/").post(pagesRoutes.creates);


module.exports = router;