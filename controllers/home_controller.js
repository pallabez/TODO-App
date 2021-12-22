const db = require('../config/mongoose');
const Task = require('../models/task');

module.exports.home = function(req, res) {
    return res.render('home', {
        title: "Home",
        categoryOption: ["Personal","Work","School","Other"],
    });
}

module.exports.createTask = function(req, res) {
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
    }, function(err, newTask) {
        if(err) {
            console.log("Error in creating Task.");
            return;
        }
        res.redirect('back');
    });
}