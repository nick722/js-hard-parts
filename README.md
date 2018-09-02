frontendmasters.com - Will Sentance JavaScript The Hard Parts 01.22.2018 7h9m

Callbacks and Higher-Order Functions
http://csbin.io/callbacks

Closures, Scope, and Execution Context
http://csbin.io/closures

Challenge 4
Now we are going to create a function addByX that returns a function that will add an input by x.

    var addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

var addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

var addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14