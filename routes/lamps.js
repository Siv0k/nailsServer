const express = require('express');
const router = express.Router();
const Lamps = require('./models/lamps');

router.get('/', async (req, res) => {
    try {
        const lamps = await Lamps.find({}, {_id: 0});

        if (lamps) {
            res.json(lamps);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;