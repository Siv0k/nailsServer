const express = require('express');
const router = express.Router();
const Tools = require('./models/tools');

router.get('/', async (req, res) => {
    try {
        const tools = await Tools.find({}, {_id: 0});

        if (tools) {
            res.json(tools);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;