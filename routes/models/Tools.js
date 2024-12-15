const mongoose = require('mongoose');

const toolsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    cost: {type: String, required: true},
    volume: {type: String, required: true},
    expiryDate: {type: String, required: true},
    compound: {type: String, required: true},
    description: {type: String, required: true}
});

const Tools = mongoose.model('tools', toolsSchema);

module.exports = Tools;