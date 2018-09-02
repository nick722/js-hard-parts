// Challenge 4
// Now we are going to create a function addByX
// that returns a function that will add an input by x.

function addByX(x) {
 function add(input) {
     return input + x;
 }   
    
 return add;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));; //should return 3

// now call addByTwo with an input of 2
console.log(addByTwo(2));; //should return 4


