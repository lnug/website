var superagent = require('superagent');

module.exports = function(talk, next) {
    // get details about the speaker from github api..
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
          next(null,  talk);
        });
}
