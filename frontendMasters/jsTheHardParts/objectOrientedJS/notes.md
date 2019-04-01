# Notes for Object-Oriented JavaScript

Section of JavaScript: The Hard Parts on Frontend Masters

## Solution 1. Generate objects using a function

Not the best solution, as it duplicates the increment method across every new user.

```   
function userCreator(name, score) {
 let newUser = {};
 newUser.name = name;
 newUser.score = score;
 newUser.increment = function() {
 newUser.score++;
 };
 return newUser;
};
//later
let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();
user2.increment();

```

## Solution 2: Generate Objects Using the prototypal nature of JavaScript

```
function userCreator (name, score) {
 let newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
let userFunctionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("You're loggedin");}
};
let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();
```

## Solution 3: Generate Objects Using Prototype/New

```
function User(name, score){
 this.name = name;
 this.score = score;
}
User.prototype.increment = function(){
 this.score++;
};
User.prototype.login = function(){
 console.log("login");
};
let user1 = new User(“Eva”, 9)
user1.increment();
```

## Solution 4: Generate Objects Using Class Syntax

```
class User {
 constructor (name, score){
 this.name = name;
 this.score = score;
 }
 increment (){
 this.score++;
 }
 login (){
 console.log("login");
 }
}
let user1 = new User("Eva", 9);
user1.increment(); 
```