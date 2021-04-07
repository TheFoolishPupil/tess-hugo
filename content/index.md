---
title: Getting Started
description: 'A short guide to git.'
---

# Git, Hugo, and the Developers Workflow

This is meant as a quick guide to help you through making initial changes to **Restore Copenhagen**. Additionally, I will also attempt to explain the underlying technologies we will be using so that you can gain an understanding rather than just emulate whats written. 

### ⚠️ _Disclaimers_ ⚠️

_I am no teacher and as such bear no liability for any misconceptions that are formed as a product of this guide._ 🙃

_I haven't properly proof read this guide so it is likely ripe with typos and errors_

_It's highly likely that you run into errors along the way where the guide just assumes everything worked. When that happens, copy and/or take a picture of the error message if that is applicable. Stack overflow is a great resource for find people who have run into similar problem and people are extremely helpful (for the most part). You can also just shoot me a message and I should be able to help you figure it out._
### Contents

- [Prerequisites](#prerequisites)
  - [Homebrew](#homebrew)
  - [Git](#git)
  - [Visual Studio Code](#visual-studio-code)
  - [Hugo](#hugo)
  - [Installing our Tools](#installing-our-tools)
- [Committing and Pushing Changes](#committing-and-pushing-changes)
- [Creating the Pull Request](#creating-the-pull-request)

## Prerequisites

Before we can start doing any coding at all, we need to get set up with a couple of tools. The tools we will be using today are [Homebrew](https://brew.sh), [Git](https://git-scm.com), [Visual Studio Code](https://code.visualstudio.com), and finally, and more specifically for your project, [Hugo](https://gohugo.io). I also assume that you have maintainer rights to the Malte's genopretkbh repository on Github, you may need to reach out to him and ask for that. I'll now briefly cover what each of these tools are, and why we will be using them; It is important to note that **pretty much everything within the domain of computer science can be done in numerous way, usually many.** The tools we use are a choice, and there are alternatives to each of the technologies I have listed. In this specific project someone has already decided to use Git and Hugo, so we won't escape from those, but in future projects you are free to use any set of tools. I'll now quickly mention what each of these tools are, and why we are going to use them.

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

<markdown-code code='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'></markdown-code>

<!-- ```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
``` -->

You should now be able to run the command `brew` from the command line and if it says anything other than *...command not found...* it will have installed succesfully.

Next we'll install Git. We can now do this by running `brew install git`. However macOS provides a bunch of command line tools that might come in use later, including Git. These can be installed by running `xcode-select --install`. It might take a while to complete. After installing with one of these two methods you can test the installation just like with Homebrew by running the command `git`, and similarly if it was installed correctly you will see something other than *...command not found...*. We may need to link your Git command line tool with your Github account, this can be accomplished with the following, replacing the example email with the email you used to sign up for Github.

<markdown-code code='git config --global user.email "hello@example.com"'></markdown-code>

If that went smoothly we can install Hugo. This can be done easily with `git install hugo`. And yet again you can test the installation by running `hugo` from the command line and verifying that you don't see *...command not found...*.

Lastly, lets install VSCode. This can be done from [here](https://code.visualstudio.com/). Before we do anything else we are going to make the `code` command available from the command line. Open up VSCode that you have just downloaded. When you have a window open the command palette with the shortcut ⇧⌘P. Type 'shell command' and look for an entry called *Shell Command: Install ‘code’ command in PATH* click or hit enter on that. You should now be able to use the command `code` from the command line to launch VSCode! This is handy when we need to open repositories we have cloned from Git.

## Cloning our Project

Now that we have all the tools we need in place. It is time to fetch our actual code! Head over to the [repo](https://github.com/maltelunden/genopretkbh) and hit the green code button, copy the link that shows up. Now open up the Terminal and navigate to a directory where you want your project to live. Use `git clone <copied-url>`(replace \<copied-url\> with the url you got from Github, including the \<\>) to clone the repository. after than `cd` into the newly cloned repository with `cd genopretkbh`. This is where our VSCode command comes in handy, simply type `code .` to open the current directory in VSCode, and after a short while you should VSCode should open with all the the right files!

## Committing and Pushing Changes

We don't want to work directly on the master/main branch. So the first thing we need to do before making any changes is go back to our terminal and run `git branch typo-fixes`. I've decided to name it *typo-fixes* because thats what I will demonstrate, but feel free to name it whatever you like. Keep in mind that once you push the branch to the remote repository (the copy of the work lying on Github, everyone will be able to see your branch so try to name it something descriptive)

We're now ready to commit some changes! Open up *config.toml* in VSCode and fix some typos. You can get .toml file support for VSCode from [here](https://marketplace.visualstudio.com/items?itemName=be5invis.toml) though it may have already suggested that to you when you open up the file. Once you are happy with the changes you've made we need to use Hugo to generate the static content. Remeber how Hugo was like a translator? We need it to translate the changes we made in *config.toml* to pure html, css, and javascript. This can be done by simply running the command `hugo` from the root of the project in terminal. You should see some sort of success message.

Now we're ready to go ahead make the commit and push the changes! Try typing `git status` in the terminal. It should spit out a list of files that have been modified. If you notice that one of them is called .vscode, this is a folder that contains your VSCode preferences and you do not want it to be tracking by Git, to prevent that from happening, create a file called *.gitignore* in the root of the project (The root being the top-level directory) and add a single line that says .vscode. That's it. *.gitignore* does what it says, it tells git to ignore files that you add to the file. 

Once you have ignored the files we don't want to commit you can run `git status` again and you should see that .vscode is now gone from the list. Before committing, we need to *stage* the changes that we wish to commit. Go ahead and stage all the modified files by typing `git add .` and then run `git status` again afterwards. You should see that all your files are green and ready to be committed. Commit the changes to your local repository by running `git commit -m "Fixed some typos"`. The *-m* option, or flag as it is sometimes called, means that the following text is a message that will accompany your commit. This way when you or anyone else looks back through commits in the project they can read the message and see what was done. Commit messages are important, and if you are good at writing descriptive ones people will love you and think you're a rockstar. Finally, we want to *push* your commit to the remote repository. You can think of this as uploading the branch and commit you made to the repository that you cloned from Github. Since the branch does not exist on the remote repo, for our first push we need to tell it to create it, do this with `git push -u origin typo-fixes`, consecutive pushes from this branch will only need to issued with `git push`. 

If all that went smoothly, try to go back to the original repo on Github and look click on the button that says *master*, and you should see your branch there as well! Well done, you have now successfully pushed your changes to the remote repository and are ready to create a pull request!

## Creating the Pull Request

Pull requests are self descriptive; They are requests for the repository maintainer to *pull* the changes from a certain branch, into the master/main branch. Click the *pull request* tab in Github and then click *New pull request*. Make sure the base branch is master, and then select your new branch to compare. You can inspect the precise differences between the two version here and when you're ready, hit *Create pull request*.

That's everything! Now the project maintainer can review your pull request and if they are satisfied, merge it into the master branch and deploy it to the website.

---

If you made it here then bravo. 🤘🤘🤘🤘 If you found it fun you should keep up the momentum and hop into another project. It's most fun doing a project on your own to start, then you have complete control over what you want to do and how you want to do it.

If you're curious, I made this website with a static site generator similar to Hugo called [Nuxt.js](https://nuxtjs.org/) which I have recently fallen in love with. The repo for the site is [https://github.com/TheFoolishPupil/tess-hugo](https://github.com/TheFoolishPupil/tess-hugo). If you were thinking of starting your own web project form scratch, I would recommend looking into [vue.js](https://vuejs.org/) which is the framework that Nuxt.js is built upon.

Happy coding! 👩‍💻