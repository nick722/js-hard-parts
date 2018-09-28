// Challenge 3

promise = new Promise(function(resolve, reject) {
    // ADD CODE HERE
    setTimeout(function () {
        reject('Rejected');
    }, 1000);
})

// Should print out "Reject!"
// ADD CODE HERE
promise.catch(function (value) {
    console.log(value + '!');
})