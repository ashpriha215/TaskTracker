import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    const [editTaskId, setEditTaskId] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [editedTaskDescription, setEditedTaskDescription] = useState('');

    const handleEdit = (task) => {
        setEditTaskId(task._id);
        setEditedTaskName(task.name);
        setEditedTaskDescription(task.description);
    };

    const handleUpdate = () => {
        console.log(editTaskId)
        console.log(editedTaskName)
        console.log(editedTaskDescription)
        updateTask(editTaskId, { name: editedTaskName, description: editedTaskDescription });
        setEditTaskId(null);
        setEditedTaskName('');
        setEditedTaskDescription('');
    };

    return (
        <List>
            {tasks.map(task => (
                <ListItem key={task._id}>
                    {editTaskId === task._id ? (
                        <>
                            <TextField
                                value={editedTaskName}
                                onChange={(e) => setEditedTaskName(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                value={editedTaskDescription}
                                onChange={(e) => setEditedTaskDescription(e.target.value)}
                                fullWidth
                            />
                            <Button onClick={handleUpdate} variant="contained" color="primary">
                                Save
                            </Button>
                        </>
                    ) : (
                        <>
                            <ListItemText primary={task.name} secondary={task.description} />
                            <IconButton onClick={() => handleEdit(task)} aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteTask(task._id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
