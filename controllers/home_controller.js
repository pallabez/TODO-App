const db = require('../config/mongoose');
const Task = require('../models/task');

module.exports.home = function(req, res) {
    Task.find({}, function(err, task) {
        if(err) {
            console.log("Error in fetching data from DB: ", err);
            return;
        }
        return res.render('home', {
            task_list: task,
            category_option: ["Personal","Work","School","Other"],
        });
    });
}

module.exports.createTask = function(req, res) {
    console.log(req.body.date);
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
    }, function(err, newTask) {
        if(err) {
            console.log("Error in creating Task.");
            return;
        }
        res.redirect('/');
    });
}

module.exports.deleteTask = function(req, res) {
    let list = req.body.task;
    if(typeof(list) == "string") list = [list];
    
    for(let i of list) {
        Task.findByIdAndDelete(i, function(err) {
            if(err) {
                console.log("Error in deleting the task: ", i);
                return;
            }        
        });
    }   
    
    return res.redirect('back');
}