function addByX(x) {
    function add(input) {
        return input + x;
    }
    return add;
}

var addByTwo = addByX(2);

//Extension: Challenge 5
function once(func) {

    let counter = 0;
    let output;

    function finalFunc(x) {
        if (counter == 0) {
            counter++;
            return output = func(x);
        } else {
            return output;
        }
    }
    return finalFunc;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6