function everyXsecsForYsecs(func, x, y) {

    function mySetTimeout() {
        setTimeout(function () {
            func();
        }, 1000 * x);
    };

    for (let i = 0; i < y; i++) {
        mySetTimeout();
    }
}

function logHowdy() {
    console.log("Howdy");
}

everyXsecsForYsecs(logHowdy, 1, 5);