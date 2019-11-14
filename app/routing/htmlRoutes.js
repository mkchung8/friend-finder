// Dependencies
const path = require('path');

// Export HTML Routes
module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log(`/ called`);
        res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log(`/survey called`);
        res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });
}

