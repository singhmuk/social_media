const express = require('express');
const router = express.Router();
const mainsRoutes = require('../../controllers/contacts')

router.route("/").post(mainsRoutes.postRecord);
router.route("/").get(mainsRoutes.all);
router.route("/:contactId").put(mainsRoutes.updates);
router.route("/:contactId").delete(mainsRoutes.remove);

router.route("/search").get(mainsRoutes.search);
router.route("/size").get(mainsRoutes.size);
router.route("/elMa").get(mainsRoutes.elementMatch);


module.exports = router;