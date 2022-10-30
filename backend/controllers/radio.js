const express = require('express');
const router = express.Router();
const radio = require('../models/radio');


router.postRecord = async (req, res) => {
  const { name, type } = req.body;
  
    const newContact = new radio({
      name: name,
      type: type
    })

    const contact = await newContact.save();
    res.json(contact);
}

router.all = async (req, res) => {
    const newRadio = await radio.find({}).sort({ date: -1 });
    res.json(newRadio);
}


router.updates = async (req, res) => {
  const { name, type } = req.body;
  
    let radios = await radio.findById(req.params.id);
    if (!radios) {
      return res.status(400).json({ msg: 'Radio Not Found.' });
    }

    radios = await radio.findByIdAndUpdate(
      req.params.id,
      { $set: { name: name, type: type } },
      { new: true }
    );

    res.json(radios);
}


router.remove = async (req, res) => {
    let newRadio = await radio.findById(req.params.id);
    if (!newRadio) {
      return res.status(400).json({ msg: 'Radio Not Found.' });
    }

    await radio.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Radio Deleted.' })
}


module.exports = router;