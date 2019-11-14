const path = require('path'); 

module.exports = function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        console.log(`/api/friends called`);
        res.json(friends); 
    });
    
    app.get("/api/friends/:id", function (req, res) {
        console.log(`/api/friends/${req.params.id} called`); 
        res.send("/api/friend/:id"); 
    
        let friendID = req.params.id; 
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].id === friendID) {
                console.log(friends[i]);
                return res.json(friends[i]);
            }
        }
        return res.json(false); 
    });
}