// let firstname = "ayesha";
// console.log(firstname);

// alert('Hello');
// alert('World');

// let message;
// message = "Hello";
// alert(message);
// // console.log(message);

// Var Keyword

// Hoisting  of var

// console.log(number) // undefined

// var number = 50

// console.log(number) // 50

//scope of var

// var number = 50 // Golbal Scope
// function print() {

//     var square = number * number // local scope
//     console.log(square)
//   }

//   print() // 2500

//   console.log(number)

//Variables can be redeclare

// var number = 50;
// console.log(number);

// var number = 100;
// console.log(number);

//Variables can be reassign

// var number = 50
// console.log(number) // 50

// number = 100
// console.log(number) // 100

// number = 200
// console.log(number) // 200

// square1, we assign number * number. Since number is hoisted with a default value of undefined, square1 will be undefined * undefined which results in NaN.

// console.log(number);
// var number = 50;

// function print() {
//     var square1 = number * number
//     console.log(square1)

//     var number = 50

//     var square2 = number * number
//     console.log(square2)
//   }

//   print()
//   // NaN
//   // 2500

// Let keyword

// let number = 50;
// function print() {
//   let square = number * number;
//   if (number < 60) {
//     let largenumber = 80;
//     console.log(square);
//   }
//   console.log(largenumber);
// }

// print()

// let number = 50

// function print() {
//   let square = number * number

//   if (number < 60) {
//     var largerNumber = 80
//     let anotherLargerNumber = 100

//     console.log(square)
//   }

//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }

// print()

//  variables declared with let can be reassigned to other values, but they cannot be redeclared.

// let number = 50
// console.log(number) // 50

// number = 100
// console.log(number) // 100

// hoist variables declared with let
// It display an error

// console.log(number)
// // ReferenceError: Cannot access 'number' before initialization

// let number = 50

// const number = 50;

// function print(){
//     const suqare = number * number;

//     if (number<60) {
//         var largenumber = 80;
//         const suqare1 = 100;

//         console.log(suqare);

//     }

//     console.log(largenumber);
//     console.log(suqare1);
// }
// print()

// hoist variable
// console.log(number);
// const number = 50;

// Data Types
// number
// let n = 123;

// console.log(n)

// let message = "hello";
// message = 1234;

// console.log(message);
//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation,

// alert( NaN + 1 ); // NaN

//Bigint

// console.log(9007199254740991 + 1);

// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt)

//String

// let name = "ayesha";

// console.log("My name is", name);

// alert( `Hello, ${name}` );

//Boolean (logical type)

// let nameFieldChecked = 4<1;
// console.log(nameFieldChecked)

//The “null” value

// let age = null;
// console.log(age);

//The “undefined” value
// let age;
// console.log(age);

//typeof operand

// let name = "";

// console.log(typeof(name));

//alert, prompt, confirm

// alert("hello");

// let name = prompt('My name is', "ayesa");

// alert(name);

// let age = confirm("Age is correct");

// alert(age);

//Type Conversions

// let value = true;
// console.log(typeof value)

// value = String(value); // now value is a string "true"
// console.log(typeof value)// string

// let str = "123";

// console.log(typeof str);

// let num = Number(str);

// console.log(typeof num);

//Basic operators, maths

// unary operator

// let x = 1;
// x = -x;
// console.log(x);

//binary operator

// let x = 1, y = 2;
// console.log(x+y);

// let str = "Hello";
// let str1 = "world";

// console.log(str + str1);

// let num = "2";
// let num1 = "5";
// console.log(+num + +num1);

// let num = "2";
// let num1 = "5";
// console.log(num + num1);

// let num = "2";
// let num1 = "5";

// console.log(num ** num1);

// console.log(2 + '1');

//Assignment

// let x = 2 * 2 + 1;

// alert( x );

// let x = 2 * (2 + 1);

// console.log(x);

// let x = 2
// let y = 2;

// let z = 5 - (a = x + y);

// console.log(z);

// console.log(a);

//Modify-in-place

// let n = 2;
// n = n + 5;
// n = n * 2;
// console.log(n);

//Increment/decrement

// let counter = 2;
// counter++;
// alert( counter );

// let counter = 2;
// counter--;
// alert( counter );

// let counter = 0;
// counter++;
// ++counter;
// alert( counter );

// let counter = 0;
// console.log(counter++);

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++;

// console.log(c);

// console.log(d);

//Comparisons

// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 );

// let result = 5 < 1;

// console.log(result);

//String comparison

// let result = 'Z' > 'A';
// console.log(result);

