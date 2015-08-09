#!/usr/bin/env node

'use strict';

var superagent = require('superagent');
var fs = require('fs');
var marked = require('marked');
var async = require('async');

var archive = require('../lib/archive');

archive([
  {
    "speakerUrl": "https://api.github.com/users/tjanczuk",
    "title": "Rethinking backend with webtasks",
    "description": "<p>You are writing a mobile or HTML5 web application that needs just a little bit of a backend. Maybe you want to access MongoDB, send an SMS, or an e-mail. Do you really need to host your own Node.js service to run this small snippet of backend logic?</p>\n<p>In this talk I will take a hard look at the role of the backend in modern applications. I will introduce the concept of a <a href=\"https://webtask.io\">webtask</a> - a lightweight representation of backend logic that can safely be embedded in a client application. I will show how you can use modern container technologies based on CoreOS and Docker to build a generic, multi-tenant runtime for securely executing webtasks directly from a mobile or HTML5 application. You don’t need a backend to run backend code.</p>\n<p>This talk is based on lessons learned when building the Node.js sandboxing technology for internal use in our core operations at Auth0.</p>\n<p>Find out more:\n<a href=\"http://tomasz.janczuk.org/2015/04/rethinking-backend-with-webtasks.html\">Webtask concepts</a>\n<a href=\"https://github.com/auth0/wt-cli\">Webtask CLI</a>\n<a href=\"https://webtask.io\">Webtask playground</a>\n<a href=\"https://medium.com/aws-activate-startup-blog/sandboxing-code-in-the-era-of-containers-294edb3a674\">Webtask technology</a></p>\n",
    "milestone": "August 26th 2015",
    "img": "https://avatars.githubusercontent.com/u/822369?v=3",
    "handle": "tjanczuk",
    "name": "Tomasz Janczuk"
  },
  {
    "speakerUrl": "https://api.github.com/users/danjenkins",
    "title": "WebRTC Reborn",
    "description": "<p>WebRTC has had a real tough 3 or 4 years, and so have those working with it. Only a few short years ago, the development world were excited about WebRTC and proclaiming how awesome it was. </p>\n<p>You might have played with the technology a couple of years ago, only to find the extra infrastructure requirements were painful to implement and poorly documented. This probably left a bitter taste in your mouth, especially when things went wrong.</p>\n<p>Those in the industry have been working hard to sweeten the deal again - efforts have been made to bring WebRTC into the mainstream and as a result the technology is experiencing a rebirth. Thanks to those who have remained dedicated to improving the situation for those around them, WebRTC is finally starting to fulfil the original expectations that were had of it. Both the technology and the support networks have been built up to make experimenting with it again a pleasure, not a pain.</p>\n<p>WebRTC has grown up; in this talk you will learn how far along the tech has come, its current capabilities, the amazing things that people are starting to do with it, and how simple getting started with the new toolsets available.</p>\n",
    "milestone": "August 26th 2015",
    "img": "https://avatars.githubusercontent.com/u/243117?v=3",
    "handle": "danjenkins",
    "name": "Dan Jenkins"
  },
  {
    "speakerUrl": "https://api.github.com/users/pimterry",
    "title": "TypeScript will finally bring peace to your troubled soul",
    "description": "<p>You&#39;ve heard of TypeScript, but you&#39;re not sure if it&#39;s a good idea, and you&#39;ve never really seen it in action. TypeScript is powerful though, rapidly gaining momentum, and has a lot more to offer than just JS + classes. Let&#39;s take a proper look.</p>\n<p>In this talk, we&#39;ll dig a bit deeper and play around with some of the more interesting features TypeScript gives you. We&#39;ll walk through the extras that TypeScript provides and how they&#39;ll solve your every woe, learn a bit about where the types come in and why you care, and see how exactly you might put it into action on your next Node project.</p>\n",
    "milestone": "August 26th 2015",
    "img": "https://avatars.githubusercontent.com/u/1526883?v=3",
    "handle": "pimterry",
    "name": "Tim Perry"
  }
]);
return;

/**
    Returns true if talk (issues object from github api) is assigned and labelled as Accepted and Scheduled.
**/
function isReady(talk) {
  var isAccepted = talk.labels.filter(function(label) {
    return (label.name === 'Accepted & Scheduled');
  }).length;

  return (isAccepted);
}

function modelTalk(talk) {
  return {
    // if assigned return assigned url if not fall back to the creator.
    // this is used lated to fetch the name and avatar shown against the talk.
    speakerUrl: (talk.assignee) ? talk.assignee.url : talk.user.url,
    title: talk.title,
    description: marked(talk.body),
    milestone: talk.milestone.title
  };
}

console.log('Fetching data from https://api.github.com/repos/lnug/speakers/issues')
superagent.get('https://api.github.com/repos/lnug/speakers/issues')
  .end(function(error, data) {

    if (error) {
      error.message = 'Getting issues list failed' + error.message;
      throw error;
    }

    var acceptedTalks = data.body.filter(isReady).map(modelTalk);

    async.map(acceptedTalks, function(talk, next) {
      superagent
          .get(talk.speakerUrl)
          .end(function(error, data) {
            if (error) {
              error.message = 'Getting  ' +
                talk.speakerUrl + ' failed: ' +
                error.message;
              throw error;
            }

            talk.img = data.body.avatar_url;
            talk.handle = data.body.login;
            talk.name  = data.body.name;
            next(null,  talk);
          });
    }, function(err, completeAcceptedTalks) {

      if (err) {
        throw err;
      }

      fs.writeFile('./data/this-month.json', JSON.stringify(completeAcceptedTalks, null, 4), function() {
        console.log('Data file has been updated');
      });

      archive(completeAcceptedTalks);
    });
  });
