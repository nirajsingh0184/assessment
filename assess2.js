/*Classes can be considered as a special function in javascript 
which can be defined in two ways:
1:By declaration.
2:By expression.
We can create a class in js using es6 by the following way using declaration method:*/
class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    increaseAge(){
        this.age += 1;
    }
}
java = new User("Java",30,"abc@gmail.com");
 java.increaseAge();
 console.log(java.name);
 console.log(java.age);
 console.log(java.email);


 //we can include inheritance in above program by the following way:
 class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
}
class Administrator extends User{
    constructor(name,age ,email,role){
        super(name,age,email);
        this.role=role;
    }
}
sara=new Administrator("Sara",30,"abc@gmail.com","admin");
console.log(sara.name);
console.log(sara.role);
