---
title: "Forebears"
description: "A Blazor web application to privately present your family history findings to other family members."
---

**Site:** https://forebears.azurewebsites.net

## Summary

During my family history research I began to get frustrated that there wasn't a cloud-based application that allowed me to privately share a family tree. I was uncovering some great stories about my ancestors and wanted to share it with my family - but not the world!

I defined my requirements and decided to build something myself:
- Start from scratch or import a GEDCOM file
- Use a tree chart as the home navigation with clickable people
- Capture family group data and structured source data
- Other family members can privately view all pages, but not the general public.
- Understandable by everyone - no jargon used only by genealogists
- Exportable in a format suitable for preservation/posterity and so that another descendant can pick up where I left off. Eg pdf for printing.
- Flexible enough for me to store **any** kind of info against an individual, including random memories
- Users can request access from the account owner.
- Continually updated with new data without starting over.

I'm chipping away at it, but still a lot to do.

## Tech

- .NET 9
- Azure Storage
- Blazor WASM
- MudBlazor
- Auth0
- NLog

![Family group page](https://www.owen.nz/forebears-screen1.png)
![Individual page](https://www.owen.nz/forebears-screen2.png)
![Individual page](https://www.owen.nz/forebears-screen3.png)
