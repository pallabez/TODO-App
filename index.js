const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function(err) {
    if(err) {
        console.log(`Error on loading the server: ${err}`);
        return;
    }

    console.log(`Server started succesfully on port: ${port}`);
});