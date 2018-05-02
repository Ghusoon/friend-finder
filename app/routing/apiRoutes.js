var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        // newFriend is the user that filled out the survey
        var newFriend = req.body;


        var bestMatch = {};
        var bestMatchDifference = 40;
        for (var i = 0; i < newFriend.scores.length; i++) {

            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }


        var bestMatchIndex = 0;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var differenceOneScore = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                totalDifference += differenceOneScore;
            }

            //------------------------------------------------
            if (totalDifference < bestMatchDifference) {
                bestMatchIndex = i;
                bestMatchDifference = totalDifference;
            }
        }

        //=======================================


        // console.log(bestMatchIndex);


        // the best match index is used to get the best match data from the friends index
        bestMatch = friends[bestMatchIndex];
        friends.push(newFriend);
        // return the best match friend
        res.json(bestMatch);
    });

};