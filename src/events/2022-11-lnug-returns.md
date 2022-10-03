---
layout: layout.hbs
title: LNUG returns,  9th November 2022... 
tags: 
- events
- nextevent
date: "2022-11-09"
venue: beamery
registration: https://www.meetup.com/london-nodejs/events/288692461/
talks: 
- title: "Skip the CRUD: Rapid API development with Platformatic DB and Fastify"
  description: |
    Building an API typically starts with designing the API interface, integrating a database library, wiring up CRUD endpoints, adding request validation, documenting the API — the list goes on! It’s a lot of repetitive and time consuming work. I’ll show you how Platformatic DB enables you to you rapidly develop REST and GraphQL APIs with Node.js, helping you skip all of that painful groundwork. We’ll also explore how the Fastify framework it’s built on top of allows you to add custom functionality with familiar tools.

    Simon is an independent Node.js consultant and educator. Since the day he learnt HTML from a book in 1999, he’s been hooked on coding. He helps companies use Node.js to ship great products and also helps developers level up with Node.js through his blog. He’s the author of the book Express API Validation Essentials.

    *  [Blog](https://simonplend.com/) 
    *  [Twitter](https://twitter.com/simonplend) 
    *  [GitHub](https://github.com/simonplend/) 
  speaker: 
    - name: "Simon Plenderleith"
      twitter: "simonplend"
      github: "simonplend"
      website: "https://simonplend.com/"
      avatar: https://avatars.githubusercontent.com/u/2773428?v=4
- title: "Serverless Transactional Outbox Pattern on AWS"
  description: (talk abstract coming)
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
<a class="lnug-ticket cta" href="{{registration}}" target="_blank">Register on meetup</a>
</div>
<div class="talks">
{% for talk in talks %}
<div class="talk">

<h4>{{talk.title}}
</h4>



{%for speaker in talk.speaker %}
<img src="{{speaker.avatar}}" class="bio-pic"/>
{{ speaker.name }}
(<a href="https://twitter.com/{{speaker.twitter}}">@{{ speaker.twitter }}
</a>)
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

