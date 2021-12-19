const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());    //To parse req.body
app.use(express.static('assets'));

app.post('/create-task', function(req, res) {
    console.log(req.body);
    res.redirect('/');
});

app.listen(port, function(err) {
    if(err) {
        console.log(`Error on loading the server: ${err}`);
        return;
    }

    console.log(`Server started succesfully on port: ${port}`);
});