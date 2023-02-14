---
layout: layout.hbs
title: TRPC and Lightning Talks... 
tags: 
- events
- nextevent
date: "2023-02-22"
venue: ballys
registration: https://www.meetup.com/london-nodejs/events/291486309/
talks: 
- title: "Creating end-to-end typesafe APIs with tRPC"
  description: |
    [tRPC](https://trpc.io)  is an API layer utilising the full power of TypeScript to deliver fully typesafe APIs from the backend to the frontend. The newest version of tRPC has been released recently (v10) which brought a lot of revolutionary features such as go to definition from the frontend to the backend and a more robust API.

    In this talk I will talk about what tRPC is, comparison with GraphQL and REST, introducing V10 and the differences and improvements it builds upon from V9 as well as walking through creating a simple API with tPRC and connecting it to the frontend (Next.js).

    I'm an Egyptian web developer and final year computer science student at Royal Holloway University of London and have been into web development ever since I was about 14 years old. I'm also a contributor of tRPC having helped with the website redesign and implementation, og image generation, code refactors and much more.

    - [Twitter](https://twitter.com/ixahmedxii)

  speaker: 
    - name: "Ahmed Elsakaan"
      twitter: "ixahmedxii"
      github: "ixahmedxi"
      website: "https://www.elsakaan.dev"
      avatar: https://avatars.githubusercontent.com/u/20271968?v=4
- title: "Lightning talks ⚡️"
  description: |
    We have a few short, sharp, fun and insightful talks from our members lined up. [Add your name to the list](https://github.com/lnug/speakers/issues/199)! 5mins max on something node.js related. Watch this space for updates to the speaker list. 
  speaker: 
    - name: "LNUG members"
      twitter: "lnugorg"
      github: "lnug"
      website: "https://lnug.org"
      avatar: https://avatars.githubusercontent.com/u/4046959?s=400&v=4

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

