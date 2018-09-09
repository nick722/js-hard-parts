function everyXsecsForYsecs(func, x, y) {
    let intervalID = setInterval(func, 1000 * x);
    setTimeout(function(){clearInterval(intervalID)}, 1000 * y);
}

function logHowdy() {
    console.log("Howdy");
}

everyXsecsForYsecs(logHowdy, 1, 5);