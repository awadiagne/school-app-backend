const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config();
const Files = require('edacy-files-walk');
const mongoose = require('mongoose');

const { PORT, DB_URL } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb+srv://schooladmin:Passer123@maincluster.sjkpnzc.mongodb.net/schoolapp?retryWrites=true&w=majority")
//mongoose.connect(DB_URL)
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

    app.listen(4002, () => {
        console.log('Server Listening on ' + 4002);
    })

}