// alert( 'Glow' > 'Glee' );

//Comparison of different types

// alert( '2' < 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

//Strict equality

// alert( 0 == false ); // true

// alert( 0 === false ); // false, because the types are different

// if else

// let year = 2016;

// if (year == 2015) {
//     alert( "That's correct!" );
//     alert( "You're so smart!" );
//   }

//   else{
//     alert( "That's wrong!" );
//   }

//else if

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

//Conditional operator ‘?’

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let age = 6;

// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }

// alert(message)

// Logical operators

//|| (OR)

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// alert( 1 || 0 ); // 1 (1 is truthy)

// alert( null || 1 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 1 ); // 1 (the first truthy value)

// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

//&& (AND)

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// let hour = 12;
// let min = 10;

// if (hour == 12 && min == 30) {
//     alert( 'The time is 12:30' );
//   }

// else{
//     alert('The time is 12:10')
// }

//  While

// let i = 0;
// while (i<3) {
//     console.log(i++);
// }

// do while

// let i = 0;

// do {
//     console.log( i++ );
// } while (i<4)

// for loop

// let i = 0;
// for (i= 0; i < 5; i++) {

//     console.log(i); // print the value of i, 0,1,2,3,4
// }
// console.log(i); // prints 5 bcz i is declared outside the for loop

//Breaking the loop

// let sum = 0;

// while (true) {
//     let value = prompt(" Enter Some value", '');
//     if (!value) break;

//     sum = sum + value;

// }

// console.log("Sum", +sum);

// Continue the loop

// let i = 0;

// for (i=0; i<10; i++){
//     if( i % 2 == 0) continue;

//     console.log(i);
// }

// label

// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//       let input = prompt(`Value at coords (${i},${j})`, '');

//     }
//   }

//   console.log("Done");

//prefix
// let i = 0;
// while (++i < 5)

// console.log(i);

//postfix

// let i = 0;
// while (i++ < 5)

// console.log(i);

//"switch" statement

// let i = 2+1;

// switch (i) {
//   case 3:
//     console.log("Too small");
//     break;

//   case 4:
//     console.log("Exactly");
//     break;

//   case 5:
//     console.log("Too big");
//     break;

//   default:

//   console.log("I don't know such values");
//     break;
// }

//Functions

// function message() {
//     alert("Hello");
// }

// message();

//Local variables

// function message() {
//     let i = 0;
//     for(i=0; i<5; i++)
//     {
//         console.log(i);
//     }
// }

// message();

//Outer variables

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John

// let userName = 'John';

// function showMessage() {

//     userName = 'bob';
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }
// console.log(userName);

// showMessage();

// console.log(userName);

//parameters

// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }

//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//Returning a value

// function sum(a, b) {
//     return a + b;
//   }

//   let result = sum(1, 2);
//   alert( result ); // 3

//Function expressions

// let hi = function () {
//     alert("Hello");
// };

// hi();

// function sayHi() {   // (1) create
//     alert( "Hello" );
//   }

//   let func = sayHi;    // (2) copy

//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi(); // Hello    //     this still works too (why wouldn't it)

