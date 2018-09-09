frontendmasters.com - Will Sentance JavaScript The Hard Parts 01.22.2018 7h9m

Callbacks and Higher-Order Functions
http://csbin.io/callbacks

Closures, Scope, and Execution Context
http://csbin.io/closures

Asynchronicity
https://jsbin.com/hijijag/1/edit?js,console,output

=================================================

Challenge 3

1) Write a function everyXsecsForYsecs that will accept three arguments:
a function,
an interval time in seconds,
and a total time in seconds.

everyXsecsForYsecs should invoke the given function
every X times 1000 milliseconds,
but then stop invoking the function after Y times 1000 milliseconds.

Write function sayHowdy that will log "Howdy" to the console.
Then test your everyXsecsForYsecs function
by using it to invoke sayHowdy every 1 second for 5 seconds.

2) Now, modify your everyXsecsForYsecs function so it does not use setInterval,
but still keeps the same functionality.