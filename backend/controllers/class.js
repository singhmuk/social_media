const express = require('express');
const router = express.Router();
var Class = require('../models/class');


router.all = async (req, res) => {
    Class.find({}).populate('students').exec((err, docs) => {
      //populate fields which want to pass
      if (err) throw (err);
      res.json(docs)
    })
};

router.createClass = async (req, res) => {
    let newClass = new Class();
    newClass.name = req.body.name;
    newClass.students = [];
    newClass.save((err) => {
      if (err) res.json({ "error": err });
      else res.json(newClass)
    })
};

router.updateClass = async (req, res) => {
    Class.findOneAndUpdate({ _id: req.params.id },
      { $push: { students: req.body.studentsId } }, { new: true }, (err, doc) => {
        //$push used to push data in students array, we push studentsId
        if (err) throw (err);
        else res.json(doc)
      })
};

module.exports = router;


