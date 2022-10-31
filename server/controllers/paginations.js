const express = require('express');
const router = express.Router();
const pageSchema = require('../models/paginations');


router.getAll = async (req,res) => {
    const PAGE_SIZE = 3;
    const page = parseInt(req.query.page || "0");
    const total = await pageSchema.countDocuments({});
    const posts = await pageSchema.find({})
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * page);
        
    res.json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        posts,
    });
}

router.creates = async (req,res) => {
    const newItem = new pageSchema({
        text: req.body.text,
        title: req.body.title
    });

    newItem.save().then(item => res.json(item));
}


module.exports = router;