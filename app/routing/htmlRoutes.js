// Dependencies
const path = require('path');

// Export HTML Routes

function htmlRoutes(app) {

    app.get("/", function (req, res) {
        console.log(`/ called`);
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log(`/survey called`);
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/AllFriends", function(req, res){
        console.log('/AllFriends Called'); 
        res.sendFile(path.join(__dirname, "../public/allfriends.html")); 
    })
};

module.exports = htmlRoutes; 
