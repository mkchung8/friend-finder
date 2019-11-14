// Dependencies 
const express = require("express");
const path = require("path");
const friends = require("./app/data/friends");

// Express App Configuration 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (Data Parsing)
app.use(express.json());                              
app.use(express.urlencoded({ extended: true }));      
app.use(express.static(__dirname + "public"));

// Routing Links
const apiRoutes = require("./app/routing/apiRoutes.js"); 
const htmlRoutes = require("./app/routing/htmlRoutes.js");

// Server Routing
apiRoutes(app); 
htmlRoutes(app); 

// Start Server Listening 
app.listen(PORT, function () {
    console.log(`App is listening on PORT: http://localhost:${PORT}`);
});