---
layout: layout.hbs
title: LNUG Meetup &#35;98 A Blast From The Past...
tags:
  - events
  - nextevent
date: "2023-04-26"
venue: makersacademy
registration: https://www.meetup.com/london-nodejs/events/292579196/
talks:
  - title: "Creating best-in-class developer experience for your SDKs"
    description: |
        In this talk, we will explore the best practices and strategies for building a best-in-class developer experience for a Node.js SDK. We'll cover the essential elements of an excellent developer experience, including documentation, fundamentalism, and lowering time to first call. We will also cover how to meet your users where they are. Knowing who you're building for is critical to developer experience. Follow along as I talk about my experience with the Momento Node.js SDK and how I worked on taking it from a poor DX to a great one. Whether you're a seasoned developer or new to the game, you'll come away from this talk with valuable insights and actionable strategies for building a world-class SDK.

        I am an AWS Serverless Hero and Ecosystem Engineer at Momento. I have over a decade of experience in tech and 4+ years in AWS serverless. My focus is on educating others on the nuance of serverless development, API design, and caching/data concepts. I write extensively on my personal blog, Ready, Set, Cloud, where I also send out a weekly serverless newsletter and host a podcast. When I'm not neck deep in serverless you can find me tending to my 39 chickens and turkeys and teaching my two girls some life lessons along the way. To follow my journey, you can find me on Twitter, LinkedIn, and GitHub at @allenheltondev.
    speaker:
      - name: "Allen Helton"
        twitter: "allenheltondev"
        github: "allenheltondev"
        avatar: https://pbs.twimg.com/profile_images/1323714999479635970/s141v1hV_400x400.jpg
  - title: "Fastify - a fast web framework with batteries attached and amazing TypeScript suppor"
    description: |
        There are more web frameworks for Node.js than Express. [Fastify](https://www.fastify.io/) is a great alternative to Express. It's blazingly fast. It's got a lot of features out of the box that require don't require installing additional package unlike other frameworks. And it's got an amazing TypeScript support.

        In this talk we'll build a REST API while exploring Fastify features. We'll also compare it with what we would have to do in other Node.js frameworks.

        Mike is an entrepreneurial software engineer. He's built products across the entire stack ranging from native Android apps to serverless ML pipelines. And now he's helping to build a brand new AI product for [Tractable](https://tractable.ai/). In his spare time he tries build a personal finance product - [Cashable](https://www.cashable.app/).

        - [Twitter](https://twitter.com/mikeborozdin)
        - [Blog](https://mikeborozdin.com/)
    speaker:
      - name: "Mike Borozdin"
        twitter: "mikeborozdin"
        github: "mikeborozdin"
        website: "https://mikeborozdin.com/"
        avatar: https://avatars.githubusercontent.com/u/1240215?v=4
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
