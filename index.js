// Challenge 5
function delay(){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 1000);
    })
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);