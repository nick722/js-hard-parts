let intervalID = setInterval(function () {
    console.log('Interval Hello!');
}, 2000);

clearAllIntervals();


// ...your code above
function clearAllIntervals() {
    for (let i = 0; i < 10000; i++) {
        clearInterval(intervalID);
    }
}