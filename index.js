/*** CHALLENGE 1 of 3 ***/

class PersonClass {
    constructor(name) {
        // add code here
        this.name = name;
    }

    // add code here
    greet () {
        console.log('hello, greetings!');
    }
}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'