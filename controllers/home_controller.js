const db = require('../config/mongoose');
const Task = require('../models/task');
const categoryOption = require('../assets/js/category-option');

module.exports.home = function(req, res) {
    Task.find({}, function(err, task) {
        if(err) {
            console.log("Error in fetching data from DB: ", err);
            return;
        }
        return res.render('home', {
            task_list: task,
            category_option: categoryOption.category,
        });
    });
}

module.exports.createTask = function(req, res) {
    let arr=req.body.category.split(" ");
    Task.create({
        description: req.body.description,
        category: arr[0],
        date: req.body.date,
        color: arr[1],
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
    if(!list) return res.redirect('back');

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