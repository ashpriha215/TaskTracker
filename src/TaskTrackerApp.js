import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios'; // Install axios: npm install axios

const TaskTrackerApp = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tasks'); // Update URL
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (newTask) => {
        try {
            await axios.post('http://localhost:5000/tasks', newTask); // Update URL
            fetchTasks(); // Refresh tasks after adding
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const deleteTask = async (taskId) => {
        console.log(taskId);
        try {
            await axios.delete(`http://localhost:5000/tasks/${taskId}`); // Update URL
            fetchTasks(); // Refresh tasks after deletion
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const updateTask = async (taskId, updatedTask) => {
        try {
            await axios.put(`http://localhost:5000/tasks/${taskId}`, updatedTask); // Update URL
            fetchTasks(); // Refresh tasks after update
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };
    
    return (
        <div>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
    );
};

export default TaskTrackerApp;
