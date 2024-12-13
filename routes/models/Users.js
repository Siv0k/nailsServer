const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const Users = mongoose.model('users', usersSchema);

module.exports = Users;