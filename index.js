/****************************************************************
 USING THE 'NEW' KEYWORD
 ****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
    // add code here
    this.greet = function() {
        console.log('Hello from PersonConstructor');
    }

}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
    // return new PersonConstructor({name : name});
    let obj = new PersonConstructor;
    obj.name = name;
    obj.age = age;
    return obj;
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here

PersonConstructor.prototype.introduce = function() {
    console.log('Hi, my name is ' + this.name);
};


// console.log(PersonConstructor.introduce);


mike.introduce(); // -> Logs 'Hi, my name is Mike'