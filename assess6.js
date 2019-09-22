
/* program using regex in Javascript ES6 to check if the email address provided is valid
or not*/
var regx=/^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
var a=require("readline");
var b=a.createInterface(process.stdin,process.stdout);
b.question("what is your email",function(email){
    if(regx.test(email)){
        console.log("valid email");  
    }
    else{
        console.log("invalid email");   
    }
   process.exit();
})