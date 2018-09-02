//Extension 2
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
function reduce(array, callback, initialValue) {
    var output = initialValue;
    for (let i = 0; i < array.length; i++) {
        output = callback(output, array[i]);
    }
    return output;
}

console.log(reduce(nums, add, 0));