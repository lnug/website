---
layout: layout.hbs
title: LNUG returns,  22nd November 2022...
tags:
  - events
  - nextevent
date: "2022-11-22"
venue: beamery
registration: https://www.meetup.com/london-nodejs/events/288692461/
talks:
  - title: "Skip the CRUD: Rapid API development with Platformatic DB and Fastify"
    description: |
      Building an API typically starts with designing the API interface, integrating a database library, wiring up CRUD endpoints, adding request validation, documenting the API — the list goes on! It’s a lot of repetitive and time consuming work. I’ll show you how Platformatic DB enables you to you rapidly develop REST and GraphQL APIs with Node.js, helping you skip all of that painful groundwork. We’ll also explore how the Fastify framework it’s built on top of allows you to add custom functionality with familiar tools.

      Simon is an independent Node.js consultant and educator. Since the day he learnt HTML from a book in 1999, he’s been hooked on coding. He helps companies use Node.js to ship great products and also helps developers level up with Node.js through his blog. He’s the author of the book Express API Validation Essentials.

      *  Blog: [simonpland.com](https://simonplend.com/) 
      *  Twitter: [@simonplend](https://twitter.com/simonplend) 
      *  GitHub: [@simonplend](https://github.com/simonplend/)
    speaker:
      - name: "Simon Plenderleith"
        twitter: "simonplend"
        github: "simonplend"
        website: "https://simonplend.com/"
        avatar: https://avatars.githubusercontent.com/u/2773428?v=4
  - title: "JavaScript Runtimes on AWS Lambda"
    description: |
      Node.js is one of the key runtimes to develop applications on AWS Lambda. It was announced 13 years ago and is now considered to be  [boring technology](https://mcfunley.com/choose-boring-technology)  by many. But over the past few years, a few newer JavaScript runtimes have emerged, to solve some of the issues with Node.js.
      In this talk, we will walk through a few of the newer JavaScript runtimes, and do a comparison of both the developer experience and their performance when deployed on AWS Lambda.

      Boris is the founder of  [Baselime](https://baselime.io/) . Before this, he worked on back-end systems and infrastructure at multiple startups, where he was drawn to cloud-native and serverless technologies. He always ended up being the guardian of the logging and monitoring systems in the teams he joined.
      Now, he’s helping serverless teams automate their observability configurations with Observability as Code.

      - Twitter:  [@boristane](https://twitter.com/boristane) 
      - GitHub:  [@boristane](https://github.com/boristane)
    speaker:
      - name: "Boris Tane"
        twitter: "BorisTane"
        github: ""
        website: ""
        avatar: https://pbs.twimg.com/profile_images/1504721709408083980/pLDLOzAR_400x400.jpg
---

<div class="event-detail">
<h2>{{title}}
</h2>
<p>
<strong>🗓 {{ date  |  talkdateformat }}</strong>
</p>
<p>
<strong>
🏢 {{ venueHosts[venue].title }}
{{ venueHosts[venue].address }}
</strong>
</p>

<div >
<a class="lnug-ticket cta" href="{{registration}}" target="_blank">Register on meetup.com</a>
</div>
<div class="talks">
{% for talk in talks %}
<div class="talk">

<h3>{{talk.title}}
</h3>

{%for speaker in talk.speaker %}
<img src="{{speaker.avatar}}" class="bio-pic"/>

<h4>{{ speaker.name }}
(<a href="https://twitter.com/{{speaker.twitter}}">@{{ speaker.twitter }}
</a>)</h4>
{% endfor%}

{{talk.description}}

</div>
{% endfor %}

</div>

<div class="event-hosts">

### This event's hosts: {{ venueHosts[venue].title }}

#### {{ venueHosts[venue].address }}

{{ venueHosts[venue].info }}

</div>

</div>
