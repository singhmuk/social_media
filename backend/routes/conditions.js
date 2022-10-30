const express = require('express');
const router = express.Router();

const condRoutes = require('../controllers/conditions')


router.route("/").get(condRoutes.all);
router.route("/").post(condRoutes.creates);
router.route("/:id").put(condRoutes.updates);
router.route("/:id").delete(condRoutes.remove);
router.route("/or").get(condRoutes.or);
router.route("/orCon").get(condRoutes.orCon);
router.route("/and").get(condRoutes.and);
router.route("/orAnd").get(condRoutes.orAnd);
router.route("/level").get(condRoutes.findLevel);


module.exports = router;