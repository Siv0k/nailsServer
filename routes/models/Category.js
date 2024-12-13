const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    gelVarnishes: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    nozzles: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    giftVouchers: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    design: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    tools: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    liquids: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    lamps: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    },
    paintbrushes: {
        title: { type: String, required: true },
        image: { type: String, required: true },
    }
});

const Category = mongoose.model('items', categorySchema);

module.exports = Category;
