const express = require('express');
const router = express.Router();
const GiftVouchers = require('./models/giftVouchers');

router.get('/', async (req, res) => {
    try {
        const giftVouchers = await GiftVouchers.find({}, {_id: 0});

        if (giftVouchers) {
            res.json(giftVouchers);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;