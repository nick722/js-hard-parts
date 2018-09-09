function myForEach(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        cb(arr[i], i);
    }
}

let delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {
    setTimeout(
        function () {console.log("printing element " + i
            + " delayed by " + delayTime + " seconds.");}
        , delayTime);
};

myForEach(delays, delayLog);

// delayLog(delays[0], 0);