//Callback functions

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   function showOk() {
//     alert( "You agreed." );
//   }

//   function showCancel() {
//     alert( "You canceled the execution." );
//   }

//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);

//Objects

// let user = {
//     name: "Ayesha",
//     age: 12,
// }
// delete user.age;
// console.log(user.name);
// console.log(user.age);

//multiword property names

// let user = {
//     name: "Ayesha",
//     age: 12,
//     "Like birds": true,
// }

// console.log(user.name);
// console.log(user.age);

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = prompt("What do you want to know about the user?", "name");

// alert(user[key]);

//Computed properties

// let fruit = prompt("Enter fruit name", 'Apple');

// let user = {
//     [fruit]: 5,
// }

// console.log(user.Apple);

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// // take property name from the fruit variable
// bag[fruit] = 5;

// console.log(bag.apple);

//Property value shorthand
//Property existence test, “in” operator

// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

// let obj = {
//     test: "undefined",
// };

// console.log(obj.test);

// console.log("test" in obj);

//The "for..in" loop

// let user = {
//     name: "john",
//     age: 12,
//     subject: "Physics",
// };

// for(let key in user){
// console.log(key);
// console.log( user [key] );
// }

// ordered like a obj

// let obj = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };

// for(let key in obj){
//     console.log(key)
// }

// let obj = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA"
// };

// for(let key in obj){
//     console.log(key)
// }

// let user = {
//     name: "John",
//     surname: "Smith"
// }

// user.age = 25;

// for(let key in user){
//     console.log(key);
//     console.log(user [key]);
// }

// let user = {
//     name: "john",
//     surname: "smith",
//     name: "bob",
// };

// delete user.name;
// console.log(user.name);
// console.log(user. surname);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
// };
// let mult;

// for(let key in menu){
//    mult = menu.width * 2
//    mult1 = menu.height * 2
// }
// console.log(mult);
// console.log(mult1);

// let user = { name: 'John' };

// let admin = user;
// alert(user.name);
// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name); // 'Pete', changes are seen from the "user" reference

//Comparison by reference

// let a = {};
// let b = a; // copy the reference

// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

// let a = {};
// let b = {}; // two independent objects

// alert( a == b ); // false

// //Const objects can be modified

// const user = {
//     name: "John"
//   };

//   user.name = "Pete"; // (*)

//   alert(user.name); // Pete

//Cloning and merging, Object.assign

// duplicate the object

// let user = {
//     name: "jobn",
//     age: 15,
// }

// let clone = {};

// for (let key in user){
//     clone[key] = user [key];
// }

// clone. name = "Pete";
// console.log(user);
// console.log(clone);

//Object assign method

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(user);

//If the copied property name already exists, it gets overwritten:

// let user = {
//     name: "john",
// };

// Object.assign(user, {name:"pete"});

// console.log(user);

// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = Object.assign({}, user);

//   console.log(clone);
//   console.log(user);

//Nested cloning

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let clone = Object.assign({}, user);

// console.log(user.sizes === clone.sizes); // true, same object
// console.log(clone.sizes);

//structuredClone

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

//   let clone = structuredClone(user);

//   console.log( user.sizes === clone.sizes ); // false, different objects

//   // user and clone are totally unrelated now
//   user.sizes.width = 60;    // change a property from one place
//   console.log(clone.sizes.width); // 50, not related

// let user = {};
// // let's create a circular reference:
// // user.me references the user itself
// user.me = user;

// let clone = structuredClone(user);
// alert(clone.me === clone); // true

//Object methods, "this"

// let user = {
//     name: "john",
//     age: 12,
//     sub: "Physic",
// }

// user.sayhi = function (){
//  console.log("Hello");
// };

// user.sayhi();

// pre-declared function as a method
// let user = {
//   name: "john",
//   age: 12,
//   sub: "Physic",
// };

// // first, declare
// function sayHi() {
//   console.log("Hello");
// }

// // then add as a method
// user.sayHi = sayHi;

// user.sayHi();

// user = {
//     //     sayHi() { // same as "sayHi: function(){...}"
//     //       alert("Hello");
//     //     }
//     //   };

//     //   console.log(user);

//“this” in methods

// let user = {
//     name: "john",
//     age: 12,
//     sayhi(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// user.sayhi();

// let user = {
//     name: "john",
//     age: 12,

//     sayhi (){
//         console.log(this.name);
//     }
// };

// //overwrite the user

// let admin = user;
// user  = null;

// admin.sayhi();

//Same function is assigned to two different objects and has different “this” in the calls:

// let user = {
//     name: "john",
// };

// let admin = {
//     name: "Ann",
// };

// function sayhi(){
//     console.log(this.name);
// }
// //// use the same function in two objects
// user.f = sayhi;
// admin.f = sayhi;

// user.f();
// admin.f();

// this function

// let user = {
//     name: "john",

//     sayHi() {
//         let arrow = () => console.log(this.name);
//         arrow();
//       }
// };

// user.sayHi();

// function makeuser (){
//     return {
//         name: "john",
//         ref: this,
//     };
// }

// let user = makeuser();
// console.log(user.name);

// function makeuser (){
//    return {
//     name: "john",
//     ref(){
//         return this;
//     }
//    };
// }

// let user = makeuser ();

// console.log(user.ref().name);

//calculator

// let calculator = {
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     },

//     sub(){
//         return this.a - this.b;
//     },

//     div(){
//         return this.a % this.b;
//     },

//     rem(){
//         return this.a / this.b;
//     },

//     read (){
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     },
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator.sub());
// console.log(calculator.div());
// console.log(calculator.rem());

