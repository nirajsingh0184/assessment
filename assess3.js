/*The two most used data structures in JavaScript are Object and Array.
Objects allow us to create a single entity that stores data items by key, 
and arrays allow us to gather data items into an ordered collection.
But when we pass those to a function, it may need not an object/array as a whole, but rather 
individual pieces.
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects
 into a bunch of variables, as sometimes that’s more convenient. 
Destructuring also works great with complex functions that have a lot of parameters, 
default values, and so on.*/

//As for example:In case of array.
//Eg1:
var x = [1, 2, 3, 4, 5];
var [y, z,...rest] = x;
console.log(y);  //returns 1
console.log(z);   //returns 2
console.log(rest);  //returns [3,4,5]

//Eg2:
function f() {
    return [1, 2];
  }
  
  var a, b; 
  [a, b] = f(); 
  console.log(a); //returns 1
  console.log(b); //returns 2


//Now in case of object:
//Eg1:
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); //returns 42
console.log(q); //returns true


//Eg2:
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
console.log(foo);  //returns 42
console.log(bar);  //returns true

//Eg3:
var {a = 10, b = 5} = {a: 3};
console.log(a);  //returns 3
console.log(b);  //returns 5
