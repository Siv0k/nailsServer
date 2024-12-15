const mongoose = require('mongoose');

const paintbrushesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    cost: {type: String, required: true},
    volume: {type: String, required: true},
    expiryDate: {type: String, required: true},
    compound: {type: String, required: true},
    description: {type: String, required: true}
});

const Paintbrushes = mongoose.model('paintbrushes', paintbrushesSchema);

module.exports = Paintbrushes;