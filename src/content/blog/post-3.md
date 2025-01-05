---
title: Macro Keyboard
description: A mini PnP programmable keyboard.
date: 2022-07-13
draft: false
tag: arduino
duration: 3min
---

## Summary

![Keyboard](https://pbs.twimg.com/media/FUnJ9DUUYAENBny?format=jpg)

I saw this [great tutorial online](https://www.partsnotincluded.com/diy-stream-deck-mini-macro-keyboard/) with simple instructions on how to build your own macro keyboard. Best part was that the electronics/soldering side of things was so simple that it served as a great primer into the world of electronics and everything that underpins the code I write every day.

My local library has a 3d printer that I use quite often (a Tiertime UP300) which took care of the enclosure, which meant I just needed to order the cherry switches, keycaps and Arduino Leonardo board. I ended up with a "[Duinotech Leonardo Tiny](https://www.jaycar.com.au/duinotech-leonardo-tiny-atmega32u4-development-board/p/XC4431)" which served the purpose fine but only had room for 6 keys (whereas the enclosure was built to accommodate 8). Soldering the headers onto the board and daisychaining the switch terminals together was heaps of fun.

{{< tweet user="owensymes" id="1485063225343635457" >}}

I really wanted to make Teams calls easier to manage so I've chosen the following key configuration:
* Vol +
* Vol -
* Mic toggle
* Camera toggle
* End call
* Bonus button!
  * Couldn't resist turning my last key into a "show me cute photos of my daughter" button. It brings up a full screen carousel of my favourite photos from my Google Photos library.

## Code

{{< gist fordprefect480 ee0a2391f7d408b7e2f049c1762406cd >}}

{{< gist fordprefect480 5549935a251d0076bbe8d5bbd00b92ce >}}
