module.exports.home = function(req, res) {
    return res.render('home', {
        title: "Home",
        categoryOption: ["Personal","Work","School","Other"],
    });
}

module.exports.createTask = function(req, res) {
    
}