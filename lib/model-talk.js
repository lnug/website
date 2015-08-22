var Encoder = require('node-html-encoder').Encoder;
var encoder = new Encoder('entity');
var marked = require('marked');

module.exports = function(talk) {
  return {
    // if assigned return assigned url if not fall back to the creator.
    // this is used later to fetch the name and avatar shown against the talk.
    apiSpeakerUrl: (talk.assignee) ? talk.assignee.url : talk.user.url,
    speakerUrl: (talk.assignee) ? talk.assignee.html_url : talk.user.html_url,
    title: encoder.htmlEncode(talk.title),
    description: marked(encoder.htmlEncode(talk.body)),
    milestone: talk.milestone.title
  };
};
