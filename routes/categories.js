const express = require('express');
const router = express.Router();
const Category = require('./models/Category');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}, {_id: 0});
        if (categories) {
            res.json(categories);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;