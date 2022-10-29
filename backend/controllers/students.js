const express = require('express');
const router = express.Router();
var Student = require('../models/students');

router.all = async (req, res) => {
    Student.find({}).exec((err, docs) => {
      if (err) throw (err);
      res.json(docs)
    })
};

router.createStudent = async (req, res) => {
    let student = new Student();
    student.name = req.body.name;
    student.age = req.body.age;
    student.subject = req.body.subject;
    student.save((err) => {
      if (err) res.json({ "error": err });
      else res.json(student)
    })
};

router.updateStudent = async (req, res) => {
    Student.findOneAndUpdate({ _id: req.param.id },
      { $set: { age: req.body.age } }, { new: true }, (err, doc) => {
        if (err) throw (err);
        else res.json(doc)
      })
};

module.exports = router;

// app.put('/students/:id', (req, res) => {
//   Student.findOneAndUpdate({ _id: req.param.id },
//     { $set: { age: req.body.age } }, { new: true }, (err, doc) => {
//       if (err) throw (err);
//       else res.json(doc)
//     })
// })