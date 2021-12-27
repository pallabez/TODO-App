const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    date: {
        type: Date,
    },
    color: {
        type: String,
    }
});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;