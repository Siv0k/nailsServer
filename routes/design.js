const express = require('express');
const router = express.Router();
const Design = require('./models/design');

router.get('/', async (req, res) => {
    try {
        const design = await Design.find({}, {_id: 0});

        if (design) {
            res.json(design);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;