//Chaining

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showstep: function () {
//     console.log(this.step);
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showstep(); // 1

// ladder.up();
// ladder.showstep();

// ladder.down();
// ladder.showstep();

//Optional chaining '?.'

//The “non-existing property” problem

// let user = {

// };

// console.log(user.street.address);

// let user = {

// };

// console.log(user.address ? user.address.street: undefined);

// let user = {}; // user has no address
// console.log(user.address ? user.address.street ? user.address.street.name : null : null);

// let user = {};
// console.log(user.address && user.address.street && user.address.street.name);

//Optional chaining

// let user = {

// };

// console.log(user?.address ?.street);

// let html = document.querySelector('.elem')?.innerHTML;

// console.log(html);

// let user = null;
// console.log(user?.address);
// console.log(user.address?.street);

//Short-circuiting

// let user = null ;

// let x = 0;

// user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

// alert(x); // 0, value not incremented

// let useradmin = {
//     admin(){
//         console.log("I am admin");
//     }
// };

// let userguest = {};

// useradmin?.admin?.();
// userguest?.admin?.();

// let key = "firstName";

// let user1 = {
//   firstName: "John"
// };

// let user2 = null;

// console.log();( user1?.[key] ); // John
// console.log();( user2?.[key] ); // undefined

// let final = ""
// for (let char of final) {
//   final += char + "<hr>";
// }

// console.log(final)

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert( map.get(1)   ); // 'num1'
// alert( map.get('1') ); // 'str1'

// alert( map.size ); // 3

// let user = {
//   name: "john",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   },
// };

// console.log(user);
// console.log(+user);
// console.log(user + 500);

//Object.keys, values, entries

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let value of Object.values(user)){
// console.log(value);
// }

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doubleprice = Object.fromEntries (
//   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

// console.log(doubleprice.banana);
// console.log(doubleprice.orange);
// console.log(doubleprice.meat);

// function sumSalaries(salaries) {

//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum; // 650
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(sumSalaries(salaries));

// function count(obj) {
//   return Object.keys(obj).length;
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(count(user));

//Array destructuring

// let arr = ["john", "smith"];

// let [firstName, lastname] = arr;

// console.log(firstName);
// console.log(lastname);

//split

// let [firstName, surname] = "john smith" .split(' ');
// console.log(firstName);
// console.log(surname);


// let user = {
//   name: "john",
//   age: 30,
// };

// for(let [key, value] of Object.entries(user)){
//   console.log(`${key}: ${value}`);
// }

//map

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for (let [key, value] of user){
//   console.log(`${key}: ${value}`);
// }


//Swap variables trick

// let user = "john";
// let admin = "smith";

// [user, admin] = [admin, user];

// console.log(`${user}, ${admin}`);


// let [name = prompt('name?'), surname = prompt('suname?')] = ["smith"];

// console.log(name);
// console.log(surname);


//Object destructuring

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };


// let {title, width: w, height:h} = options;

// console.log(title);
// console.log(w);
// console.log(h);

// let options = {
//   title: "Menu",

// };
// let {width = prompt("width?"), title = prompt("title?")} = options;

// console.log(title);
// console.log(width);



//Nested destructuring

// let options = {
//   size:{
//     width: 100,
//     height: 200
//   },

//   items: ["cake", "Donut"],
//   extra: true,
// };



// let { size:{width, height}, items:[item1, item2], title = "Menu"} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut


//Smart function parameters


// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };


// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  
//   console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//   console.log( items ); // Item1, Item2
// }

// showMenu(options);


// function showMenu ({ title = "Menu", width = 100, height = 200 } = {}) {
//   console.log( `${title} ${width} ${height}` );
// }

// showMenu();


// let user ={
//   name: "John",
//   years: 30
// };

// let {name, years:age, isadmin = false} = user;
// console.log(name);
// console.log(age);
// console.log(isadmin);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries) {

//   let maxSalary = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }



// let num = 1e5;
// console.log(num);


// let num = 1e-6;
// console.log(num);


// let num = 255;

// console.log(num.toString(16));
// console.log(num.toString(2));


// let num = 2.5578997;

// console.log(Math.round(num));

// let num = 3.567;

// console.log(num.toFixed(1));

// function readNumber (){
//     let num;
//     do{
//         num = prompt ("Enter a valid number", 0);

//     }while (!isFinite(num)); 
//     if ( num === null || num === '') 

//     return null;

//     return +num;
// }

// console.log(`Read ${readNumber()}`);


// let i = 0;

// while (i<11){
//     i += 0.2;
//     if(i<9.8 && i<10.2) 
//     console.log(i);
// }


// function random (min, max){
//     return min + Math.random () * min-max;
// }

// console.log(random (1,5));
// console.log(random (1,5));
// console.log(random (1,5));


function randomInteger(min, max) {
return min + Math.randomInteger()*min-max;
}

console.log(randomInteger(1,5));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));