const express = require('express');
const router = express.Router();
const Liquids = require('./models/liquids');

router.get('/', async (req, res) => {
    try {
        const liquids = await Liquids.find({}, {_id: 0});

        if (liquids) {
            res.json(liquids);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;