const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//updating a task
router.put('/:id', async (req, res) => {
    const taskId = req.params.id;
    const { name, description } = req.body;

    try {
        // Check if task with given ID exists
        const existingTask = await Task.findById(taskId);
        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update task fields
        existingTask.name = name;
        existingTask.description = description;

        // Save updated task
        const updatedTask = await existingTask.save();

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
