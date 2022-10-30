const express = require('express');
const router = express.Router();
const radioRoutes = require('../controllers/radio')

router.route("/").post(radioRoutes.postRecord);
router.route("/").get(radioRoutes.all);
router.route("/:id").put(radioRoutes.updates);
router.route("/:id").delete(radioRoutes.remove);


module.exports = router;