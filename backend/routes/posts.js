const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostById,
  timeline,
  createPost,
  updatePosts,
  deletePost,
  like
} = require('../controllers/posts');
const { protect, admin } = require('../middleware/authMiddleware.js');


router.route('/').get(getPosts);
router.route('/:id').get(getPostById);
router.route('/timeline/all').get(timeline);
router.route('/').post(createPost);
router.route('/:id').put(updatePosts );
router.route('/:id/like').put(like );
router.route('/:id').delete(deletePost);


module.exports = router;
