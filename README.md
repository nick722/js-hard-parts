frontendmasters.com - Will Sentance JavaScript The Hard Parts 01.22.2018 7h9m

Callbacks and Higher-Order Functions
http://csbin.io/callbacks

Closures, Scope, and Execution Context
http://csbin.io/closures

Asynchronicity
https://jsbin.com/hijijag/1/edit?js,console,output

=================================================

Challenge 4
Recreate the built in array method, forEach:
Write a function that takes as parameters an array, arr,
and a callback function, cb.

The forEach function will
iterate through arr
passing each element
and its index as arguments to cb.

Create a variable named delays
and assign to it an array with the numbers
2000, 5000, 0, and 3500 (in that order).

Write a function, delayLog,
that takes as input a delayTime and an index, i.
When invoked, the function should wait delayTime milliseconds
before logging to the console,
"printing element i" (with "i" replaced with the actual index passed in).

Putting it all together,
run the delayLog function on each item of the delays array
using the forEach function you created.