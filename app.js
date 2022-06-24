const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config();
const Files = require('edacy-files-walk');
const mongoose = require('mongoose');

const { PORT, DB_URL } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose.connect(DB_URL)
.then(result => {
    console.log("Connection established with MongoDB");
    initApp();
})
.catch(err => {
    console.log("Error while trying to connect to MongoDB : " + err);
});

function initApp(){
      //AUTOLOAD ROUTES
    var routes = Files.walk(__dirname + '/api/modules');

    // IMPORT PUBLIC ROUTES
    for (var i = 0; i < routes.length; i++)
        if (routes[i].indexOf('public.routes') !== -1)
            require(routes[i])(app);


    // IMPORT PRIVATE ROUTES
    for (var i = 0; i < routes.length; i++)
        if (routes[i].indexOf('routes') !== -1 && routes[i].indexOf('public.routes') === -1)
            require(routes[i])(app);

    app.listen(PORT, () => {
        console.log('Server Listening on ' + PORT);
    })

}
