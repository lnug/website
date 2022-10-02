---
title: LNUG returns,  9th November 2022... 
tags: events
date: "2022-11-09"
venue: beamery
talks: 
- speaker: 
    - name: "Simon Plenderleith"
      twitter: ""
      github: ""
      website: ""
  title: "Skip the CRUD: Rapid API development with Platformatic DB and Fastify"
- speaker: 
    - name: "Boris Tane"
      twitter: "@BorisTane"
      github: ""
      website: ""
  title: "Serverless Transactional Outbox Pattern on AWS"
---

<strong>Date:</strong> {{ date  |  talkdateformat }}

<strong>Venue:</strong> {{venue}}

{% for talk in talks %}
<strong>{{talk.title}}</strong>
<div>{{talk.speaker}}</div>
{% endfor %}


<strong>Registration:</strong> 

## Talks
### Skip the CRUD: Rapid API development with Platformatic DB and Fastify
#### [Simon Plenderleith](https://simonplend.com/) 

<img src="https://avatars.githubusercontent.com/u/2773428?v=4" class="bio-pic"/>

Building an API typically starts with designing the API interface, integrating a database library, wiring up CRUD endpoints, adding request validation, documenting the API — the list goes on! It’s a lot of repetitive and time consuming work. I’ll show you how Platformatic DB enables you to you rapidly develop REST and GraphQL APIs with Node.js, helping you skip all of that painful groundwork. We’ll also explore how the Fastify framework it’s built on top of allows you to add custom functionality with familiar tools.

Simon is an independent Node.js consultant and educator. Since the day he learnt HTML from a book in 1999, he’s been hooked on coding. He helps companies use Node.js to ship great products and also helps developers level up with Node.js through his blog. He’s the author of the book Express API Validation Essentials.

*  [Blog](https://simonplend.com/) 
*  [Twitter](https://twitter.com/simonplend) 
*  [GitHub](https://github.com/simonplend/) 


{{ venueHosts[venue].title }}
{{ venueHosts[venue].info }}

