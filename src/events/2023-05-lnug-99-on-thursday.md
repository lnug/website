---
layout: layout.hbs
title: LNUG Meetup &#35;99 LNUG on a Thursday...
tags:
  - events
date: "2023-05-25"
venue: makersacademy
registration: https://www.meetup.com/london-nodejs/events/293343778/
talks:
  - title: "Destroying Client-Server Barriers using TypeScript"
    description: |
        Could you access the Prisma client on the frontend - without revealing any environment variables? This talk goes into my experimentation with Object proxies and websockets, allowing a developer to access server-side objects on the client, with type-safety.

        I'll walk through how the proxying works, the type-safety features, and everything else which makes the library works. https://rocketrpc.com

         Use Cases:
        - Define a type-safe API layer on the backend
        - Share objects like ORM clients with the frontend 

        I'm a frontend developer at Meta London, with an extreme interest in open source and building web apps for the future. I have 4 years of professional experience in total, but have been contributing via articles and open-source projects since 2016. You can find me on Twitter @thewritingdev.

    speaker:
      - name: "Akash Joshi"
        twitter: "thewritingdev"
        github: "akash-joshi"
        avatar: https://avatars.githubusercontent.com/u/22196279?v=4
  
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
