---
title: Getting Started
description: 'A short guide to git.'
---
- [Prerequisites](#prerequisites)
  - [Homebrew](#homebrew)
- [Third Example](#third-example)
- [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)


# Git, Hugo, and the Developers Workflow

This is meant as a quick guide to help you through making initial changes to **Restore Copenhagen**. Additionally, I will also attempt to explain the underlying technologies we will be using so that you can gain an understanding rather than just emulate whats written. 

_**Quick disclaimer**: I am no teacher and as such bear no liability for any misconceptions that are formed as a product of this guide._ 🙃


## Prerequisites

Before we can start doing any coding at all, we need to get set up with a couple of tools. The tools we will be using today are [Homebrew](https://brew.sh), [Git](https://git-scm.com), [Visual Studio Code](https://code.visualstudio.com), and finally, and more specifically for your project, [Hugo](https://gohugo.io). I'll now briefly cover what each of these tools are, and why we will be using them; It is important to note that **pretty much everything within the domain of computer science can be done in numerous way, usually many.** The tools we use are a choice, and there are alternatives to each of the technologies I have listed. In this specific project someone has already decided to use Git and Hugo, so we won't escape from those, but in future projects you are free to use any set of tools. I'll now quickly mention what each of these tools are, and why we are going to use them.

### Homebrew

Homebrew is a **package manager** for macOS. I'll just copy the first paragraph from wikipedia on what a package manager is:

> A **package manager** or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner.

So basically Homebrew will help you install certain software on your computer in a really easy and predictable way. We'll be using it to install hugo today. We love Homebrew ♥️

### Git

Git is **version control system**. Oooo that's a cool term. What exactly does it mean? Again, heres the first paragraph from wikipedia.

> In software engineering, version control, or a version control system (VCS), is a class of systems responsible for managing changes to computer programs, documents, large web sites, or other collections of information.

So a version control system helps us manage the files we are working on, easy. Since git is so much more popular than any other VCS' people usually just use the term *git* to refer to version control in general, and it's highly unlikely you run into a project using anything but git for version control. Okay great, so we have VCS and Git, but what the fuck is that actually? Watch through the short video below, it does a brilliant job of explaining the core concepts of Git and how to use it. 🌱

<markdown-video-player src="https://www.youtube.com/embed/hwP7WQkmECE"></markdown-video-player>

### Visual Studio Code

Visual Studio Code is simply a text editor, generally referred to as VSCode. What makes it so great is that it is extensible and extremely popular. This means that there are tons of extensions that people can write for it that make your life way easier. Some thing like this [Hugo Language and Syntax Support](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode) extension could be helpful when working on your project files, we'll come back to this. On top of that, it includes an integrated terminal, a debug interface, and much much more! Don't worry if you don't know what I'm talking about just yet. The main takeaway is that VSCode is great and will meet pretty much all your developer needs. 😄

### Hugo

I don't know much about Hugo, I have never worked with it before. It describes itself as a static site generator, which I am familiar with so I can touch on that. Basically you have two types of web pages, *static* and *dynamic*. *Static* pages are simply html (potentially with accompanying javascript and css), that are stored on a server and sent to your browser exactly as is. Whereas *dynamic* pages are receiving data and changing content live! *You may already know this but I know for a lot of people it can be a bit confusing, but a server is simply a computer, usually sitting somewhere remote, no other magic than that.*

So why do we need these so-called *static site generators*? Short answer we don't, but like all the other tools mentioned, they make our life way easier. Your browser only speaks one language, straight html, css, and javascript. This is fine and all but writing our application purely in these can be cumbersome and obfuscating. So we use *static site generators* which can be thought of as a translator between the browsers language, and the language the *static site generator* offers. This gives us the ability to write our application in a more logical, understandable, easier, and maintainable way, and the generator then can then translate it to pure html, css, and javascript, so that it can be understood by our browsers. Thats all really ⚡️

### Installing our tools

We'll now install each of our tools, but before doing so, it will prove invaluable to have an understanding of the _command line_, and a little bit of experience of how to use it. I have added a video that is a little long, I know, but this is one of the most fundamental tools in your tool-belt, and to avoid learning it is like shooting yourself in the foot. So get comfortable, grab a cup of tea ☕️, and enjoy the video.

<markdown-video-player src="https://www.youtube.com/embed/aKRYQsKR46I"></markdown-video-player>

Great! You should now understand what the command line is and how we can use it, awesome! If you have been following the guide up until now with no breaks, this could be a good time to take one, you've learned a lot! Come back when you're ready and we'll get back to installing your tools.

First tool we are going to install is Homebrew. You can follow the instructions [here](https://brew.sh), or simply open up the Terminal and paste the following, then hit enter:

<!-- ```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
``` -->
