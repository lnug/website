var superagent = require('superagent');

// get details about the speaker from github api..
module.exports = function(talk, callback) {
    superagent
        .get(talk.apiSpeakerUrl)
        .end(function(error, data) {
          if (error) {
            error.message = 'Getting  ' +
              talk.speakerUrl + ' failed: ' +
              error.message;
            throw error;
          }

          talk.img = data.body.avatar_url;
          talk.handle = data.body.login;
          talk.name = data.body.name;
          callback(null,  talk);
        });
}
