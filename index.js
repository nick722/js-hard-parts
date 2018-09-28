// Challenge 2
var promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
    setTimeout(function () {
        resolve('Resoleved');
    }, 1000);
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(function (result) {
    console.log(result + '!');
})