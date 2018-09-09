frontendmasters.com - Will Sentance JavaScript The Hard Parts 01.22.2018 7h9m

Callbacks and Higher-Order Functions
http://csbin.io/callbacks

Closures, Scope, and Execution Context
http://csbin.io/closures

Asynchronicity
https://jsbin.com/hijijag/1/edit?js,console,output

=================================================

Challenge 5
#1: Activate Other Button  #2: Change BG Color

Write a function changeColor
that when invoked
will first check
if the current page background color is "rgb(221, 238, 255)".

If it is, it changes the color to "rgb(255, 238, 221)".
If it isn't, it sets the color to "rgb(221, 238, 255)".

Add a click event listener to button #1 above
(it has an id of "activate").
On click, the button should log to the console "clicked #1".
It should also set up a click event listener on button #2 (id of "color").
That listener should log to console "clicked #2"
and then call the changeColor function you just created.

Clear the console and hit the 'Run with JS' button.
Look at what code has run by analyzing the console.
Then try to change the background color by clicking button #2.
What needs to happen for the button to work?