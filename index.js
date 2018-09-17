/****************************************************************
 EXTENSION: SUBCLASSING
 ****************************************************************/

var userFunctionStore = {
    sayType: function() {
        console.log("I am a " + this.type);
    }
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

// var adminFunctionStore /* Put code here */ ;
var adminFunctionStore = Object.create(userFunctionStore) ;

adminFunctionStore.sayType();

function adminFactory(name, score) {
    // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
