const express = require('express');
const router = express.Router();
const condiSchemas = require('../models/conditions');


router.all = async (req, res) => {
    condiSchemas.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
}

router.creates = async (req,res) => {
        const newItem = new condiSchemas({
            title: req.body.title,
            age: req.body.age,
            list: req.body.list,
            status: req.body.status,
            qty: req.body.qty,
        });
        newItem.save().then(item => res.json(item));
}

router.remove = async (req, res) => {
    condiSchemas.findByIdAndDelete(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({success:true})))
}

router.updates = async (req,res) => {
    condiSchemas.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            age: req.body.age,
            list: req.body.list,
            status: req.body.status,
            qty: req.body.qty,
    }, {new:true}).then(data=>res.send(data))
}

router.or = async (req, res) => {
    condiSchemas.find({ status: { $in: [ 'true'] } })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
}

router.orCon = async (req, res) => {
    condiSchemas.find({ $or: [{ status: 'true' }, { qty: { $gt: 30 } }] })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
}

router.and = async (req, res) => {
    condiSchemas.find({ status: 'true', age: { $lt: 40 } })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
}

router.orAnd = async (req, res) => {
    condiSchemas.find({
      status: 'true',
      $or: [{ qty: { $lt: 30 } }, { title: 'One' }]
    })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
}

router.findLevel = async (req, res) => {
  //Search an user level > 10
  condiSchemas.find({
    qty: {
      $exists: true,                    //check value exixt or not
      $gte: 10, $lt: 15               //gte = greater than or equal to
    }
  })
    .then(main => res.json(main));
}

module.exports = router;