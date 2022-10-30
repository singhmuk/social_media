const express = require('express');
const router = express.Router();
const Users = require('../models/increase');

router.all = async (req, res) => {
    const result = await Users.findOneAndUpdate({
      //find username, if not find just insert into db
      username: 'Frank',
    }, {$inc: { counts: 1}                            //increse counts by 1
    }, {
      upsert: true,                             //combination of update and insert
      new: true                                 //return updated document
    })
      .then(main => res.json(main));
    console.log('result', result);
}

router.decrease = async (req, res) => {
  const result = await Users.findOneAndUpdate({username: 'Frank'}, {
    $inc: {counts: -1}
      }, {upsert: true, new: true })
    .then(main => res.json(main));
  console.log('result', result);
}


router.creates = async = (req, res) => {
  try {
    const newItems = new Users({
      username: req.body.username,
    })

    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}

module.exports = router;