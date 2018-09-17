/*** CHALLENGE 1 of 3 ***/
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet () {
        console.log('hello');
    }
}
// /********* Uncomment this line to test your work! *********/
var george = new PersonClass('Nick');
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass extends PersonClass {
    introduce() {
        console.log('hello, my name is ' + this.name);
    }
}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Kolya', 35);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'