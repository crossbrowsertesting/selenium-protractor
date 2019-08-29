const request = require('request');
module.exports = function setScore(sessionId) {
    var result = { error: false, message: null }
    console.log(sessionId);
    if (sessionId) {
        var score = 'pass';
        request({
            method: 'PUT',
            uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + sessionId,
            body: {'action': 'set_score', 'score': score },
            json: true
        }, function(error, response, body) {
            if (error) {
                result.error = true;
                result.message = error;
            } else if (response.statusCode !== 200) {
                result.error = true;
                result.message = body;
            } else {
                result.error = false;
                result.message = 'success';
            }
        }).auth("YOUR_USERNAME","YOUR_AUTHKEY");
    } else {
        result.error = true;
        result.message = 'Session Id was not defined';

    }
    
    return;
}
