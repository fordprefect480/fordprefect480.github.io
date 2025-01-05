---
title: Tips for working with someone who is not also where you are
description: What I learned working remotely for 12 months.
date: 2016-05-27
draft: false
tag: remote work
duration: 3min
---

UPDATE (5/1/25): I obviously wrote this before WFH became a big deal and now much of this is common knowledge. However there are still one or two things that are good to keep in mind even today.

![Gidday](/roo.jpg)

Midway through 2015 I picked up my life in NZ and moved to Adelaide, Australia. Fortunately, the fine folk at Trade Me allowed me to continue to work for them remotely and I carried on with our migration to Elasticsearch as a member of the Findability squad.

## Expectation
All in all, I thought it would be a bit like this:

![It was not.](/tech-beach.jpg)

It was not.

It was uncomfortable, sandy, impractical, and couldn't see a damn thing on the screen.

## Experience

* I found it great for getting stuff done. I could get into flow pretty quickly - even having to remind myself to take breaks. Almost all work communication was via asynchronous chat/messaging which I found reduced the amount of context-switching, since people were no longer physically interrupting me.
* In saying that, being able to interrupt people is what I missed the most about working in the office ¯\\_(ツ)_/¯
* It can be easy to get distracted. Eg. Outlook's \"new mail\" system tray icon, or someone sends you a link. I quickly learnt that I had to discipline myself. I shut down all notifications except Slack and Outlook. Email filters were finely-tuned and essential.
* Limited by tools/infrastructure. I ran into a bunch of things caused by working over VPN, eg. not being able to access certain VMs, or Visual Studio crashing because specific network shares weren't accessible. Fortunately, most of these were work-aroundable.

## How your team can help you
### Meetings
* **Introduce anyone who is not within camera's field of view.** Otherwise it gets weird!
* **Invite remote callers to large meetings first.** I found that joining a call with 100 physical attendees all looking at your face on a TV felt like an ambush. To make matters worse, everyone else in the meeting was stuck staring at still frames of my face while their connection catches up.
* **Get good mics at both ends of call**. Or speak near the laptop.
  * Most video call software adjusts mic volume for whatever source of noise is closest to the mic. So if someones tapping on a laptop next to the mic, laptop won't pick up someone talking further away.
  * If you are remote or frequently chat/pair program with a remote person, get headsets.
* **Allow time for remote callers to respond or add to the discussion.** I often found it tricky to add my 2c to discussions. Trying to say my piece as soon as someone finishes talking often resulted in my voice reaching the room halfway through someone else who had since jumped in. Now I'm the rude guy cutting people off. Occasionally checking in with the remote caller during the meeting can make this better. Or try not immediately racing into the next topic for discussion.
* **Allow time for the connection to "settle".** If the remote worker has... say... shitty Australian Internet sub-par upload speeds, allow time for the connection to stabilize. I found at our daily standups that my call quality was rubbish for the first ten seconds. So perhaps don't make the remote caller go first straight after calling.
* **If the stream is getting chunky and you can't make out what they're saying, interrupt and tell them.** I have no idea if what I'm saying is reaching you ok, or even when it's reaching you, so I will keep on talking.

### Other stuff
* **Be mindful of timezone differences.** Usually this is obvious.
* **Keep them in the loop**
  * Encourage discussions/decisions to be had online (video call for major ones).
  * If something has changed since standup, put it in your shared chat.
* **Keep communicating when the pressure is on.** The stream of communication dries up when pressure is on (which I discovered during a hackathon) - try not to do that. Try to keep the lines open. Even leaving a screenshare running helps.

## Tooling & processes

### Timezone Management
* The [Figure It Out](https://chrome.google.com/webstore/detail/figure-it-out/lialghmkggocekkpjbnoacohodmckfke?hl=en) chrome extension is simple, looks great, and a mere New Tab away.
* Use Outlook's built-in timezone management.
* Add more clocks to your Windows system tray.

### Agile
* Use an online planning poker tool. (2020 EDIT: Slack and Teams have plugins for this 😍)
* Use a strawpoll tool to help with decision making.

HTH!
