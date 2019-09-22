/*Program for converting two arrays into a single array using
arrow-function, map and iterators (without ‘for’) of Javascript ES6*/
   var a=[1,2,3,4];
   var b=[5,6,7,8];
   var c=b[Symbol.iterator]();
   b.map(v=>{
   a=[...a,c.next().value];
   
   })
   console.log(a);


  // Output:
 // [ 1, 2, 3, 4, 5, 6, 7, 8 ]