const express = require('express');
const router = express.Router();
const mainsRoutes = require('../controllers/aggregation')


router.route("/").get(mainsRoutes.all);
router.route("/counts").get(mainsRoutes.countDocs);
router.route("/distincts").get(mainsRoutes.distinct);
router.route("/agg").get(mainsRoutes.getAggregate);
router.route("/proj").get(mainsRoutes.projections);
router.route("/index").get(mainsRoutes.cIndex);
router.route("/").post(mainsRoutes.creates);

module.exports = router;