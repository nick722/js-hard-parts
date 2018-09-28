// Challenge 4

promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
    setTimeout(function () {
        resolve();
    })
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");