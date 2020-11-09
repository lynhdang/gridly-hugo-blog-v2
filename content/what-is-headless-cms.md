---
title: "Headless CMS explained: why development teams love it"
description: "More industries dealing with frequent multilingual updates prefer<br />  headless content management systems"
date: undefined
layout: post
author: "Ted Hagos"
tags: 
 - Development
image: "https://www.gridly.com//upload-data/headless-cms-gridly.jpg"
top: false
---
Headless CMSes are getting more attention every year, and more tools appear on the market, including Gridly. But why is it so popular? What are the advantages of headless CMS over the traditional one and why its usage goes way beyond the web content? We'll explain in a minute.

### What is a CMS?

A CMS (Content Management System), as its name suggests, is what you use to manage digital content. It’s an umbrella term for quite a few applications: Document Management Systems, Digital Asset Management, Web Content Management.

The DMS and the DAM are mostly for enterprise applications. When people talk about a content management system, most likely, they refer to a web CMS - a web application that lets you create and manage content, generally via a WYSIWYG (what you see is what you get) tool. The content is saved in a database (typically MySQL) and then displayed using a front-end application that’s also a part of the CMS.

The web CMS has a couple more subsets, these are the following;

* coupled (traditional) CMS,
* decoupled CMS,
* headless CMS.

### Traditional (coupled) CMS

There are many CMS applications out there; but I bet you’ve heard of the [top three](https://bit.ly/3inVvMR) - Drupal, Joomla, and WordPress that together take over 68% share of all installed CMSes.

The top three CMSes are more similar than they are different. Each of them lets a user create and edit their content using a visual tool which is part of the CMS. This content is stored on a back-end database and displayed using a front-end application (which is also part of the CMS). The diagram below shows the logical architecture of a CMS.

This is the traditional CMS; the authoring, storing, and rendering of the content happens all in one place. For most people and most use-cases, the monolithic nature of a traditional CMS isn’t an issue, as long as you conform to the CMSes world-view on how the content should be rendered. JavaScript and CSS go a long way to customize how the content looks and feels during rendering, but they can only go so far.

Although there are already many CMS apps, that didn’t stop some people from building more CMSes, this new breed of CMSes is fundamentally different from their traditional counterparts regarding how it does the authoring, storing, and rendering workflow.

### What is headless CMS?

There are many headless CMS definitions, but this is probably the simplest. If you think of a CMS as a body, the place where the “rendering” happens is the head. By this analogy, a headless CMS is one that only lets you author and store the content but doesn’t care about the rendering part. It has no front-end delivery system.

### How headless CMS works

How does it deliver the content then? It provides the content as data over API (Application Programming Interface), more specifically, via RESTful APIs, and because it’s data, it can be consumed any which way you want. Using a headless architecture, you can flexibly get the content so you can better integrate with other applications. How this usually happens is you send a web request to an API endpoint, which is like visiting a web page, but instead of getting a web page, you typically get a JSON response like this.

```json
{
  "_createdAt": "2020-10-26T11:21:26A",
  "_id": "XXXXXX",
  "_type": "company",
  "logo": {
    "_type": "image",
    "asset": {
      "_ref": "image-3ced3a-gridly-logo-svg",
      "_type": "reference"
    }
  },
  "slug": {
    "_type": "slug",
    "current": "gridly"
  },
  "title": "gridly.com"
}
```

You can now build a front-end system that can consume this data.

### What is an API-first CMS?

You might encounter the term “API-first” CMS or “API-based” CMS; they are just other terms for headless CMS terms. It’s emphasizing the fact that they only deliver the content via an API and nothing else.

The rise of the flexible CMSes prompted the vendors of existing CMSes to catch up. They built APIs over their existing products; these CMSes became known as decoupled CMSes.

### Headless vs Decoupled CMS

By definition, a decoupled CMS is a traditional CMS that has an API layer over its data. It can deliver the content either as a web page (aided by its front-end delivery system) or as data over API, much like a headless CMS. Because it’s a traditional CMS, decoupled CMS architecture still has all the goodies for authoring, previewing, and rendering content.

![](https://lh5.googleusercontent.com/jqLnzHeaTNkvtTgmvvjUSwc3ZHD7QmBY_u7NA1p3S5RZxQKgNbvnnaRnA2VV6utbAck4AR67aF7eXbsFAi6haFjvkyb3z-z1saZ8KsEVfzuQzTXo9QnGx92kSVTGbfElO8P0iGIb)

### Pros and Cons of a headless CMS

There are plenty of reasons to choose a headless CMS over a traditional one; here are some pros and cons.

#### CONS

* The tech stack is fragmented. If you remove the head, you have to replace it with something else, which can mean hunting for another solution to render the front-end or build it in-house. It will impact both your timeline and your budget.
* You can’t preview the content.

#### PROS

* It's front-end agnostic. You can choose whatever front-end toolchain you prefer.
* You can change or add front-end delivery systems without impacting the content’s source of truth. It’s future-proof.
* Better integration with other solutions. You can use the data for other applications, not just displaying web pages; for example, you can also use the CMS for games to store game and user data.

### How to use headless CMS beyond blogs, news and landing pages

While CMSes are usually in the province of blogs, news, cooking sites, and marketing applications, it finds new homes with the game development folks. Game development requires storing a tremendous amount of structured data, like user levels, user achievements, leaderboard, how many bananas or gems have been collected, etc.

Game data about the player, points, etc., used to reside on a database that sits on the same location where the game is installed; then, it is somehow synchronized over a central database.

That was then; the games now have a lot more data than merely player data and points; now, we also have to deal with in-app purchases, game pricing, localization and downloadable contents (DLC). Storing this game data in a central location seems to be an architecturally sound design. The central location becomes a single source of truth for the game. This is why game companies are starting to consider the use of game CMSes.

### Why use a game development CMS

There was a time in game development history when making a video game entailed that the textual data for the app is typically bundled in a link library. Can you imagine what a nightmare it would be to translate that game? How much effort it would take to produce games? It means creating a build script for each language/locale that the game has to support.

Incorporating localization as part of game development, rather than an afterthought, has several advantages:

* It cuts both testing and development time by a lot. Storing the textual data outside the game executables is a leap-frog move forward.
* It makes localization much more manageable. Moving the textual data into a CMS is even better; because it can now support a multi-regional team. You can prevent confusion (and friction) among team members by having a single truth source for the game data.
* Your development teams (even your vendors) have 24-7 access to the most updated version of the game data. Gone are the days when you had to prepare the game data and send it to your vendor (who’s most likely from another country) then wait for the localized game data. Now, localization, development, and testing personnel have real-time access to game data.

Games can be monetized beyond only charging a one-time sticker price. Game makers can now charge for in-app purchases and DLCs. The DLCs, like new worlds, maps, or characters can make the game fresh long after it has been released. This continuing revenue model for games is known as [games-as-a-service (GaaS)](https://www.gridly.com/blog/games-as-a-service/).

GaaS games require constant updates to game data; surely, you don’t want to store this on a local database. You will need a game CMS to support this model.

GaaS games are relatively new, and so are CMSes that support them. Unlike traditional CMSes, there aren’t that many game CMSes, but they already exist.

Meet Gridly, a headless CMS for multilingual game development.

Want to learn more? [Get started with headless](https://app.gridly.com/getstarted) right now (it's free) or [schedule a demo](https://localizedirect.agilecrm.com/calendar/chris_detyna,dolly,markus,tim_farvadeev,edwin_caparaz) for a brief introduction.