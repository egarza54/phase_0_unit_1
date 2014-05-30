// This is a solo challenge

// Your mission description:
// The mission is to break out a wizard trapped in a dungeon by navigating through 
// a maze shaped like the number 20, fighting two small ogres, and one giant ogre near 
// the exit. Before attacking the giant ogre, the hero must break a secret wall, revealing
// a magic mushroom, giving the hero the power to attack the giant ogre guarding the exit.

// Pseudocode

// move right 2
// move down 1
// move left 2
// move down 1
// attack the ogre
// move down 1
// move right 3
// move up 2
// attack the ogre
// break the door
// greet the wizard
// ask him to follow you 
// move up 2
// move right 2
// move down 1
// break the wall
// move right 1
// move left 1
// move down 2
// attack giant ogre
// exit


// Initial Code
this.moveRight();
this.moveRight();
this.moveDown();
this.moveLeft();
this.moveLeft();
this.attackNearbyEnemy();
this.moveDown();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveUp();
this.attackNearbyEnemy();
this.moveUp();
this.bustDownDoor();
this.say("Hey, whats up?!");
this.say("Follow me, if you want to live.");
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.breakWall();
this.moveRight();
this.moveLeft();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();



// Refactored Code
// I'm not really sure how to refactor this code. It's pretty simple already, but if I needed to condense 
// it the objects would function like this:

this.moveRight(2);
this.moveDown();
this.moveLeft(2);
this.attackNearbyEnemy();
this.moveDown();
this.moveRight(3);
this.moveUp();
this.attackNearbyEnemy();
this.moveUp();
this.bustDownDoor();
this.say("Hey, whats up?!");
this.say("Follow me, if you want to live.");
this.moveUp(2);
this.moveRight(2);
this.moveDown();
this.breakWall();
this.moveRight();
this.moveLeft();
this.moveDown(2);
this.attackNearbyEnemy();

//Each object involving movement would integer telling it how many spaces to move, starting with a 
//default modifier of 1. 



// Reflection
// I hope I did this challenge correctly. It seems simple enough but I may be that I don't understand
// the assignment. At first I was researching how to use javascript to really program a game in 
// code combat, which turns out to be slightly above my ability for right now. This is my goal, but I'll
// have to level-up a bit more before. Unless, i'm wrong and this was the assignment to begin with. 
// Oh dear. 
// 
// 
// 
// 
// 
// 
// 