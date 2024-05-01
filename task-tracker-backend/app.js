const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package
const taskRouter = require('./routes/tasks');

const app = express();
const PORT = 5000;

app.use(cors()); // Use cors middleware to allow all origins
app.use(express.json());
app.use('/tasks', taskRouter);

mongoose.connect('mongodb://localhost:27017/tasktracker1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
