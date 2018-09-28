Black Jack

Bet Screen:

Game begins by user placing a bet. The user has an initial bank of $1000.

User can click chips worth $1, $5, $25, $50, $100, $500. These values get added to the user's Total Bet amount, which can not exceed their bank. Bank is updated after every hand is played.

Play Screen:

Once the user has their bet amount set, they can click the deal button, which will deal two cards to the user and two cards to the dealer. These cards are removed from the deck.

The cards will be dealt out of the deck, which will hold 3 traditional decks.  Cards will deal at random into dealer hand and player hand. Dealer will have only one card turned over.

	If the user has 21, dealer will flip cards. If dealer hand = 21, then the player pushes. No change to player bank. Return to bet screen to bet & deal again.

	If the user does not have 21, they have the option to hit, stay, or double down. Or split.

	User Hits:

	If user hits, another card will be dealt to user. Can continue to hit if hand amount < 21.

		If new value > 21, the player busts	and the dealer wins. The bet amount is subtracted from player's bank.

		If new value < 21, the player has the option to hit or stay again, and the process is repeated.

		If user hits again and is <= 21, hand is evaluated. Dealer flips, and hand is evaluated.

			If dealer hand < user hand and dealer hand <=17, dealer draws another card, and hand is evaluated.

			If dealer hand > user hand, dealer wins. Bet amount subtracted from player's bank.

			If dealer hand < user hand, user wins. Bet amount added to player's bank.

	User Stays:

	If user stays, the dealer will flip over their face-down card. Their hand will be evaluated.

		If dealer hand < user hand AND dealer hand <= 17 , the dealer draws another card, and this is evaluated again.

		If dealer hand is between 18 and 21, dealer hand is compared to player hand. If player hand is greater, player wins. If dealer hand is greater, dealer wins. If hands are equal, push.

		If dealer hand > user hand AND dealer hand <= 21, dealer wins and the bet amount is subtracted from player's bank.

		If dealer hand > 21, dealer busts and player wins. Bet amount is added to player's bank.

	User Doubles Down:

	User Splits:















































![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Project #1: The Game

### Overview

Let's start out with something fun—**a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with a few small apps (Tomagotchi, Calculator), it's up to you to come up with a fun and interesting game to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Proposal

**Your Project must be approved before you start coding.** Your instructor will need to see and approve your user stories and wireframes, and will want you to have an idea of the organization of your app before your start.  This may require you to go back to the drawing board.  The instructor will help you make sure that you scoped out an achievable MVP (simple enough that you think you could get it built well ahead of the deadline) well-defined, along with a few nice-to-haves and stretch goals. 


### Technical Requirements

Your app must:
* **HAVE ITS OWN REPO, under your github account. NOT A FORK.**
* **Include Wireframes and User Stories in the README** 
* **Wireframe:** - Basically draw out what your game will look like—very different way it could look. You can use paper or any wireframe tool you find online.
* **User Stories** - Wording should center around how a user interacts with your game, for example:
    1.  The user click starts and the level starts
    2.  When the user hits the ```f key``` a fire ball is catuplulated into the galaxy. 
* **Render a game in the browser**
* **Switch turns** between two players, if your game doesn't make sense for two players talk to your local instructor about it 
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **JavaScript or jQuery** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it (we will show you how)
* Use **semantic markup** for HTML and CSS (adhere to best practices)
* Be reasonably complex

---

### Necessary Deliverables

* A working MVP (minium viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP.
* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.
* **A ``README.md`` file** with an explanation of what the project is and why you made it, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable).  In this project, also include your wireframes in the readme. 

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, element inspector, alert statements, etc) to debug and solve problems
* During the day, work through problems in class & **ask questions when you need to!** We're here to help prevent you from burning through your time with wild goose chases. Add relevant code to your game each night too, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version. There should be _at least_ a couple dozen commits. 
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Plan to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Sample Project Ideas

##### Blackjack
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

##### Concentration
Sometimes just called "Memory", it's a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. If you get all the matching cards, you've won!

##### Self-scoring Trivia
Test your wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how right you are!

---

### A few from earlier cohorts

https://kmikitin.github.io/Quarto/ <br>
https://sierramoore.github.io/vampire-game/ <br>
https://scrummish.github.io/Space-Invaders-2018/ <br>
https://webermn15.github.io/Scorch_a-scorched-earth-clone/ <br>
https://anthonyjlower.github.io/canvas-football-game/ <br>
https://cswormstedt.github.io/project1/
https://theprosumer.github.io/theprosumer.io/project1/
https://jccraigw.github.io/project1_Desktop/
(same as above, mobile friendly): https://jccraigw.github.io/project1/
https://obajuluwa3.github.io/3-Card-Monte/

---

### Extra challenge...

* See if you can reseasrch and use at least thing/technology/resource we didn't explicitly study in class (Some API? Some sweet library? Skeleton or Bootstrap? Firebase? Canvas? Three.js? D3? CSS Keyframes/Animation? Note: Phaser is _not_ allowed, and **outside library use is strictly subject to instructor approval**)

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things  Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
