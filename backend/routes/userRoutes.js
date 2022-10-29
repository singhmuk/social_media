const express = require('express');
const router = express.Router();
const {
  login,
  register,
  getUsers,
  getUserById,
  getusername,
  remove
} = require('../controllers/userController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');


router.route('/').post(register).get(protect, admin, getUsers);
router.post('/login', login);
router.route('/usernme').get(getusername);
router.route('/:id').get(protect, admin, getUserById, );
router.route('/:id').delete(protect, admin, remove);


module.exports = router;
