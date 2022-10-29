const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


router.postRecord = async (req, res) => {
  const { name, email, phone, messages, nameHistory, testScore } = req.body;
  try {
    const newContact = new Contact({
      name: name,
      email: email,
      phone: phone,
      messages: messages,
      nameHistory: nameHistory,
      testScore: testScore
    })

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
}

router.all = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ date: -1 });
    res.json(contacts);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
}


router.updates = async (req, res) => {
  const { name, email, phone, messages, nameHistory, testScore  } = req.body;
  try {
    let contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(400).json({ msg: 'Contact Not Found.' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.contactId,
      { $set: { name: name, email: email, phone: phone, messages: messages, 
                nameHistory: nameHistory, testScore: testScore } },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Contact Not Found.' });
    }

    console.error(err.message);
    res.status(500).send('Server Error.');
  }
}


router.remove = async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(400).json({ msg: 'Contact Not Found.' });
    }

    await Contact.findByIdAndDelete(req.params.contactId);
    res.json({ msg: 'Contact Deleted.' })
  }
  catch (err) {

    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Contact Not Found.' });
    }

    console.error(err.message);
    res.status(500).send('Server Error.');
  }
}


router.search = async (req, res) => {
  Contact.find({
    testScore: { $all: [10, 20, 30] }
  })
    .then(main => res.json(main))
}

router.size = async (req, res) => {
  Contact.find({
    testScore: { $size: 3 }
  })
    .then(main => res.json(main))
}

router.elementMatch = async (req, res) => {
  Contact.find({
    testScore: { $elemMatch: { $gt: 20 } }
  })
    .then(main => res.json(main))
}


module.exports = router;