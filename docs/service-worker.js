(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'
var serviceWorker = require('speclate-service-worker')
var spec = require('../spec')
var version = '2.3'

serviceWorker(spec, version)

},{"../spec":14,"speclate-service-worker":12}],2:[function(require,module,exports){
module.exports=[
    {
        "date": "November 2017",
        "speakers": [
            {
                "name": "Adam Davis",
                "url": "https://github.com/admataz",
                "title": "&#9889;&#65039;MOAR lightning community node.js talks! &#9889;&#65039;"
            },
            {
                "name": "Bernard Baker",
                "url": "https://github.com/bernardbaker",
                "title": " Building an Electron application with NodeJS"
            },
            {
                "name": "Simon McManus",
                "url": "https://github.com/simonmcmanus",
                "title": "Taking LNUG offline"
            }
        ]
    },
    {
        "date": "October 2017",
        "speakers": [
            {
                "name": "Adam Davis",
                "url": "https://github.com/admataz",
                "title": "Node.js lightning talks"
            },
            {
                "name": "sp3c1",
                "url": "https://github.com/sp3c1",
                "title": "Scalable Scraping in Node and a bit of GO"
            }
        ]
    },
    {
        "date": "September 2017",
        "speakers": [
            {
                "name": null,
                "url": "https://github.com/robtweed",
                "title": "Having your Node.js Cake and Eating It Too"
            },
            {
                "name": "Alan Shaw",
                "url": "https://github.com/alanshaw",
                "title": "Hapi + Nes + MiniMongo for gloryful reactive apps"
            }
        ]
    },
    {
        "date": "August 2017",
        "speakers": [
            {
                "name": "Zaiste",
                "url": "https://github.com/zaiste",
                "title": "Rapid web development with Huncwot &amp; Marko"
            },
            {
                "name": null,
                "url": "https://github.com/BrunoGodefroy",
                "title": "Do not yield to javascript generators!"
            },
            {
                "name": "Anna Doubkova",
                "url": "https://github.com/lithin",
                "title": "Node microservices at Pizza Hut"
            }
        ]
    },
    {
        "date": "June 2017",
        "speakers": [
            {
                "name": "Irina Shestak",
                "url": "https://github.com/lrlna",
                "title": "knock-knock-who-there-file-compression-talk_FINAL_2.tar.trz.bz2.gz"
            },
            {
                "name": "Daniel Khan",
                "url": "https://github.com/danielkhan",
                "title": "Don&#39;t Let Just Node.js Take the Blame!"
            },
            {
                "name": "Submit your talk!",
                "url": "https://lnug.org/speak.html",
                "title": "Slot available"
            }
        ]
    },
    {
        "date": "May 2017",
        "speakers": [
            {
                "name": null,
                "url": "https://github.com/flyingunicorn222",
                "title": "Trading cryptocurrencies, forex, commodities stocks and more using node.js"
            },
            {
                "name": "Paul Jensen",
                "url": "https://github.com/paulbjensen",
                "title": "From LNUG presentation to published book - my tale of writing &quot;Cross Platform Desktop Applications&quot;"
            },
            {
                "name": "Will Munn",
                "url": "https://github.com/willm",
                "title": "Speeding up CI with node and docker"
            }
        ]
    },
    {
        "date": "April 2017",
        "speakers": [
            {
                "name": "Bruno Vieira",
                "url": "https://github.com/bmpvieira",
                "title": "How Bionode.io uses Node.JS Streams to handle genomic big data"
            },
            {
                "name": "Martin Wimpress",
                "url": "https://github.com/flexiondotorg",
                "title": "Automatically build and publish Node and Electron applications for Linux"
            },
            {
                "name": "Andrew Coleman",
                "url": "https://github.com/andrew-coleman",
                "title": "JSONata: A declarative syntax for querying your JSON data"
            }
        ]
    },
    {
        "date": "March 2017",
        "speakers": [
            {
                "name": "James Porter",
                "url": "https://github.com/jamesporter",
                "title": "&#39;Minecraft&#39; in VR in 30 lines of Javascript"
            },
            {
                "name": "artem avetisyan",
                "url": "https://github.com/artemave",
                "title": "Fullstack integration testing that doesn&#39;t suck"
            },
            {
                "name": "Tony Yates",
                "url": "https://github.com/tonyyates",
                "title": "Our future is in little hands"
            }
        ]
    },
    {
        "date": "February 2017",
        "speakers": [
            {
                "name": "B. August",
                "url": "https://github.com/TheBenji",
                "title": "Promises &amp; Generator in node.js"
            },
            {
                "name": "Marcel Cutts",
                "url": "https://github.com/MarcelCutts",
                "title": "Serverless and You"
            },
            {
                "name": "Jonny Arnold",
                "url": "https://github.com/jonnyarnold",
                "title": "Modelling with Pencils (and JavaScript)"
            }
        ]
    },
    {
        "date": "January 2017",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vTFIdJyDA-EJCOEYCVGO85F",
        "speakers": [
            {
                "name": "Andy Trevorah",
                "url": "https://github.com/trevorah",
                "title": "Native app tips to save your sanity",
                "video": "https://youtu.be/UpELu7rfRVk?list=PLam_80-FY3vTFIdJyDA-EJCOEYCVGO85F"
            },
            {
                "name": "Clement Hannicq",
                "url": "https://github.com/clementhannicq",
                "title": "GraphQL: an API convention that you will actually follow",
                "video": "https://youtu.be/Bv89egC_v6A?list=PLam_80-FY3vTFIdJyDA-EJCOEYCVGO85F"
            },
            {
                "name": "Clarkie",
                "url": "https://github.com/clarkie",
                "title": "A year with AWS",
                "video": "https://youtu.be/4yxHjeWvnR4?list=PLam_80-FY3vTFIdJyDA-EJCOEYCVGO85F"
            }
        ]
    },
    {
        "date": "November 2016",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vRiyq1PZW3iaT114EKdEIRL",
        "speakers": [
            {
                "name": "Andreas Møller",
                "url": "https://github.com/cullophid",
                "title": "Keep calm and curry on",
                "video": "https://youtu.be/4SGqCiU1_9E?list=PLam_80-FY3vRiyq1PZW3iaT114EKdEIRL"
            },
            {
                "name": "Stefano Vozza",
                "url": "https://github.com/svozza",
                "title": "Null Can&#39;t Hurt You Anymore",
                "video": "https://youtu.be/-FV3ia_SyxA?list=PLam_80-FY3vRiyq1PZW3iaT114EKdEIRL"
            },
            {
                "name": "James Chow (dsc)",
                "url": "https://github.com/jc888",
                "title": "Readable Microservices, with functional programming.",
                "video": "https://youtu.be/enXqi3jGHIs?list=PLam_80-FY3vRiyq1PZW3iaT114EKdEIRL"
            }
        ]
    },
    {
        "date": "October 2016",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vRuXxmiB74vjZzWZRAUPowu",
        "speakers": [
            {
                "name": "Booker ⚡",
                "url": "https://github.com/bookercodes",
                "title": "Write More Resilient JavaScript with Flow",
                "video": "https://youtu.be/RTtujG65DiE?list=PLam_80-FY3vRuXxmiB74vjZzWZRAUPowu"
            },
            {
                "name": "lazlojuly",
                "url": "https://github.com/lazlojuly",
                "title": "How to build a RESTful API",
                "video": "https://youtu.be/2SPBrczIzr0?list=PLam_80-FY3vRuXxmiB74vjZzWZRAUPowu"
            },
            {
                "name": "Mike MacCana",
                "url": "https://github.com/mikemaccana",
                "title": "Quick wins with node and Google AMP",
                "video": "https://youtu.be/0sVjKPTvOMA?list=PLam_80-FY3vRuXxmiB74vjZzWZRAUPowu"
            }
        ]
    },
    {
        "date": "September 2016",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vQm4oeCUsqhgIjcs3TojrbE",
        "speakers": [
            {
                "name": "Fox Reymann",
                "url": "https://github.com/foxreymann",
                "title": "Ace JavaScript Interviews: Scoping and Hoisting",
                "video": "https://youtu.be/hr61xyYSP6k?list=PLam_80-FY3vQm4oeCUsqhgIjcs3TojrbE"
            },
            {
                "name": "Loïc Faugeron",
                "url": "https://github.com/gnugat",
                "title": "Event Driven Architecture",
                "video": "https://youtu.be/BwqouUxn-bg?list=PLam_80-FY3vQm4oeCUsqhgIjcs3TojrbE"
            },
            {
                "name": "Tanzim",
                "url": "https://github.com/tanzim",
                "title": "I&#39;ve got swagger. Have you?",
                "video": "https://youtu.be/Dlo3e-0wB1E?list=PLam_80-FY3vQm4oeCUsqhgIjcs3TojrbE"
            }
        ]
    },
    {
        "date": "August 2016",
        "speakers": [
            {
                "name": "Daniel Magliola",
                "url": "https://github.com/dmagliola",
                "title": "Harnessing the full power of Redis"
            },
            {
                "name": "Bernard Baker",
                "url": "https://github.com/bernardbaker",
                "title": "NodeJS a professional case study"
            },
            {
                "name": "Submit your talk!",
                "url": "/speak.html",
                "title": "Slot available"
            }
        ]
    },
    {
        "date": "July 2016",
        "speakers": [
            {
                "name": "Dominique Guinard",
                "url": "https://github.com/domguinard",
                "title": "Node.js, the Web and the IoT"
            },
            {
                "name": "Mete Atamel",
                "url": "https://github.com/meteatamel",
                "title": "Node.js on Google Cloud"
            },
            {
                "name": "Mark Wubben",
                "url": "https://github.com/novemberborn",
                "title": "AVA: Futuristic JavaScript test runner"
            }
        ]
    },
    {
        "date": "June 2016",
        "speakers": [
            {
                "name": "Keith Woods",
                "url": "https://github.com/KeithWoods",
                "title": "Building Complex SPAs with React and ESP"
            },
            {
                "name": "Oliver Rumbelow",
                "url": "https://github.com/theninj4",
                "title": "NodeJS Failure in Production - a Blameless PostMortem"
            },
            {
                "name": "luca mezzalira",
                "url": "https://github.com/lucamezzalira",
                "title": "Isomorphic apps with Hapi.js and React"
            }
        ]
    },
    {
        "date": "May 2016",
        "speakers": [
            {
                "name": "Alex J Burke",
                "url": "https://github.com/alexjeffburke",
                "title": "Declaratively mocking HTTP"
            },
            {
                "name": "Samuel Rounce",
                "url": "https://github.com/srounce",
                "title": "Debugging Node.JS"
            },
            {
                "name": "Tanzim",
                "url": "https://github.com/tanzim",
                "title": "I&#39;ve got swagger. Have you?"
            }
        ]
    },
    {
        "date": "April 2016",
        "speakers": [
            {
                "name": "Nelson",
                "url": "https://github.com/nelsonic",
                "title": "Infinitely scalable chat"
            },
            {
                "name": "Michael Lennox",
                "url": "https://github.com/michaellennox",
                "title": "What learning to code in 12 weeks really means"
            },
            {
                "name": "Mike MacCana",
                "url": "https://github.com/mikemaccana",
                "title": "Shotguns and Scalpels: Cheerio and Casper at scale"
            }
        ]
    },
    {
        "date": "March 2016",
        "speakers": [
            {
                "name": "Simon Ordish",
                "url": "https://github.com/ordishs",
                "title": "Rethink DB and Node.js",
                "video": "https://youtu.be/idOuNyE6cXY"
            },
            {
                "name": "Mike Elsmore",
                "url": "https://github.com/ukmadlz",
                "title": "NoSQL is a lie",
                "video": "https://youtu.be/gECA-f78kWI"
            },
            {
                "name": "Tanzim",
                "url": "https://github.com/tanzim",
                "title": "Computing at scale. Why you should already be using AWS Lambda",
                "video": "https://youtu.be/r4a7aIBNlg0"
            }
        ]
    },
    {
        "date": "February 2016",
        "speakers": [
            {
                "name": "Guy Podjarny",
                "url": "https://github.com/guypod",
                "title": "Stranger Danger: addressing the security risk in npm dependencies"
            },
            {
                "name": "Shane Osbourne",
                "url": "https://github.com/shakyShane",
                "title": "Taming Asynchronous Programming with RxJS"
            },
            {
                "name": "Zhivko Siderov",
                "url": "https://github.com/zsid",
                "title": "How to build a real-time application with Node"
            }
        ]
    },
    {
        "date": "January 2016",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vSSYKqfaj0YB9X06Vi5un5j",
        "speakers": [
            {
                "name": "Oliver Rumbelow",
                "url": "https://github.com/hxoliverrumbelow",
                "title": "NodeJS Supercomputing?!",
                "video": "https://youtu.be/1mYl6v0Kzt0?list=PLam_80-FY3vSSYKqfaj0YB9X06Vi5un5j"
            },
            {
                "name": "Hugo Di Francesco",
                "url": "https://github.com/HugoDF",
                "title": "Going cross-platform with React: ~1 codebase, 3 platforms",
                "video": "https://youtu.be/b3wYEn2r_Ac?list=PLam_80-FY3vSSYKqfaj0YB9X06Vi5un5j"
            },
            {
                "name": "Phil Nash",
                "url": "https://github.com/philnash",
                "title": "2FA, WTF?",
                "video": "https://youtu.be/Wuc4Nh3lmSE?list=PLam_80-FY3vSSYKqfaj0YB9X06Vi5un5j"
            }
        ]
    },
    {
        "date": "November 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vQczbx9kqFfzbXoCiTAGKnm",
        "speakers": [
            {
                "name": "Ben Hall",
                "url": "https://github.com/BenHall",
                "title": "Scaling Node.js using Docker",
                "video": "https://youtu.be/nBBJh75SqS4?list=PLam_80-FY3vQczbx9kqFfzbXoCiTAGKnm"
            },
            {
                "name": "Fábio Santos",
                "url": "https://github.com/fabiosantoscode",
                "title": "A javascript to c++ transpiler!",
                "video": "https://youtu.be/6RKxkINidvk?list=PLam_80-FY3vQczbx9kqFfzbXoCiTAGKnm"
            },
            {
                "name": "Matt Forrester",
                "url": "https://github.com/forbesmyester",
                "title": "MVP Diagrams that can do things",
                "video": "https://youtu.be/qPCF4JUyllc?list=PLam_80-FY3vQczbx9kqFfzbXoCiTAGKnm"
            }
        ]
    },
    {
        "date": "October 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vT--2u55HKoZRAwfrHHP1aC",
        "speakers": [
            {
                "name": "Milo Mordaunt",
                "url": "https://github.com/bananaoomarang",
                "title": "Flux to Redux, Thinking with Data",
                "video": "https://youtu.be/n99Jhop6K8Y?list=PLam_80-FY3vT--2u55HKoZRAwfrHHP1aC"
            },
            {
                "name": "Alistair Stead",
                "url": "https://github.com/alistairstead",
                "title": "Full-stack BDD and its side effects",
                "video": "https://youtu.be/YP_YIH4GoGE?list=PLam_80-FY3vT--2u55HKoZRAwfrHHP1aC"
            },
            {
                "name": "Tom Gallacher",
                "url": "https://github.com/tomgco",
                "title": "White water streams",
                "video": "https://youtu.be/iBEjz38ppe4?list=PLam_80-FY3vT--2u55HKoZRAwfrHHP1aC"
            }
        ]
    },
    {
        "date": "September 2015",
        "speakers": [
            {
                "name": "Bodil Stokke",
                "url": "https://github.com/bodil",
                "title": "The Miracle of Generators"
            },
            {
                "name": "Hassy Veldstra",
                "url": "https://github.com/hassy",
                "title": "Load-testing for fun and profit"
            },
            {
                "name": "Jacob Burton",
                "url": "https://github.com/burtonjc",
                "title": "How Waffle.io separated its API from its core web app"
            }
        ]
    },
    {
        "date": "August 2015",
        "lanyrd": "http://lanyrd.com/2015/lnug-August/",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vQ-qa-AqFDWCAjGHhDRcKoQ",
        "speakers": [
            {
                "name": "Tomasz Janczuk",
                "url": "https://github.com/tjanczuk",
                "title": "Rethinking backend with webtasks",
                "video": "https://youtu.be/bhQ3Ov4niPs?list=PLam_80-FY3vQ-qa-AqFDWCAjGHhDRcKoQ"
            },
            {
                "name": "Dan Jenkins",
                "url": "https://github.com/danjenkins",
                "title": "WebRTC Reborn",
                "video": "https://youtu.be/tB9z4ZOoSwg?list=PLam_80-FY3vQ-qa-AqFDWCAjGHhDRcKoQ"
            },
            {
                "name": "Tim Perry",
                "url": "https://github.com/pimterry",
                "title": "TypeScript will finally bring peace to your troubled soul",
                "video": "https://youtu.be/UI9cgrMxGi0?list=PLam_80-FY3vQ-qa-AqFDWCAjGHhDRcKoQ"
            }
        ]
    },
    {
        "date": "July 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vSRhu1NfVXVN01xBX0Gf8EV",
        "speakers": [
            {
                "url": "https://github.com/jdNash",
                "name": "Joe Nash",
                "title": "Insert Token: Immersive UX with Tokenization",
                "video": "https://youtu.be/3pwsbVOxvYk?list=PLam_80-FY3vSRhu1NfVXVN01xBX0Gf8EV"
            },
            {
                "url": "https://github.com/mikeal",
                "name": "Mikeal Rogers",
                "title": "Node Foundation Q&A",
                "video": "https://youtu.be/AIr_dkcql9E?list=PLam_80-FY3vSRhu1NfVXVN01xBX0Gf8EV"
            },
            {
                "url": "https://github.com/sofer",
                "name": "Dan Sofer",
                "title": "Founders & Coders",
                "video": "https://youtu.be/3oXhmHDDEro?list=PLam_80-FY3vSRhu1NfVXVN01xBX0Gf8EV"
            }
        ],
        "id": 44,
        "lanyrd": "http://lanyrd.com/2015/lnug-July/"
    },
    {
        "date": "June 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vSVQxWpSQD5vi8ZSgtQUcLB",
        "speakers": [
            {
                "url": "https://github.com/hxoliverrumbelow",
                "name": "Oliver Rumbelow",
                "title": "Blowing out the LAMP",
                "video": "https://youtu.be/L5JO1KCLGX4?list=PLam_80-FY3vSVQxWpSQD5vi8ZSgtQUcLB"
            },
            {
                "url": "https://github.com/mikemaccana",
                "name": "Mike MacCana",
                "title": "Deploying and running Node apps in 2015",
                "video": "https://youtu.be/ivzVLM1Zknw?list=PLam_80-FY3vSVQxWpSQD5vi8ZSgtQUcLB"
            },
            {
                "url": "https://github.com/maxwellito",
                "name": "Max Dulduc",
                "title": "Liwe, an open source remote control for WebApps",
                "video": "https://youtu.be/Vr9sH9fZN-8?list=PLam_80-FY3vSVQxWpSQD5vi8ZSgtQUcLB"
            }
        ],
        "id": 42,
        "lanyrd": "http://lanyrd.com/2015/lnug-June/"
    },
    {
        "date": "May 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vQ1Z6PXeG4xOuwDFtGuSBmh",
        "speakers": [
            {
                "url": "https://github.com/ohjames",
                "name": "James Pike",
                "title": "The state of web asset pipelines and the description of a new pipeline that combines the best of all worlds."
            },
            {
                "url": "https://github.com/sideshowcoder",
                "name": "Philipp Fehre",
                "title": "Server mocking with canned"
            },
            {
                "url": "http://twitter.com/matteofigus",
                "name": "Matteo Figus",
                "title": "OpenComponents as microservices in the front-end world",
                "video": "https://youtu.be/rrEsXvoU0Go?list=PLam_80-FY3vQ1Z6PXeG4xOuwDFtGuSBmh"
            }
        ],
        "id": 41,
        "lanyrd": "http://lanyrd.com/2015/lnug-May/"
    },
    {
        "date": "April 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vQ9tBPgllITvduAI_g86YYA",
        "speakers": [
            {
                "url": "https://github.com/achingbrain",
                "name": "Alex Potsides",
                "title": "Guvnor: running your processes like a boss",
                "video": "https://youtu.be/LZEShD2fOzo?list=PLam_80-FY3vQ9tBPgllITvduAI_g86YYA"
            },
            {
                "url": "https://github.com/jamesallardice",
                "name": "James Allardice",
                "title": "Writing and publishing ES6 code today",
                "video": "https://youtu.be/w0mGM5rFqeA?list=PLam_80-FY3vQ9tBPgllITvduAI_g86YYA"
            },
            {
                "url": "https://github.com/simonmcmanus",
                "name": "Simon McManus",
                "title": "Progressive Enhancement Strategies",
                "video": "https://youtu.be/KPrC-udTDi8?list=PLam_80-FY3vQ9tBPgllITvduAI_g86YYA"
            }
        ],
        "id": 41,
        "lanyrd": "http://lanyrd.com/2015/lnug-April/"
    },
    {
        "date": "March 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vSpdpbWLhHF7sdS0GIfGkJW",
        "speakers": [
            {
                "url": "https://github.com/Globegitter",
                "name": "Markus Padourek",
                "title": "Benefits of using Convention over Configuration",
                "video": "https://youtu.be/uVtXNNmvYwg?list=PLam_80-FY3vSpdpbWLhHF7sdS0GIfGkJW"
            },
            {
                "url": "https://github.com/rosskukulinski",
                "name": "Ross Kukulinski",
                "title": "Building NodeJS Applications with Docker & CoreOS",
                "video": "https://youtu.be/s0qfSevw2UU?list=PLam_80-FY3vSpdpbWLhHF7sdS0GIfGkJW"
            },
            {
                "url": "https://github.com/alanshaw",
                "name": "Alan Shaw",
                "title": "Super simple service health monitoring with upmon",
                "video": "https://youtu.be/hC0xwgUpz6M?list=PLam_80-FY3vSpdpbWLhHF7sdS0GIfGkJW"
            }
        ],
        "id": 39,
        "lanyrd": "http://lanyrd.com/2015/lnug-March/"
    },
    {
        "date": "February 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vTopJJMuZ1iM-Uo0Omk72Ai",
        "speakers": [
            {
                "url": "https://github.com/ForbesLindesay",
                "name": "Forbes Lindesay",
                "title": "Everything you didn't dare asking about jade",
                "video": "https://youtu.be/m7oosgdDdSY?list=PLam_80-FY3vTopJJMuZ1iM-Uo0Omk72Ai"
            },
            {
                "url": "https://github.com/lukebond",
                "name": "Luke Bond",
                "title": "Paz: A Simple Docker PaaS Written in Node.js",
                "video": "https://youtu.be/cQOPoDmkFg8?list=PLam_80-FY3vTopJJMuZ1iM-Uo0Omk72Ai"
            },
            {
                "url": "https://github.com/basicallydan",
                "name": "Daniel Hough",
                "title": "I'm a Node Module Maintainer (And so can you!)",
                "video": "https://youtu.be/rCM2paoike0?list=PLam_80-FY3vTopJJMuZ1iM-Uo0Omk72Ai"
            }
        ],
        "id": 38,
        "lanyrd": "http://lanyrd.com/2015/lnug-February/"
    },
    {
        "date": "January 2015",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vQR3NZJAUNeVdtYTYuP1qlS",
        "speakers": [
            {
                "url": "https://twitter.com/flomotlik",
                "name": "Florian Motlik",
                "title": "Servers Are Dead, Long Live the Service",
                "video": "https://youtu.be/bU5Dre5MrI8?list=PLam_80-FY3vQR3NZJAUNeVdtYTYuP1qlS"
            },
            {
                "url": "https://twitter.com/rosskukulinski",
                "name": "Ross Kukulinski",
                "title": "What to expect when expecting IOJS",
                "video": "https://youtu.be/JhEf6JngpdQ?list=PLam_80-FY3vQR3NZJAUNeVdtYTYuP1qlS"
            },
            {
                "url": "https://twitter.com/fmsf303",
                "name": "Francisco Ferreira",
                "title": "Javascript Craftsmanship",
                "video": "https://youtu.be/g-1cefQvFYc?list=PLam_80-FY3vQR3NZJAUNeVdtYTYuP1qlS"
            },
            {
                "url": "https://twitter.com/pimterry",
                "name": "Tim Perry",
                "title": "Web Components & Microservices Are The Same Thing",
                "video": "https://youtu.be/EivKc3HpElQ?list=PLam_80-FY3vQR3NZJAUNeVdtYTYuP1qlS"
            }
        ],
        "id": 37,
        "lanyrd": "http://lanyrd.com/2015/lnug-january/"
    },
    {
        "date": "November 2014",
        "speakers": [
            {
                "url": "https://twitter.com/tomgco",
                "name": "Tom Gallacher",
                "title": "Async: the battle"
            },
            {
                "url": "https://twitter.com/shapeshed",
                "name": "George Ornbo",
                "title": "Realtime Node.js from the trenches"
            },
            {
                "url": "https://twitter.com/tomcartwrightuk",
                "name": "Tom Cartwright",
                "title": "Peer connect all the things"
            }
        ],
        "id": 36,
        "lanyrd": "http://lanyrd.com/2014/lnug-november/"
    },
    {
        "date": "October 2014",
        "playlist-url": "https://www.youtube.com/playlist?list=PLam_80-FY3vShsm-u6lmGrgHCYPVv4wiX",
        "speakers": [
            {
                "url": "https://twitter.com/ischi",
                "name": "Philipp Fehre",
                "title": "JSON throughout the Stack",
                "video": "https://youtu.be/mZKp3xuzKeQ?list=PLam_80-FY3vShsm-u6lmGrgHCYPVv4wiX"
            },
            {
                "url": "https://twitter.com/ben_hall",
                "name": "Ben Hall",
                "title": "Node Anti-patterns",
                "video": "https://youtu.be/YyR4PdX-1O4?list=PLam_80-FY3vShsm-u6lmGrgHCYPVv4wiX"
            },
            {
                "url": "https://twitter.com/substack",
                "name": "James Halliday",
                "title": "Data Wizzard",
                "video": "https://youtu.be/ID8hP4aXdBg?list=PLam_80-FY3vShsm-u6lmGrgHCYPVv4wiX"
            }
        ],
        "id": 35,
        "lanyrd": "http://lanyrd.com/2014/lnug-october/"
    },
    {
        "date": "September 2014",
        "speakers": [
            {
                "url": "https://twitter.com/racekjakub",
                "name": "Jakub Racek",
                "title": "Scanner and Printer Pi with Node sides"
            },
            {
                "url": "https://twitter.com/fmsf303",
                "name": "Francisco Ferreira",
                "title": "JavaScript, Java and Dart! Asynch all around us."
            }
        ],
        "id": 34,
        "lanyrd": "http://lanyrd.com/2014/lnug-september/"
    },
    {
        "date": "August 2014",
        "speakers": [
            {
                "url": "https://twitter.com/forbesmyester",
                "name": "Matt Forrester",
                "title": "Offline Apps and Data Synchronization"
            },
            {
                "url": "https://twitter.com/ischi",
                "name": "Philipp Fehre",
                "title": "node.js and native code"
            },
            {
                "url": "https://twitter.com/adam_baldwin",
                "name": "Adam Baldwin",
                "title": "node security"
            }
        ],
        "id": 33,
        "lanyrd": "http://lanyrd.com/2014/lnug-august/"
    },
    {
        "date": "July 2014",
        "speakers": [
            {
                "url": "https://twitter.com/dscape",
                "name": "Nuno Job",
                "title": "process.env.NODE_ENV === 'PRODUCTION' for all your 'webscale' apps!"
            },
            {
                "url": "https://twitter.com/sublimino",
                "name": "Andrew Martin",
                "title": "Deployment Pipelines: Disproving the Big Bang"
            },
            {
                "url": "https://twitter.com/lukebond",
                "name": "Luke Bond",
                "title": "ZeroMQ with Node"
            }
        ],
        "id": 32,
        "lanyrd": "http://lanyrd.com/2014/lnug-july/"
    },
    {
        "date": "June 2014",
        "speakers": [
            {
                "url": "https://twitter.com/cutandpastey",
                "name": "Jon Parsons",
                "title": "Isomorphic Javascript What, Why and How"
            },
            {
                "url": "https://twitter.com/paulbjensen",
                "name": "Paul Jensen",
                "title": "Building desktop apps with Node Webkit"
            },
            {
                "url": "https://twitter.com/jna_sh",
                "name": "Joe Nash",
                "title": "Functional programming on the clientside with Fay and Elm"
            }
        ],
        "id": 31,
        "lanyrd": "http://lanyrd.com/2014/lnug-june/"
    },
    {
        "date": "May 2014",
        "speakers": [
            {
                "url": "https://twitter.com/thomasheymann",
                "name": "Thomas Heymann",
                "title": "Slicing it up: How we built a micro-service for rendering shared client/server-side one-page apps"
            },
            {
                "url": "https://twitter.com/malditogeek",
                "name": "Mauro Pompilio",
                "title": "VMUX 2.0"
            },
            {
                "url": "https://twitter.com/yrezgui",
                "name": "Yacine Rezgui",
                "title": "Develop HTML5 mobile apps in 2014"
            }
        ],
        "id": 30,
        "lanyrd": "http://lanyrd.com/2014/lnug-may/"
    },
    {
        "date": "April 2014",
        "speakers": [
            {
                "url": "https://twitter.com/Jermolene",
                "name": "Jeremy Ruston",
                "title": "A Tale of Two Hosts: rebooting TiddlyWiki for Node.js and the browser"
            },
            {
                "url": "https://twitter.com/simonmcmanus",
                "name": "Simon McManus",
                "title": "Home Automation With Javascript"
            },
            {
                "url": "https://twitter.com/ismasan",
                "name": "Ismael Celis",
                "title": "Streaming downloads proxy service with Node.js"
            }
        ],
        "id": 29,
        "lanyrd": "http://lanyrd.com/2014/lnug-april/"
    },
    {
        "date": "March 2014",
        "speakers": [
            {
                "url": "https://twitter.com/timruffles",
                "name": "Tim Ruffles",
                "title": "NodeUP Podcast Live: featuring Geoff Wagstaff, Forbes Lindesay, Tancredi Trugenberge,Remy Sharp"
            }
        ],
        "id": 28,
        "lanyrd": "http://lanyrd.com/2014/lnug-march/"
    },
    {
        "date": "February 2014",
        "speakers": [
            {
                "url": "http://twitter.com/tomgco",
                "name": "Tom Gallacher",
                "title": "Easy CPU profiling in Nodejs"
            },
            {
                "url": "http://twitter.com/ForbesLindesay",
                "name": "Forbes Lindesay",
                "title": "An introduction to the Jade templating language"
            },
            {
                "url": "http://twitter.com/matteofigus",
                "name": "Matteo Figus",
                "title": "Performance tests on APIs using Node.js"
            },
            {
                "url": "http://twitter.com/jaimefjorge",
                "name": "Jaime Jorge",
                "title": "Node in Codacy"
            }
        ],
        "id": 27,
        "lanyrd": "http://lanyrd.com/2014/lnug-february/"
    },
    {
        "date": "January 2014",
        "speakers": [
            {
                "url": "http://twitter.com/alexHacked",
                "name": "Alex Roche",
                "title": "NodeJS & Arduino; What, Why & How"
            },
            {
                "url": "http://twitter.com/alexandrosM",
                "name": "Alexandros Marinos",
                "title": "Resin.io - JS on your Raspberry Pi with a simple 'git push'"
            },
            {
                "url": "http://twitter.com/rowanmanning",
                "name": "Rowan Manning",
                "title": "UX For Your Node Modules"
            }
        ],
        "id": 26,
        "lanyrd": "http://lanyrd.com/2014/lnug-january/"
    },
    {
        "date": "November 2013",
        "speakers": [
            {
                "url": "http://twitter.com/tfoureur",
                "name": "Tristan Foureur",
                "title": "Megatron: Javascript-to-javascript compiler"
            },
            {
                "url": "http://twitter.com/NoWayJA",
                "name": "Jonathan Anthony",
                "title": "Selling Javascript to Clients"
            },
            {
                "url": "http://twitter.com/_alanshaw",
                "name": "Alan Shaw",
                "title": "Hoodie plugins"
            }
        ],
        "id": 25,
        "lanyrd": "http://lanyrd.com/2013/lnug-november/"
    },
    {
        "date": "October 2013",
        "speakers": [
            {
                "url": "http://twitter.com/rem",
                "name": "Remy Sharp",
                "title": "The Bits Behind JS Bin"
            },
            {
                "url": "http://twitter.com/dwynne",
                "name": "David Wynne",
                "title": "Something witty about DocPad and SSGs"
            },
            {
                "url": "http://twitter.com/ForbesLindesay",
                "name": "Forbes Lindesay",
                "title": "Dissecting a real world node.js application: esdiscuss.org"
            }
        ],
        "id": 24,
        "lanyrd": "http://lanyrd.com/2013/lnug-october/"
    },
    {
        "date": "September 2013",
        "speakers": [
            {
                "url": "http://twitter.com/ErisDS",
                "name": "Hannah Wolfe",
                "title": "Ghost, Just a Blogging Platform"
            },
            {
                "url": "http://twitter.com/tgrall",
                "name": "Tugdual Grall",
                "title": "Building a node application with Couchbase, Node and Angular"
            },
            {
                "url": "http://twitter.com/knolleary",
                "name": "Nick O'Leary",
                "title": "Node-RED, a visual tool for wiring the Internet of Things"
            }
        ],
        "id": 23,
        "lanyrd": "http://lanyrd.com/2013/lnug-september/"
    },
    {
        "date": "August 2013",
        "speakers": [
            {
                "url": "http://twitter.com/richmarr",
                "name": "Richard Marr",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/kittylyst",
                "name": "Ben Evans",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/rtweed",
                "name": "Rob Tweed",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/olizilla",
                "name": "Oli Evans",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/alexHacked",
                "name": "Alex Roche",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/paul_tanner",
                "name": "Paul Tanner",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/_alanshaw",
                "name": "Alan Shaw",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/bjnortier",
                "name": "Benjamin Nortier",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/danielepolencic",
                "name": "Daniele Polencic",
                "title": "Lightning Talk"
            },
            {
                "url": "http://twitter.com/thattommyhall",
                "name": "Tommy Hall",
                "title": "Lightning Talk"
            }
        ],
        "id": 22,
        "lanyrd": "http://lanyrd.com/2013/lnug-august/"
    },
    {
        "date": "July 2013",
        "speakers": [
            {
                "url": "http://twitter.com/timruffles",
                "name": "Tim Ruffles",
                "title": "No more pyramids - Approaches to keeping callbacks clean"
            },
            {
                "url": "http://twitter.com/teabass",
                "name": "Andrew Nesbitt",
                "title": "Node.js + Quadcopters - What could go wrong?"
            },
            {
                "url": "http://twitter.com/joe_stant",
                "name": "Joe Stanton and David Wynne",
                "title": "BBC Now that's what I call Node"
            },
            {
                "url": "http://twitter.com/dwynne",
                "name": "David Wynne and Joe Stanton",
                "title": "BBC Now that's what I call Node"
            }
        ],
        "id": 21,
        "lanyrd": "http://lanyrd.com/2013/lnug-july/"
    },
    {
        "date": "June 2013",
        "speakers": [
            {
                "url": "http://twitter.com/adamyeats",
                "name": "Adam Yeats",
                "title": "Promises in Node.js"
            },
            {
                "url": "http://twitter.com/malditogeek",
                "name": "Mauro Pompilio",
                "title": "WebRTC 101"
            },
            {
                "url": "http://twitter.com/antonwhalley",
                "name": "Anton Whalley",
                "title": "Thoughts on LevelDB"
            }
        ],
        "id": 20,
        "lanyrd": "http://lanyrd.com/2013/lnug-june/"
    },
    {
        "date": "May 2013",
        "speakers": [
            {
                "url": "http://twitter.com/shaundunne",
                "name": "Shaun Dunne",
                "title": "Grunt your way to Glory"
            },
            {
                "url": "http://twitter.com/MathieuLoutre",
                "name": "Mathieu Triay",
                "title": "Up and running with Hapi"
            },
            {
                "url": "http://twitter.com/suprememoocow",
                "name": "Andrew Newdigate and Mike Bartlett ",
                "title": "Live Collections with Backbone and Faye"
            },
            {
                "url": "http://twitter.com/mydigitalself",
                "name": "Mike Bartlett and Andrew Newdigate",
                "title": "Live Collections with Backbone and Faye"
            }
        ],
        "id": 19,
        "lanyrd": "http://lanyrd.com/2013/lnug-may/"
    },
    {
        "date": "April 2013",
        "speakers": [
            {
                "url": "http://twitter.com/insertcoffee",
                "name": "Peter Johnson and Tancredi Trugenberge",
                "title": "All your base are belong to us"
            },
            {
                "url": "http://twitter.com/Liquidimage_",
                "name": "Tancredi Trugenberge and Peter Johnson",
                "title": "All your base are belong to us"
            },
            {
                "url": "http://twitter.com/_alanshaw",
                "name": "Alan Shaw",
                "title": "Node dependency management - David is watching"
            }
        ],
        "id": 18,
        "lanyrd": "http://lanyrd.com/2013/lnug-april/"
    },
    {
        "date": "March 2013",
        "speakers": [
            {
                "url": "http://twitter.com/bahulneel",
                "name": "Bahul Neel Upadhyaya",
                "title": "To infinity and beyond! Protocols and lazy sequences in node #2"
            },
            {
                "url": "http://twitter.com/simonmcmanus",
                "name": "Simon McManus",
                "title": "Building Roca style web apps with Sizlate and Node.js"
            }
        ],
        "id": 17,
        "lanyrd": "http://lanyrd.com/2013/lnug-march/"
    },
    {
        "date": "February 2013",
        "speakers": [
            {
                "url": "http://twitter.com/henryoswald",
                "name": "Henry Oswald",
                "title": "Practical patterns for building and testing Node.js apps"
            },
            {
                "url": "http://twitter.com/dshaw",
                "name": "Daniel Shaw",
                "title": "Adventures in Production Node.js"
            },
            {
                "url": "http://twitter.com/bfirsh",
                "name": "Ben Firshman",
                "title": "The future of single-page apps"
            },
            {
                "url": "http://twitter.com/lloydwatkin",
                "name": "Lloyd Watkin",
                "title": "pinitto.me: what, why, how"
            }
        ],
        "id": 16,
        "lanyrd": "http://lanyrd.com/2013/lnug-february/"
    },
    {
        "date": "January 2013",
        "speakers": [
            {
                "url": "http://twitter.com/bahulneel",
                "name": "Bahul Neel Upadhyaya",
                "title": "To infinity and beyond! Protocols and lazy sequences in node."
            },
            {
                "url": "http://twitter.com/darachennis",
                "name": "Darach Ennis",
                "title": "Embedded Event Processing with Streams & Pipes"
            },
            {
                "url": "http://twitter.com/pdp",
                "name": "Petko D. Petkov",
                "title": "Node.js Security"
            }
        ],
        "id": 15,
        "lanyrd": "http://lanyrd.com/2013/lnug-january/"
    },
    {
        "date": "November 2012",
        "speakers": [
            {
                "url": "http://twitter.com/ludvik_pl",
                "name": "Paweł Ledwoń",
                "title": "Benchmarking Pusher using Node.js"
            },
            {
                "url": "http://twitter.com/thatshems",
                "name": "Henrique Matias",
                "title": "Toasted coffee for the lazy"
            },
            {
                "url": "http://twitter.com/domenicdenicola",
                "name": "Domenic Denicola",
                "title": "JavaScript on the Desktop"
            },
            {
                "url": "http://twitter.com/thattommyhall",
                "name": "Tom Hall",
                "title": "Sound Doodle, A Node Knockout project"
            }
        ],
        "id": 14,
        "lanyrd": "http://lanyrd.com/2012/lnug-november/"
    },
    {
        "date": "October 2012",
        "speakers": [
            {
                "url": "http://twitter.com/serby",
                "name": "Paul Serby",
                "title": "The future of wearable computing with node.js, Raspberry PI and bowler hats"
            },
            {
                "url": "http://twitter.com/teabass",
                "name": "Andrew Nesbitt",
                "title": "Integrating Node.js into your existing technology stack"
            },
            {
                "url": "http://twitter.com/insertcoffee",
                "name": "Peter Johnson and Tancredi Trugenberge",
                "title": "Writing real-time games in coffeescript with node.js + socket.io & HTML5"
            },
            {
                "url": "http://twitter.com/Liquidimage_",
                "name": "Tancredi Trugenberge and Peter Johnson",
                "title": "Writing real-time games in coffeescript with node.js + socket.io & HTML5"
            }
        ],
        "id": 13,
        "lanyrd": "http://lanyrd.com/2012/lnug-october/"
    },
    {
        "date": "September 2012",
        "speakers": [
            {
                "url": "http://twitter.com/antonwhalley",
                "name": "Anton Whalley",
                "title": "Growing Turtles In Brown Fields : Node in the Microsoft Apps that you have already have"
            },
            {
                "url": "http://twitter.com/dominictarr",
                "name": "Dominic Tarr",
                "title": "Writing Custom Streams"
            }
        ],
        "id": 12,
        "lanyrd": "http://lanyrd.com/2012/lnug-september/"
    },
    {
        "date": "August 2012",
        "speakers": [
            {
                "url": "http://twitter.com/thattommyhall",
                "name": "Tom Hall",
                "title": "Evolving Genetic Algorithms In The Browser"
            },
            {
                "url": "http://twitter.com/webdigi",
                "name": "Roshan Abraham",
                "title": "Using your iPhone as a game controller with NodeJS, HTML5"
            },
            {
                "url": "http://twitter.com/Keithamus",
                "name": "Keith Cirkel",
                "title": "A brief history of time"
            }
        ],
        "id": 11,
        "lanyrd": "http://lanyrd.com/2012/lnug-august/"
    },
    {
        "date": "July 2012",
        "speakers": [
            {
                "url": "#",
                "name": "Hack Evening",
                "title": "Hack Evening"
            }
        ],
        "id": 10,
        "lanyrd": "http://lanyrd.com/2012/lnug-july/"
    },
    {
        "date": "June 2012",
        "speakers": [
            {
                "url": "http://twitter.com/abhinay",
                "name": "Abhinay Mehta",
                "title": "Timothy: writing Hadoop MapReduce jobs in JS"
            },
            {
                "url": "http://twitter.com/jbpros",
                "name": "Julien Biezemans",
                "title": "Cucumber.js: Cuke up your JavaScript!"
            },
            {
                "url": "http://twitter.com/vowelnoun",
                "name": "Phil Deschaine",
                "title": "Building a Real-Time Twitter Game in Node.js"
            },
            {
                "url": "http://twitter.com/felixge",
                "name": "Felix Geisendörfer",
                "title": "As fast as C? Writing high performance JavaScript parsers"
            }
        ],
        "id": 9,
        "lanyrd": "http://lanyrd.com/2012/lnug-june/"
    },
    {
        "date": "May 2012",
        "speakers": [
            {
                "url": "http://twitter.com/hylomorphism",
                "name": "Matthew Sackman",
                "title": "Atomize JS - Safe Distributed Shared Objects"
            },
            {
                "url": "http://twitter.com/socketstream",
                "name": "Owen Barnes",
                "title": "SocketStream"
            }
        ],
        "id": 8,
        "lanyrd": "http://lanyrd.com/2012/lnug-may/"
    },
    {
        "date": "April 2012",
        "speakers": [
            {
                "url": "http://twitter.com/m0wfo",
                "name": "Chris Mowforth",
                "title": "Rhinode"
            },
            {
                "url": "http://twitter.com/dscape",
                "name": "Nuno Job",
                "title": "The good and the bad Open-Source"
            },
            {
                "url": "http://twitter.com/petexgraham",
                "name": "Pete X. Graham",
                "title": "McLaren F1 and Node.js"
            },
            {
                "url": "http://twitter.com/simonmcmanus",
                "name": "Simon McManus",
                "title": "Sizlate and Frameworked"
            },
            {
                "url": "http://twitter.com/thattommyhall",
                "name": "Tom Hall",
                "title": "Readability Counts"
            },
            {
                "url": "http://twitter.com/teabass",
                "name": "Andrew Nesbitt",
                "title": "Using Node.js and Ruby on Rails for uber productivity"
            },
            {
                "url": "http://twitter.com/domharrington",
                "name": "Dom Harrington",
                "title": "Building command line interfaces in Node.js"
            },
            {
                "url": "http://twitter.com/PitaPoison",
                "name": "Pita Poison",
                "title": "Etherpad and Etherpad Lite"
            },
            {
                "url": "http://twitter.com/sleepyfox",
                "name": "Sleepy Fox",
                "title": "BDD with Jasmine-node and CoffeeScript"
            },
            {
                "url": "http://twitter.com/tonydenyer",
                "name": "Tony Denyer",
                "title": "cucumber.js with zombie.js"
            }
        ],
        "id": 7,
        "lanyrd": "http://lanyrd.com/2012/lnug-april/"
    },
    {
        "date": "March 2012",
        "speakers": [
            {
                "url": "http://twitter.com/henryoswald",
                "name": "Henry Oswald",
                "title": "sharelatex.com - Experiences building and running a node.js site"
            },
            {
                "url": "http://twitter.com/mikepilsbury",
                "name": "Mike Pilsbury",
                "title": "Arduino + Node == Fun"
            },
            {
                "url": "#",
                "name": "Chris Munt",
                "title": "Higher Order Software for Node.js"
            }
        ],
        "id": 6,
        "lanyrd": "http://lanyrd.com/2012/lnug-march/"
    },
    {
        "date": "February 2012",
        "speakers": [
            {
                "url": "http://twitter.com/andykent",
                "name": "Andy Kent",
                "title": "River and SQL parsing in javascript"
            },
            {
                "url": "http://twitter.com/PabloSerbo",
                "name": "Paul Serby",
                "title": "Building for clients with Node.js"
            },
            {
                "url": "http://twitter.com/hiddentao",
                "name": "Ramesh Nair",
                "title": "Squel - an SQL query string builder for Javascript"
            },
            {
                "url": "http://twitter.com/Keithamus",
                "name": "Keith Cirkel",
                "title": "Time for a new Date()"
            },
            {
                "url": "http://twitter.com/dscape",
                "name": "Nuno Job",
                "title": "Streaming JSON parsing"
            }
        ],
        "id": 4,
        "lanyrd": "http://lanyrd.com/2012/lnug-february/"
    },
    {
        "date": "January 2012",
        "speakers": [
            {
                "url": "http://twitter.com/richmarr",
                "name": "Richard Marr",
                "title": "Powerful data layers with CouchDB and Elasticsearch"
            },
            {
                "url": "http://twitter.com/simonmcmanus",
                "name": "Simon McManus",
                "title": "Sizlate: HTML templating with Sizzle (jQuery) selectors"
            },
            {
                "url": "http://twitter.com/paddybyers",
                "name": "Paddy Byers",
                "title": "Node.js for Android"
            }
        ],
        "id": 3,
        "lanyrd": "http://lanyrd.com/2012/lnug-january/"
    },
    {
        "date": "November 2011",
        "speakers": [
            {
                "url": "http://twitter.com/alex_young",
                "name": "Alex Young",
                "title": "Node Flow Control"
            },
            {
                "url": "http://twitter.com/appltn",
                "name": "Andrew Appleton",
                "title": "Introducing Mint Source"
            },
            {
                "url": "http://twitter.com/majek04",
                "name": "Marek Majkowski",
                "title": "SockJS - WebSocket Emulation Kept Simple, Stupid"
            },
            {
                "url": "http://twitter.com/mloughran",
                "name": "Martyn Loughran",
                "title": "Websockets and the Pusher Pipe"
            }
        ],
        "id": 2,
        "lanyrd": "http://lanyrd.com/2011/lnug-november/"
    },
    {
        "date": "October 2011",
        "speakers": [
            {
                "url": "http://twitter.com/mikedeboer",
                "name": "Mike de Boer",
                "title": "Developing large NodeJS libraries with Cloud9 IDE"
            },
            {
                "url": "http://twitter.com/seddonandrew",
                "name": "Andrew Seddon",
                "title": "Massive-git, a revision controlled database"
            },
            {
                "url": "http://twitter.com/detillen",
                "name": "Richard Miller-Smith",
                "title": "State machines and asynchronous programming"
            }
        ],
        "id": 1,
        "lanyrd": "http://lanyrd.com/2011/lnug-october/"
    },
    {
        "date": "September 2011",
        "speakers": [
            {
                "url": "http://twitter.com/andykent",
                "name": "Andy Kent",
                "title": "Realtime data analysis over unbounded streams"
            },
            {
                "url": "http://twitter.com/GarrenSmith",
                "name": "Garren Smith",
                "title": "These are the ORM's you are looking for"
            },
            {
                "url": "http://twitter.com/rtweed",
                "name": "Rob Tweed",
                "title": "The Globals Database: its significance for Node developers"
            }
        ],
        "id": 0,
        "lanyrd": "http://lanyrd.com/2011/lnug-september/"
    }
]
},{}],3:[function(require,module,exports){
module.exports=[
  {
    "source": "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11049186_1572780413006207_1571944090_n.jpg?ig_cache_key=OTUyMDI0MTA5OTUxNTY4MzYz.2",
    "thumb": "images/gallery/EJ19Acpoe.jpg"
  },
  {
    "source": "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11084735_1427020997593875_864466577_n.jpg?ig_cache_key=OTUxNTI1NDAwMzUyNDc1MjY3.2",
    "thumb": "images/gallery/VJly5Rqpje.jpg"
  },
  {
    "source": "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11084741_1610139285890183_1671474521_n.jpg?ig_cache_key=OTUwNzIyNTEwMzgxNzMwMTEw.2",
    "thumb": "images/gallery/VkW1c096il.jpg"
  },
  {
    "source": "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11326759_416450665228520_1189173531_n.jpg?ig_cache_key=MTAxNDYzOTI4NzEzMzg4MjQzMg%3D%3D.2",
    "thumb": "images/gallery/N1zkq09Tsg.jpg"
  },
  {
    "source": "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11356493_1625923277644335_1486593190_n.jpg?ig_cache_key=OTk0OTY1NDUwODkzMTE4MzE5.2",
    "thumb": "images/gallery/EyQy9Rc6ol.jpg"
  },
  {
    "source": "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e15/11420801_1591829231081356_1510932_n.jpg?ig_cache_key=MTAxNDYwNjA3MTg2MTY5MjQ1OA%3D%3D.2",
    "thumb": "images/gallery/VkNJqRcaog.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/BecfhGjIMAAqay0.jpg",
    "thumb": "images/gallery/NJBycRc6sl.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/BP9WV6RCIAIP-XY.jpg",
    "thumb": "images/gallery/Nk8J5CcTig.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/BXR6HVPIYAE0sQA.png",
    "thumb": "images/gallery/4ywy5Ac6jg.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CKiYUMVWcAAB5yJ.jpg",
    "thumb": "images/gallery/NJOJqCcase.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CNWmHApWoAAJnIu.jpg",
    "thumb": "images/gallery/VJKkcR9pix.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CSbpNArWwAAmhc_.jpg",
    "thumb": "images/gallery/NJ5J509Tsg.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CSbr5SXWoAAyVtx.jpg",
    "thumb": "images/gallery/4ksk9R96ix.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CSbvofjXIAAL6pt.jpg",
    "thumb": "images/gallery/4y31cAq6og.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CUrfC2qUAAAG6vU.jpg",
    "thumb": "images/gallery/Ny619C56jx.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CUrn_9fVEAA1Hfr.jpg",
    "thumb": "images/gallery/4JC1c0c6se.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CZwCC15WEAAm_zc.jpg",
    "thumb": "images/gallery/Vkxq096oe.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CZwDKdYWIAEa6CE.jpg",
    "thumb": "images/gallery/EJgl9R9Tjg.jpg"
  },
  {
    "source": "https://pbs.twimg.com/media/CZwTTtzWwAEXq3A.jpg",
    "thumb": "images/gallery/NJbgqA9pjx.jpg"
  }
]
},{}],4:[function(require,module,exports){
module.exports=[
    {
        "apiSpeakerUrl": "https://api.github.com/users/admataz",
        "speakerUrl": "https://github.com/admataz",
        "title": "&#9889;&#65039;MOAR lightning community node.js talks! &#9889;&#65039;",
        "description": "<p>We loved it last month when people stood up with ad hoc talks, tips and tool walkthroughs. Much fun and entertainment all round. (If you missed it - check <a href=\"https://www.youtube.com/watch?v=7gCKAfrlkAk&amp;list=PLam_80-FY3vTo_2mlVajPvnqWqUrECJeK\">all last month&#39;s videos here</a>)</p>\n<p>This month it&#39;s your turn. For 3-8 minutes, the mic is yours. Add your name and topic as a <a href=\"https://github.com/lnug/speakers/issues/119\">comment in this issue</a>. Or turn up on the night and we will try fit you in... </p>\n<p>Also, as usual: community announcements, open source projects, job hunters and offers will have a chance on the mic. </p>\n",
        "milestone": "November 22nd 2017",
        "img": "https://avatars3.githubusercontent.com/u/395101?v=4",
        "handle": "admataz",
        "name": "Adam Davis"
    },
    {
        "apiSpeakerUrl": "https://api.github.com/users/bernardbaker",
        "speakerUrl": "https://github.com/bernardbaker",
        "title": " Building an Electron application with NodeJS",
        "description": "<p>NodeJS has many uses, but what about taking the traditional web development offline and developing NodeJS application for the desktop. This talk introduces Electron. A nifty framework which makes desktop application development with NodeJS a breeze and stretches the horizon for businesses and developers to offer desktop applications as solutions to client and business needs.</p>\n<p>Watch Bernard Baker (BTAB <a href=\"https://twitter.com/bernibear2000\">@bernibear2000</a>) walk you through the development of a production ready application which is being used at Sky which converts videos into sprite sheets for use by online display campaigns.</p>\n<p>Bernard Baker is an aspiring programmer who has been coding for over ten years. Currently working as a Digital Innovations Specialist - dreaming up new product ideas, mentoring programmers and investigating new technologies for their benefits in his business domain. </p>\n",
        "milestone": "November 22nd 2017",
        "img": "https://avatars2.githubusercontent.com/u/13556172?v=4",
        "handle": "bernardbaker",
        "name": "Bernard Baker"
    },
    {
        "apiSpeakerUrl": "https://api.github.com/users/simonmcmanus",
        "speakerUrl": "https://github.com/simonmcmanus",
        "title": "Taking LNUG offline",
        "description": "<p>The LNUG website uses AppCache with the help of <a href=\"https://github.com/gr2m/appcache-nanny\">app-cache-nanny</a> but with its upcoming <a href=\"https://www.fxsitecompat.com/en-CA/docs/2015/application-cache-api-has-been-deprecated/\">depreciation</a> I&rsquo;ve been investigating how Service Workers might improve the experience as well as as ensuring the site continues to work when you&rsquo;re offline.</p>\n<p>In this talk I will explain how the LNUG website gets built, how it uses appCache / service workers and some of the things I&rsquo;ve learned along the way.</p>\n<p>I&#39;m a remote Javascript engineer, part time conference organiser and my opinions can often be found on twitter: <a href=\"twitter.com/simonmcmanus\">@simonmcmanus</a>. </p>\n",
        "milestone": "November 22nd 2017",
        "img": "https://avatars1.githubusercontent.com/u/55853?v=4",
        "handle": "simonmcmanus",
        "name": "Simon McManus"
    }
]
},{}],5:[function(require,module,exports){
module.exports={
  "title": "Makers Academy",
  "address": [
    "50 - 52 Commercial St",
    "London E1 6LT"
  ],
  "location": {
    "lat": "51.517320",
    "long": "-0.073281",
    "scale": "17.5",
    "wide": {
      "lat": "51.517320",
      "long": "-0.076681",
      "scale": "17",
      "size": "1280x400.png"
    },
    "thin": {
     "lat": "51.518720",
      "long": "-0.073281",
      "scale": "17.5",
      "size": "700x700.png"
    }
  }
}

},{}],6:[function(require,module,exports){
'use strict'

var archive = require('../data/archive.json')
var Encoder = require('node-html-encoder').Encoder
var encoder = new Encoder('entity')

function eventSelectors (event) {
  var speakers = event.speakers.map(function (speaker) {
    // naughty.
    if (typeof speaker.video === 'string') {
      return '<li><a href="' + speaker.video + '" target = "_blank">' + encoder.htmlEncode(speaker.title) + '</a> - <a href="' + speaker.url + '">' + encoder.htmlEncode(speaker.name) + '</a> ' + '</li>'
    }
    return '<li>' + encoder.htmlEncode(speaker.title) + ' -  <a href="' + speaker.url + '">' + encoder.htmlEncode(speaker.name) + '</a> ' + '</li>'
  })
  return {
    '.date': event.date,
    '.lanyrd': event.lanyrd,
    '.speakers': speakers.join(' ')
  }
}

module.exports = function () {
  return archive.map(eventSelectors)
}

},{"../data/archive.json":2,"node-html-encoder":11}],7:[function(require,module,exports){
'use strict'

var items = require('../data/gallery.json')

function imageSelectors (imageObj) {
  // check thumbnail exists
  // check original is still there.
  return {
    'a': {
      'href': imageObj.source
    },
    'img': {
      'src': imageObj.thumb,
      alt: 'Picture from an LNUG event'
    }
  }
}

module.exports = function () {
  return items.map(imageSelectors)
}

},{"../data/gallery.json":3}],8:[function(require,module,exports){
/**

  Returns the dates of the next meetup based on contents of this-month.json
  Throw error if talk milestones in next-month are not the same
**/

var data = require('../data/this-month.json')

module.exports = function () {
  var date = null
  data.forEach(function (item) {
    if (date !== null && date !== item.milestone) {
      // all the dates in this month should be the same, just a final check incase anything strange has happened in the github issues.
      throw new Error('Different dates specified in JSON. HTML has not been generated. Please check milestone fields in ./data/this-month.js')
    }
    date = item.milestone
  })
  return date
}

},{"../data/this-month.json":4}],9:[function(require,module,exports){
'use strict'

var thisMonth = require('../data/this-month.json')

function speakerSelectors (speaker) {
  var speakerUrl
  var speakerID

  if (speaker.speakerUrl) {
    speakerUrl = speaker.speakerUrl
  } else {
    speakerUrl = 'https://github.com/' + speaker.handle
  }

  if(speaker.name){
    speakerID = speaker.name
  } else {
    speakerID = speaker.handle
  }

  return {
    '.name': speakerID,
    '.title': speaker.title,
    '.desc': speaker.description,
    img: {
      src: speaker.img
    },
    '.lnug-twitterhandle a': {
      href: speakerUrl
    }
  }
}
var sortByTitle = function (a, b) {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

module.exports = function (callback) {
  return thisMonth.sort(sortByTitle).map(speakerSelectors)
}

},{"../data/this-month.json":4}],10:[function(require,module,exports){

module.exports = function () {
  return 'http://www.meetup.com/london-nodejs/'
}

},{}],11:[function(require,module,exports){
/**
 * NodeJS wrapper for JavaScript HTML Encoder library http://www.strictly-software.com/htmlencode
 * Pavel Minchenkov
 * source: https://github.com/minchenkov/node-html-encoder
 * Licence: GPL
 */
exports.Encoder = function(type) {
    return {

        // When encoding do we convert characters into html or numerical entities
        EncodeType : type || "entity",  // entity OR numerical

        isEmpty : function(val) {
            if (val) {
                return ((val === null) || val.length == 0 || /^\s+$/.test(val));
            } else {
                return true;
            }
        },
        arr1: new Array('&nbsp;', '&iexcl;', '&cent;', '&pound;', '&curren;', '&yen;', '&brvbar;', '&sect;', '&uml;', '&copy;', '&ordf;', '&laquo;', '&not;', '&shy;', '&reg;', '&macr;', '&deg;', '&plusmn;', '&sup2;', '&sup3;', '&acute;', '&micro;', '&para;', '&middot;', '&cedil;', '&sup1;', '&ordm;', '&raquo;', '&frac14;', '&frac12;', '&frac34;', '&iquest;', '&Agrave;', '&Aacute;', '&Acirc;', '&Atilde;', '&Auml;', '&Aring;', '&Aelig;', '&Ccedil;', '&Egrave;', '&Eacute;', '&Ecirc;', '&Euml;', '&Igrave;', '&Iacute;', '&Icirc;', '&Iuml;', '&ETH;', '&Ntilde;', '&Ograve;', '&Oacute;', '&Ocirc;', '&Otilde;', '&Ouml;', '&times;', '&Oslash;', '&Ugrave;', '&Uacute;', '&Ucirc;', '&Uuml;', '&Yacute;', '&THORN;', '&szlig;', '&agrave;', '&aacute;', '&acirc;', '&atilde;', '&auml;', '&aring;', '&aelig;', '&ccedil;', '&egrave;', '&eacute;', '&ecirc;', '&euml;', '&igrave;', '&iacute;', '&icirc;', '&iuml;', '&eth;', '&ntilde;', '&ograve;', '&oacute;', '&ocirc;', '&otilde;', '&ouml;', '&divide;', '&Oslash;', '&ugrave;', '&uacute;', '&ucirc;', '&uuml;', '&yacute;', '&thorn;', '&yuml;', '&quot;', '&amp;', '&lt;', '&gt;', '&oelig;', '&oelig;', '&scaron;', '&scaron;', '&yuml;', '&circ;', '&tilde;', '&ensp;', '&emsp;', '&thinsp;', '&zwnj;', '&zwj;', '&lrm;', '&rlm;', '&ndash;', '&mdash;', '&lsquo;', '&rsquo;', '&sbquo;', '&ldquo;', '&rdquo;', '&bdquo;', '&dagger;', '&dagger;', '&permil;', '&lsaquo;', '&rsaquo;', '&euro;', '&fnof;', '&alpha;', '&beta;', '&gamma;', '&delta;', '&epsilon;', '&zeta;', '&eta;', '&theta;', '&iota;', '&kappa;', '&lambda;', '&mu;', '&nu;', '&xi;', '&omicron;', '&pi;', '&rho;', '&sigma;', '&tau;', '&upsilon;', '&phi;', '&chi;', '&psi;', '&omega;', '&alpha;', '&beta;', '&gamma;', '&delta;', '&epsilon;', '&zeta;', '&eta;', '&theta;', '&iota;', '&kappa;', '&lambda;', '&mu;', '&nu;', '&xi;', '&omicron;', '&pi;', '&rho;', '&sigmaf;', '&sigma;', '&tau;', '&upsilon;', '&phi;', '&chi;', '&psi;', '&omega;', '&thetasym;', '&upsih;', '&piv;', '&bull;', '&hellip;', '&prime;', '&prime;', '&oline;', '&frasl;', '&weierp;', '&image;', '&real;', '&trade;', '&alefsym;', '&larr;', '&uarr;', '&rarr;', '&darr;', '&harr;', '&crarr;', '&larr;', '&uarr;', '&rarr;', '&darr;', '&harr;', '&forall;', '&part;', '&exist;', '&empty;', '&nabla;', '&isin;', '&notin;', '&ni;', '&prod;', '&sum;', '&minus;', '&lowast;', '&radic;', '&prop;', '&infin;', '&ang;', '&and;', '&or;', '&cap;', '&cup;', '&int;', '&there4;', '&sim;', '&cong;', '&asymp;', '&ne;', '&equiv;', '&le;', '&ge;', '&sub;', '&sup;', '&nsub;', '&sube;', '&supe;', '&oplus;', '&otimes;', '&perp;', '&sdot;', '&lceil;', '&rceil;', '&lfloor;', '&rfloor;', '&lang;', '&rang;', '&loz;', '&spades;', '&clubs;', '&hearts;', '&diams;'),
        arr2: new Array('&#160;', '&#161;', '&#162;', '&#163;', '&#164;', '&#165;', '&#166;', '&#167;', '&#168;', '&#169;', '&#170;', '&#171;', '&#172;', '&#173;', '&#174;', '&#175;', '&#176;', '&#177;', '&#178;', '&#179;', '&#180;', '&#181;', '&#182;', '&#183;', '&#184;', '&#185;', '&#186;', '&#187;', '&#188;', '&#189;', '&#190;', '&#191;', '&#192;', '&#193;', '&#194;', '&#195;', '&#196;', '&#197;', '&#198;', '&#199;', '&#200;', '&#201;', '&#202;', '&#203;', '&#204;', '&#205;', '&#206;', '&#207;', '&#208;', '&#209;', '&#210;', '&#211;', '&#212;', '&#213;', '&#214;', '&#215;', '&#216;', '&#217;', '&#218;', '&#219;', '&#220;', '&#221;', '&#222;', '&#223;', '&#224;', '&#225;', '&#226;', '&#227;', '&#228;', '&#229;', '&#230;', '&#231;', '&#232;', '&#233;', '&#234;', '&#235;', '&#236;', '&#237;', '&#238;', '&#239;', '&#240;', '&#241;', '&#242;', '&#243;', '&#244;', '&#245;', '&#246;', '&#247;', '&#248;', '&#249;', '&#250;', '&#251;', '&#252;', '&#253;', '&#254;', '&#255;', '&#34;', '&#38;', '&#60;', '&#62;', '&#338;', '&#339;', '&#352;', '&#353;', '&#376;', '&#710;', '&#732;', '&#8194;', '&#8195;', '&#8201;', '&#8204;', '&#8205;', '&#8206;', '&#8207;', '&#8211;', '&#8212;', '&#8216;', '&#8217;', '&#8218;', '&#8220;', '&#8221;', '&#8222;', '&#8224;', '&#8225;', '&#8240;', '&#8249;', '&#8250;', '&#8364;', '&#402;', '&#913;', '&#914;', '&#915;', '&#916;', '&#917;', '&#918;', '&#919;', '&#920;', '&#921;', '&#922;', '&#923;', '&#924;', '&#925;', '&#926;', '&#927;', '&#928;', '&#929;', '&#931;', '&#932;', '&#933;', '&#934;', '&#935;', '&#936;', '&#937;', '&#945;', '&#946;', '&#947;', '&#948;', '&#949;', '&#950;', '&#951;', '&#952;', '&#953;', '&#954;', '&#955;', '&#956;', '&#957;', '&#958;', '&#959;', '&#960;', '&#961;', '&#962;', '&#963;', '&#964;', '&#965;', '&#966;', '&#967;', '&#968;', '&#969;', '&#977;', '&#978;', '&#982;', '&#8226;', '&#8230;', '&#8242;', '&#8243;', '&#8254;', '&#8260;', '&#8472;', '&#8465;', '&#8476;', '&#8482;', '&#8501;', '&#8592;', '&#8593;', '&#8594;', '&#8595;', '&#8596;', '&#8629;', '&#8656;', '&#8657;', '&#8658;', '&#8659;', '&#8660;', '&#8704;', '&#8706;', '&#8707;', '&#8709;', '&#8711;', '&#8712;', '&#8713;', '&#8715;', '&#8719;', '&#8721;', '&#8722;', '&#8727;', '&#8730;', '&#8733;', '&#8734;', '&#8736;', '&#8743;', '&#8744;', '&#8745;', '&#8746;', '&#8747;', '&#8756;', '&#8764;', '&#8773;', '&#8776;', '&#8800;', '&#8801;', '&#8804;', '&#8805;', '&#8834;', '&#8835;', '&#8836;', '&#8838;', '&#8839;', '&#8853;', '&#8855;', '&#8869;', '&#8901;', '&#8968;', '&#8969;', '&#8970;', '&#8971;', '&#9001;', '&#9002;', '&#9674;', '&#9824;', '&#9827;', '&#9829;', '&#9830;'),

        // Convert HTML entities into numerical entities
        HTML2Numerical : function(s) {
            return this.swapArrayVals(s, this.arr1, this.arr2);
        },

        // Convert Numerical entities into HTML entities
        NumericalToHTML : function(s) {
            return this.swapArrayVals(s, this.arr2, this.arr1);
        },


        // Numerically encodes all unicode characters
        numEncode : function(s) {

            if (this.isEmpty(s)) return s;

            var e = "";
            for (var i = 0; i < s.length; i++) {
                var c = s.charAt(i);
                if (c < " " || c > "~") {
                    c = "&#" + c.charCodeAt() + ";";
                }
                e += c;
            }
            return e;
        },

        // HTML Decode numerical and HTML entities back to original values
        htmlDecode : function(s) {

            var arr,c,m,d = s;

            if (this.isEmpty(d)) return d;

            // convert HTML entites back to numerical entites first
            d = this.HTML2Numerical(d);

            // look for numerical entities &#34;
            arr = d.match(/&#[0-9]{1,5};/g);

            // if no matches found in string then skip
            if (arr != null) {
                for (var x = 0; x < arr.length; x++) {
                    m = arr[x];
                    c = m.substring(2, m.length - 1); //get numeric part which is refernce to unicode character
                    // if its a valid number we can decode
                    if (c >= -32768 && c <= 65535) {
                        // decode every single match within string
                        d = d.replace(m, String.fromCharCode(c));
                    } else {
                        d = d.replace(m, ""); //invalid so replace with nada
                    }
                }
            }

            return d;
        },

        // encode an input string into either numerical or HTML entities
        htmlEncode : function(s, dbl) {

            if (this.isEmpty(s)) return s;

            // do we allow double encoding? E.g will &amp; be turned into &amp;amp;
            dbl = dbl || false; //default to prevent double encoding

            // if allowing double encoding we do ampersands first
            if (dbl) {
                if (this.EncodeType == "numerical") {
                    s = s.replace(/&/g, "&#38;");
                } else {
                    s = s.replace(/&/g, "&amp;");
                }
            }

            // convert the xss chars to numerical entities ' " < >
            s = this.XSSEncode(s, false);

            if (this.EncodeType == "numerical" || !dbl) {
                // Now call function that will convert any HTML entities to numerical codes
                s = this.HTML2Numerical(s);
            }

            // Now encode all chars above 127 e.g unicode
            s = this.numEncode(s);

            // now we know anything that needs to be encoded has been converted to numerical entities we
            // can encode any ampersands & that are not part of encoded entities
            // to handle the fact that I need to do a negative check and handle multiple ampersands &&&
            // I am going to use a placeholder

            // if we don't want double encoded entities we ignore the & in existing entities
            if (!dbl) {
                s = s.replace(/&#/g, "##AMPHASH##");

                if (this.EncodeType == "numerical") {
                    s = s.replace(/&/g, "&#38;");
                } else {
                    s = s.replace(/&/g, "&amp;");
                }

                s = s.replace(/##AMPHASH##/g, "&#");
            }

            // replace any malformed entities
            s = s.replace(/&#\d*([^\d;]|$)/g, "$1");

            if (!dbl) {
                // safety check to correct any double encoded &amp;
                s = this.correctEncoding(s);
            }

            // now do we need to convert our numerical encoded string into entities
            if (this.EncodeType == "entity") {
                s = this.NumericalToHTML(s);
            }

            return s;
        },

        // Encodes the basic 4 characters used to malform HTML in XSS hacks
        XSSEncode : function(s, en) {
            if (!this.isEmpty(s)) {
                en = en || true;
                // do we convert to numerical or html entity?
                if (en) {
                    s = s.replace(/\'/g, "&#39;"); //no HTML equivalent as &apos is not cross browser supported
                    s = s.replace(/\"/g, "&quot;");
                    s = s.replace(/</g, "&lt;");
                    s = s.replace(/>/g, "&gt;");
                } else {
                    s = s.replace(/\'/g, "&#39;"); //no HTML equivalent as &apos is not cross browser supported
                    s = s.replace(/\"/g, "&#34;");
                    s = s.replace(/</g, "&#60;");
                    s = s.replace(/>/g, "&#62;");
                }
                return s;
            } else {
                return s;
            }
        },

        // returns true if a string contains html or numerical encoded entities
        hasEncoded : function(s) {
            if (/&#[0-9]{1,5};/g.test(s)) {
                return true;
            } else if (/&[A-Z]{2,6};/gi.test(s)) {
                return true;
            } else {
                return false;
            }
        },

        // will remove any unicode characters
        stripUnicode : function(s) {
            return s.replace(/[^\x20-\x7E]/g, "");

        },

        // corrects any double encoded &amp; entities e.g &amp;amp;
        correctEncoding : function(s) {
            return s.replace(/(&amp;)(amp;)+/, "$1");
        },


        // Function to loop through an array swaping each item with the value from another array e.g swap HTML entities with Numericals
        swapArrayVals : function(s, arr1, arr2) {
            if (this.isEmpty(s)) return s;
            var re;
            if (arr1 && arr2) {
                //ShowDebug("in swapArrayVals arr1.length = " + arr1.length + " arr2.length = " + arr2.length)
                // array lengths must match
                if (arr1.length == arr2.length) {
                    for (var x = 0,i = arr1.length; x < i; x++) {
                        re = new RegExp(arr1[x], 'g');
                        s = s.replace(re, arr2[x]); //swap arr1 item with matching item from arr2
                    }
                }
            }
            return s;
        },

        inArray : function(item, arr) {
            for (var i = 0, x = arr.length; i < x; i++) {
                if (arr[i] === item) {
                    return i;
                }
            }
            return -1;
        }
    }
}

},{}],12:[function(require,module,exports){
var swSortFiles = require('./sort-files')

module.exports = function (spec, version) {
  if (spec.options.scanSpecForFiles) {
    spec = spec.options.scanSpecForFiles(spec, true)
  }
  var out = swSortFiles(spec)
  var cacheName = 'v' + version + '::'
  var self = this

  self.addEventListener('install', e => {
        // once the SW is installed, go ahead and fetch the resources
        // to make this work offline
    e.waitUntil(
      [
        caches.open(cacheName + 'layout').then(cache => {
          return cache.addAll(out.layout)
        }),
        caches.open(cacheName + 'components').then(cache => {
          return cache.addAll(out.components)
        }),
        caches.open(cacheName + 'pages').then(cache => {
          return cache.addAll(out.pages)
        }),
        caches.open(cacheName + 'specs').then(cache => {
          return cache.addAll(out.specs)
        }),
        caches.open(cacheName + 'extras').then(cache => {
          if (out.extras) {
            return cache.addAll(out.extras)
          } else {
            return cache
          }
        }),
        caches.open(cacheName + 'routes').then(cache => {
          // could this be handled in the fetch listener? to save duplicating the layout each time.
          fetch('/pages/layout.html').then(function (layout) {
            out.routes.forEach(function (route) {
              cache.put(route, layout.clone())
            })
          })
        })
      ])
  })

    // when the browser fetches a url, either response with
    // the cached object or go ahead and fetch the actual url
  self.addEventListener('fetch', event => {
    var request = event.request

    if (request.url.indexOf('/api/speclate') > 0) {
      return event.respondWith(
                fetch(request)
                    .then(response => response)
                    .then(response => addToCache(cacheName + 'specs', request, response))
                    .catch(() => {
                        // fallback to the cache.
                      return caches
                                .match(request)
                                .then(response => response)
                    })
            )
    } else {
      return event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)))
    }
  })

  self.addEventListener('activate', event => {
    event.waitUntil(
            caches.keys()
            .then(function (keys) {
              return Promise.all(keys
                .filter(function (key) {
                  return key.indexOf(cacheName) !== 0
                })
                .map(function (key) {
                  return caches.delete(key)
                })
                )
            })
        )
  })
}

var addToCache = function (cacheKey, request, response) {
  if (response.ok) {
    var copy = response.clone()
    caches.open(cacheKey).then(cache => {
      cache.put(request, copy)
    })
    return response
  }
  return false
}

},{"./sort-files":13}],13:[function(require,module,exports){
module.exports = function (spec) {
  var layout = [ '/pages/layout.html' ]
  var components = []
  var pages = []
  var routes = ['/']
  var specs = []

  Object.keys(spec).forEach(function (page) {
    // no de-duping going on - same page/component could be listed twice.

    if (page === 'options' || page === 'defaultSpec') {
      return
    }
    var pageName = spec[page].page
    var routeName
    if (page === '/') {
      routeName = 'index'
    } else {
      routeName = page.slice(0, -5)
    }
    routes.push(page)
    if (pageName) {
      pages.push('/pages/' + pageName + '/' + pageName + '.html')
    }

    specs.push('/api/speclate' + routeName + '.json')
    for (var selector in spec[page].spec) {
      var component = spec[page].spec[selector].component
      if (component) {
        components.push('/components/' + component + '/' + component + '.html')
      }
    }
  })

  return {
    components: components,
    pages: pages,
    routes: routes,
    specs: specs,
    layout: layout,
    extras: spec.options.files
  }
}

},{}],14:[function(require,module,exports){
var nextEvent = require('./lib/next-event-from-file')
var titoLink = require('./lib/tito-link')
var venue = require('./data/venues/makers.json')
var eventDate = nextEvent()
var imageGallery = require('./lib/image-gallery')

var speakerSelectors = require('./lib/speaker-selectors')
var archiveSelectors = require('./lib/archive-selectors')

var options = {
  outputDir: '/docs',
  appCacheFiles: [
    'appcache-loader.html'
  ],
  files: [
    'css.css',
    'images/texture.png',
    'images/lnug-logo-monochrome.svg',
    'images/lnug-logo.svg',
    'images/maps/thin.png',
    'images/maps/wide.png',
    'images/favicon/favicon-16x16.png',
    'images/favicon/favicon-128.png',
    'images/favicon/favicon-196x196.png',
    'manifest.json',
    'client/index-compiled.js'
  ],
  scanSpecForFiles: function (spec, offline) {
    var getImages = function (selectors) {
      var images = []
      Object.keys(selectors).forEach(function (selector) {
        if (selectors[selector].data) {
          selectors[selector].data.forEach(function (item) {
            images.push(item.img.src)
          })
        }
      })
      return images
    }
    // get image gallery
    var galleryThumbs = getImages(spec['/image-gallery.html'].spec)
    var otherFiles = []
    // we only need to move this for offline (its already in the docs folder)
    if (offline) {
      otherFiles.push('client/index-compiled.js')
    }
    spec.options.files = spec.options.files.concat(galleryThumbs, otherFiles)
    return spec
  }
}
module.exports = {
  '/index.html': {
    page: 'home',
    spec: {
      title: 'London Node User Group - LNUG',
      h1: {
        className: 'animated bounceInTop'
      },
//      'small.notice': "Map provided by © <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &amp; © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
      '.lnug-ticket': {
        component: 'ticket',
        data: {
          '.lnug-nextmeetup': eventDate,
          '.venue': venue.title,
          '.detail': venue.detail,
          'address': venue.address.join('<br />'),
          '.address a': {
            href: 'https://www.google.co.uk/maps/search/' + venue.address.join(',%20')
          },
          'a.cta': {
            'href': titoLink()
          }
        }
      },
      '.lnug-content': {
        component: 'speaker',
        data: speakerSelectors()
      },
      '.lnug-mailing-list': {
        component: 'sign-up'
      }
    }
  },
  '/image-gallery.html': {
    page: 'image-gallery',
    spec: {
      'title': 'Image Gallery - LNUG',
      'section#gallery': {
        component: 'image-gallery',
        data: imageGallery()
      }
    }
  },
  '/archive.html': {
    page: 'archive',
    spec: {
      'title': 'Archive - LNUG',
      'ul.archive': {
        component: 'archive',
        data: archiveSelectors()
      }
    }
  },
  '/code-of-conduct.html': {
    page: 'code-of-conduct',
    spec: {
      'title': 'Code of Conduct - LNUG'
    }
  },
  '/speak.html': {
    page: 'speak',
    spec: {
      'nav a.speak': {
        className: 'active'
      },
      'title': 'Speak - LNUG'
    }

  },
  '/contribute.html': {
    page: 'contribute',
    spec: {
      'nav a.sponsor': {
        className: 'active'
      },
      'title': 'Sponsor - LNUG'
    }
  },
  '/contact.html': {
    page: 'contact',
    spec: {
      'title': 'Contact - LNUG',
      'nav a.contact': {
        className: 'active'
      }
    }
  },
  '/related-meetups.html': {
    page: 'related-meetups',
    spec: {
      'title': 'Related Meetups - LNUG'
    }
  },
  options: options
}

},{"./data/venues/makers.json":5,"./lib/archive-selectors":6,"./lib/image-gallery":7,"./lib/next-event-from-file":8,"./lib/speaker-selectors":9,"./lib/tito-link":10}]},{},[1]);
