const express = require('express');
const router = express.Router();
const GelVarnish = require('./models/GelVarnishes');

router.get('/', async (req, res) => {
    try {
        const gelVarnishes = await GelVarnish.find({}, {_id: 0});
        console.log(gelVarnishes)
        if (gelVarnishes) {
            res.json(gelVarnishes);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;