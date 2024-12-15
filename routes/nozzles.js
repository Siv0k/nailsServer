const express = require('express');
const router = express.Router();
const Nozzles = require('./models/nozzles');

router.get('/', async (req, res) => {
    try {
        const nozzles = await Nozzles.find({}, {_id: 0});

        if (nozzles) {
            res.json(nozzles);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;