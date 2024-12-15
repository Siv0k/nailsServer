const express = require('express');
const router = express.Router();
const Paintbrushes = require('./models/paintbrushes');

router.get('/', async (req, res) => {
    try {
        const paintbrushes = await Paintbrushes.find({}, {_id: 0});

        if (paintbrushes) {
            res.json(paintbrushes);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;