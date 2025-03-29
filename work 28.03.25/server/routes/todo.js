const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/add', async (req, res) => {
    const { text } = req.body;
    try {
        const newTodo = new Todo({
            text,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const { completed, deleted } = req.query;
        const filter = {};

        if (completed !== undefined) {
            filter.completed = completed === 'true';
        }


        if (deleted !== undefined) {
            filter.deleted = deleted === 'true';
        }


        const todos = await Todo.find(filter);

        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/complete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndUpdate(id, { deleted: true });
        res.json({ message: 'Завдання відмічено як видалене' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
