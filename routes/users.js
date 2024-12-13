const express = require('express');
const router = express.Router();
const Users = require('./models/Users');

router.post('/add', async (req, res) => {
    const { name, surname, email, password } = req.body;

    if (!name || !surname || !email || !password) {
        return res.status(400).json({ message: 'Все поля обязательны для заполнения' });
    }

    try {
        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
        }

        const newUser = new Users({ name, surname, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Пользователь успешно добавлен' });
    } catch (err) {
        res.status(500).json({ message: 'Ошибка при добавлении пользователя', error: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({}, {_id: 0});
        if (users) {
            res.json(users);
        } else {
            res.json({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;