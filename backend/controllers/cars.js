const express = require('express');
const router = express.Router();
const carSchema = require('../models/cars');


router.getAll = async (req, res) => {
  carSchema.find({}, (err, listOfCars) => {
    if (err) throw err;
    res.json(listOfCars)
  })
}

router.creates = async (req,res) => {
    const newItem = new carSchema({
        name: req.body.name,
        carMake: req.body.carMake,
        model: req.body.model,
    });

    newItem.save().then(item => res.json(item));
}


module.exports = router;