---
title: "Genealogy with Gramps.js"
description: "Researching my family history with Gramps"
date: 2022-10-21
draft: false
tag: genealogy
duration: 2min
---

![Gramps Web](https://www.owen.nz/gramps_screenshotfull.png)

## Summary

A few months ago I discovered a new hobby: researching my family history.

Over time I started matching names I had heard my whole life with these new remarkable stories that I was uncovering. It really grabbed me. Very soon I had big questions to answer - though not specifically genealogical ones!

* how can software aid me on my quest?
* what's already out there?
* will I need to build something myself? That sounds fun.

A paper-based system seemed like a hopelessly outdated way to do things, so obviously I was going to have to come up with a software-based option. I started with Ancestry.com and after fleshing out my first basic family tree, some requirements began to crystallise:
* I needed my research to be preserved for the long term. My descendants may (I hope) find this stuff interesting and may even want to continue where I leave off. What format is likely to be easily parseable in 20+ years time? How do I preserve it?
* I wanted an online, browseable version to share with my family. No accounts or signups required, but not wide open to the internet.
* I wanted a system I could customise or extend such that I can publish a book/report/something in a format that I like.

I decided that to maximise my chances of finding something that worked for me I should probably head "opensource-wards". At least then if something wasn't quite how I wanted it I could always fork and tweak it myself.

The most well-known open-source genealogy software is the [Gramps Project](https://gramps-project.org). It's a complex Python desktop application with an active online community too. There is also ongoing work to wrap the underlying library in a [REST API with a SPA sitting on top](https://gramps-project.github.io/web/). Here was a point where I could get stuck in. I don't know any Python, but I could at least contribute to or fork the web app.

I've tested it out by spinning up a DigitalOcean droplet running the API and Web app in docker containers.

![Gramps Web](https://www.owen.nz/grampsweb_screenshot.png)

So that's where I'm at so far. This is going to be a long-term project so I'll be back to update my progress.
