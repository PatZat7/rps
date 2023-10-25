# Stockpile Rochambeau

You're writing an app that is sure to be the next Wordle: Stockpile Rochambeau! In Stockpile Rochambeau, each round works like the familiar game of rock-paper-scissors:

* paper beats rock
* rock beats scissors
* scissors beat paper


But with Stockpile Rochambeau, there's a twist: each player has a stockpile of rocks, paper, and scissors, and when the two players shoot, the loser loses the item they threw.


> *Example:*
  Player A { 10 rocks, 5 papers, 5 scissors } throws ROCK
  Player B { 5 rocks, 10 papers, 5 scissors } throws PAPER
  => Player B wins; Player A loses 1 rock


In a tie, nothing happens; nobody loses their item.

> *Example:*
  Player A { 10 rocks, 5 papers, 5 scissors } throws ROCK
  Player B { 5 rocks, 10 papers, 5 scissors } throws ROCK
  => tie; no change in stockpiles


The game continues until one player's stockpile is empty. 

In this version of the game, to keep things simple, there's only one user, and the second player is the computer. Before the game begins, the user may manually adjust each player's stockpile as needed.

## Your Task

We've written the app for you, but it has some issues:

* it's buggy. You'll quickly find out it doesn't work correctly.
* it's messy. Even without the bugs, the code needs some refactoring.
* it's ugly. The UI could use some work.

Fix everything you can! As long as you meet the Requirements, below, you can change whatever you want: the UI, the UX, the project file structure, the breakdown into components, the types, the (more advanced) features of the game, etc. You're welcome to import any additional libraries you want.

There's nothing sacred here -- if you think a checkbox makes more sense than a radio button, change it! You can completely throw out the existing code and UI and write it all from scratch if you want.

Remember, this role encompasses both UI/UX design and development. We're looking at both your code quality and the quality of the UI/UX. So don't make a beautiful UI but leave the code messy; they're both important.

If you're satisfied with your solution and want to keep going, see Optional Enhancements, below.


## Requirements


Your solution must:

* use React
* use Typescript
* implement the basic Stockpile Rochambeau game outlined above (though you can make it more interesting/complicated)


## Time Limit

The test has a limit of 240 minutes (4 hours). 4 hours is a long time. You are not expected to spend 4 hours on it! When you submit your solution, we'll take into account how long you worked. We recommend 60-90 minutes, but anything from 30 - 240 will work. There's no penalty for more or less time spent.

(If for some reason you absolutely adore Stockpile Rochambeau and have way too much free time on your hands, contact us and we can add additional time for you.)

## Tests

There are no tests associated with this task, but Hackerrank seems to want to display a button for them anyway. Just ignore anything you see about tests.

## Optional Enhancements

If you finish early and want to keep going, here are some ideas for enhancements to the app you might want to try:

* a reset button
* a history of previous games, with playback
* a better way to initialize the stockpiles
* animations, sound effects, or other fun stuff
* a more sophisticated strategy for the computer's moves
* a simulation mode that plays both sides
* a new feature called "grenades & shields" that works like this: if a user uses a shield, they always win, but the other player keeps the item thrown; if a user throws a grenade, they always win except against a shield; if both players throw grenades, a random player loses.
* whatever you want! It's up to you.


## Environment

- React Version: 18.2.0
- Node Version: 18(LTS)
- Default Port: 8000


**Commands**
- run:
```bash
npm start
```
- install:
```bash
npm install
```
- clean:
```bash
npm clean
```

