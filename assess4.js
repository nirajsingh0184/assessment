/*JavaScript strings are used for storing and manipulating text.
A JavaScript string is zero or more characters written inside quotes.
As for eg:
var bikeName1 = "Yamaha";  // Double quotes
var bikeName2 = 'Pulsar';  // Single quotes

In JavaScript terminology,a template literal is a way to concatenate strings
 while allowing embedded expressions and improving readability.
 With template literals, we use enclosing back-ticks ( ` ) instead.
  As for eg:
  const str3 = `hello world`;
 A template literal is still a String. But by using the back-ticks and writing 
 our strings as template literals we can do some really cool stuff!
 i.e:
 1:String Concatenation
As I stated initially, template literals can drastically improve your code readability. 
One simple example of this is when you want to use variables within strings. 
Consider the following example:
var p = {
  name: 'Niraj',
  nn: 'Nil',
};
// STRING CONCATENATION
console.log('Hi, I\'m ' + p.name + '! Call me "' + p.nn + '".');

// TEMPLATE LITERALS
console.log(`Hi, I'm ${p.name}! Call me "${p.nn}".`);

//Output:Hi, I'm Niraj! Call me Nil.

Line Breaks
Line breaks are another area where template literals can truly shine. 
Consider a scenario where we wanted to log out the following code:
// STRING CONCATENATION
console.log("Dear Mom,\n" + 
"Hope you are well.\n" + 
"\tLove, your son")

// TEMPLATE LITERALS
console.log(`Dear Mom,
Hope you are well.
    Love, your son`);

    Output:
    Dear Mom,
 Hope you are well.
     Love, your son

    That’s because, with template literals, all new line characters, 
    tabs, spaces, etc. inserted in the source become a part of the string.*/