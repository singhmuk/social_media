const express =require('express');
const router = express.Router();
const postSchema = require("../models/post");
const userSchema = require("../models/users");


router.createPost = async (req, res) => {
  const newPost = new postSchema(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
}

//update a post
router.updatePosts = async(req,res) => {
  try {
    const post = await postSchema.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

//delete a post
router.deletePost = async (req,res) => {
  try {
    const post = await postSchema.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

//like / dislike a post
router.like = async (req,res) => {
  try {
    const post = await postSchema.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

//get timeline posts
router.timeline = async (req,res) => {
  try {
    const currentUser = await userSchema.findById(req.body.userId);
    const userPosts = await postSchema.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return postSchema.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
}

router.getPosts = async (req, res) => {
  const posts = await postSchema.find().select('-password');
  res.json(posts)
}

router.getPostById = async (req,res) => {
  try {
    const post = await postSchema.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = router;
