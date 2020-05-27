const path = require('path');
const friends = require('../data/friends'); 

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        console.log(`/api/friends get called`);
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var userData = req.body;
        console.log(userData);
        var userScores = userData.scores;
        var totalDifference;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            var length = currentFriend.score.length;
            totalDifference = 0;
            for (var j = 0; j < length; j++) {
                var currentFriendScore = currentFriend.score[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch.name1 = currentFriend.name[0];
                bestMatch.name2 = currentFriend.name[1]; 
                bestMatch.photo = currentFriend.pic;
                bestMatch.description = currentFriend.description; 
                bestMatch.specs = currentFriend.specs; 
            }
        }

        res.json(bestMatch); 
        console.log(bestMatch); 
    });
};

module.exports = apiRoutes; 
