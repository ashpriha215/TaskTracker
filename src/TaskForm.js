import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ id: Date.now(), name: taskName, description: taskDescription });
        setTaskName('');
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                fullWidth
            />
            <TextField
                label="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Add Task
            </Button>
        </form>
    );
};

export default TaskForm;
