/*JavaScript program to compare two objects to determine if the first one
contains equivalent property values to the second one.*/

var niraj = {
    profile: "software engineer",
    id: "069"
};

var suraj = {
    profile: "software engineer",
    id: "069"
};




console.log(niraj === suraj);//returns false
console.log(niraj == suraj);//returns false
//By equivalency of same reference.
niraj=suraj;
console.log(niraj==suraj);//returns true

function euivalencytest(a, b) {
    
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    
    return true;
}
console.log(euivalencytest(niraj,suraj));

// //output:
// false
// false
// true
//true
/*explanation:Primitives like strings and numbers are compared by their value,
 while objects like arrays, dates, and plain objects are compared by their
  reference.That comparison by reference basically checks to see if the objects 
  given refer to the same location in memory.That's the reason why we are getting 
  false,false in above two statement and finally true when comparing the actual property
  name at last.*/