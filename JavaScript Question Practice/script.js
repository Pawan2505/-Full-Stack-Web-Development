                                                            // JavaScript Questions


                                                            // Question No - 1

// let a = [];
// let b = [];

// console.log(a==b);
// console,log(a===b);


//Question No - 2

// let a = [];
// let b = a;
// console.log(a==b);
// console.log(a===b);


//Question No - 3


// let a = [20];
// let b = [20]

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);



// Question  N0 - 4


// let z = [1,2,3,4];
// let a = {name:"anil"};

// console.log(...z);


// Question  N0 - 5



// console.log(typeof NaN);   //Not a number



// Question  N0 - 6


// let data = 10 - -10;
// console.log(data);



// Question  N0 - 7



// const set = new Set([1,1,3,4,5]);
// console.log(set);



// Question  N0 - 8


// let data = {name: "Anil"};
// console.log(delete data.name);



// Question  N0 - 8


// let data = {
//   name: "Anil"
// };
// console.log(delete data);


// Question  N0 - 9


// const data = ["Peter", "Anil", "sam"];
// const [,,y] = data;
// console.log(y);




// Question  N0 - 10


// const data = ["Peter", "Anil", "sam"];
// const [y] = data; //How to get second element.
// console.log(y);



// Question  N0 - 11



// const data = { name: "Anil", age: 34, skill: "js"};

// console.log(data.name);

// const {age} = data;
// console.log(age);


//How to get name Property without , operator


// Question  N0 - 12


// let data = { name: "Anil", age: 34, skill: "js"};

// let info = {city: "Noida", mail: "pawanaktu@gmail.com"};

// data = {...data, ...info};


// Merge 2 Object

// Console.log(data);



// Question  N0 - 13



// let data = { name: "Anil", age: 34, skill: "js"};

// let info = {city: "Noida"};

// data = {...data, ...info};

// Console.log(data);



// Question  N0 - 14




// let data = { name: "Anil", age: 34, skill: "js"};

// let info = {city: "Noida" skill: "HTML"};

// data = {...data, ...info};

// Console.log(data);



// Question  N0 - 15


// const name = 'Anil';
// console.log(name());


// Question  N0 - 16


// const result1 = false || {} || null;

// console.log(result1);



// // // Question  N0 - 17

// const result = false || {} || '';

// console.log(result);



// Question  N0 - 18

// const result = {} || 0 || true;

// console.log(result);



// Question  N0 - 19


// console.log(Promise.resolve(5));



// Question  N0 - 20


// console.log("heart" === "heart");



// Question  N0 - 21


// JSON.parse();

// What this method will do 
    // A: Parses JSON to a JavaScript value.
    // B: Parses a JavaScript object to JSON.
    // C: Parses any JavaScript value to JSON.
    // D: Parses JSON to a JavaScript object only.


// Question  N0 - 22

// let name = 'sidhu';

// function getName(){
//     let name = 'anil';
//     console.log(name);
// }

// getName();





// Question  N0 - 23


// let name = 'anil';

// function getName(){
//     console.log(name);
// }

// getName();



// Question  N0 - 24

// console.log((x => x)('I Love India'));

// console.log(`${(x => x)('I Love India')}to program`);



// Question  N0 - 25



// function sumValue(x, y, z){
//     return x+y+z;
// }

// console.log(sumValue(...[1,2,3]));


// Question  N0 - 26


// const name = 'code step by step';

// console.log(typeof name === 'object');
// console.log(typeof name === 'string');
// console.log(typeof name === false);


// Question  N0 - 27


// const name = "Subscribe";

// const age = 21;

// // console.log(isNan(name));
// console.log(isNaN(age));



// Question  N0 - 28



// let person = { name: "Anil"}; //aur data kyo nhi accept kr raha hai.

// // What can modify person object.

// Object.seal(person);

// console.log(person);


// Question  N0 - 29


// let data = [2,9,0,10];
// // // remove first element
// data.shift();
// console.log(data);


// Question  N0 - 30


// let data = [2,9,0,10];
// // // remove first element
//     data.pop();
// console.log(data);


// Question  N0 - 31


// let a = 32;
// console.log(a%2);
// //Check any value is odd or even.



//Question  N0 - 32


// let data = {
//     name: "anil"
// }

// delete data.name;

// console.log(data);



//Question  N0 - 33(a)



// let data = "true";

// // Convert data to boolean false value.

// console.log(!data);


//Question  N0 - 33 (b)



// let data = "true";

// // Convert data to boolean true value.

// console.log(!!data);




//Question  N0 - 34


// Diffrence between map and forEach function.

//Both map and forEach are higher-order functions in JavaScript that can be used to iterate over arrays and perform actions on their elements. However, there are some key differences between the two:

//Return value: The map function returns a new array containing the results of calling a provided function on each element in the original array. The forEach function does not return anything; it simply iterates over the array and performs a specified action on each element.

//Side effects: The forEach function is primarily used for executing a function on each element of an array, such as logging a value or updating a state variable. It does not change the original array. The map function, on the other hand, creates a new array with the same length as the original array, and fills it with the return values of the function provided to map.

//Function signature: The callback function provided to map takes three arguments: the current element, its index, and the array being iterated over. The callback function provided to forEach also takes three arguments, but the second argument is the index, and the third argument is the array being iterated over.

//Here are some examples to illustrate the differences:

//javascript
//Copy code
// Using map to square each element of an array
//const arr1 = [1, 2, 3, 4];
//const squared = arr1.map((x) => x * x); // returns [1, 4, 9, 16]

// Using forEach to log each element of an array
//const arr2 = ["a", "b", "c", "d"];
//arr2.forEach((elem) => console.log(elem)); // logs "a", "b", "c", "d"
//In summary, map is used when you want to transform an array into a new array with the same length, while forEach is used when you simply want to execute a function on each element of an array without modifying it.





//Question  N0 - 35


// let data = ["anil", "peter", "bruce"];
// delete data[1];

// console.log(data);



//Question  N0 - 36


// let data = ["anil", "peter", "bruce"];
// delete data[1];

// console.log(data.length);



//Question  N0 - 37(a)


// Merge two array.

// let a = [1,2,3];
// let b = [4,5,6];

// let c = [...a,...b];

// console.log(c);



//Question  N0 - 37(b)


// Merge two array.

// let a = [1,2,3];
// let b = [1,2,3];

// let c = [...a,...b];

// console.log(c);


//Question  N0 - 38



// let c = 3**3;
// console.log(c);



//Question  N0 - 39


// let a = 2;

// setTimeout(() => {    // function sabse baad me  excute hota hai setimeout ka.
//     console.log(a);
// }, 0);

// a=100;



//Question  N0 - 40


// let a = 2;

// let A = 30;

// console.log(A);   // CaseSensitive



//Question  N0 - 41


// let A10 = "like";

// // let 10A = "okey";

// console.log(A10);



//Question  N0 - 42


// let a = "like";

// let b = "like";

// console.log(a==b);


//Question  N0 - 43


// let a = 1;
// let c = 2;

// console.log(--c === a);


//Question  N0 - 44


// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); //** */



//Question  N0 - 45


// console.log(3*3);
// console.log(3**3);
// // console.log(3***3);



//Question  N0 - 46


// console.log(a);
// // let a;
// var a;



//Question  N0 - 47


// console.log(b);


//Question  N0 - 48

// console.log([[[[[[[[[]]]]]]]]]);


//Question  N0 - 49

  // How to find OS name

  //navigator.plateform



  //Question  N0 - 50


// let for = 100;  //Reserved Keyword.


//Question  N0 - 51


// function fruit(){
//   let name = "Rajeev"; 
//     console.log(name);
//     // console.log(price);
  
//      // hosting concept apply...first used variable then print.
//     let price = 599;
// }

// fruit();


//Question  N0 - 52


// for(let i = 0; i<3; i++)
// {
//   setTimeout(() => console.log(i),1);
// }
  


//Question  N0 - 53


// console.log(true);
// console.log(typeof +true);


//Question  N0 - 55


// console.log("7890oi98765wertyuijokjigfdxfcgvhbjnkm!anil");
// console.log(typeof("anil"));


//Question  N0 - 56



// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);



//Question  N0 - 57


// let c = {name: "peter"};
// let d;

// d = c;
// c.name = "anil";
// console.log(d.name);



//Question  N0 - 58


// var x;
// var x = 10;
// console.log(x);


//Question  N0 - 59


// var x;
// let x = 10;
// console.log(x);


//Question  N0 - 60


// let a = 3;
// let b = new Number(3);

// console.log( a==b );
// console.log( a===b );


//Question  N0 - 61


// // let name;
// nam = {};
// console.log(nam);



//Question  N0 - 62


// function fruit() {
//   console.log("Woof!");

// }
// fruit.name = "apple";
// fruit();


//Question  N0 - 63


// function Sum(a,b){
//   return a+b;
// }

// console.log(Sum(1,"2"));



//Question  N0 - 64


// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);


//Question  N0 - 65

// function getAge(...args){
//   console.log(typeof args)
// }
// getAge(21,56,85);


//Question  N0 - 66

// function getAge(){
//   'use strict';
//  let age = 21;
//   console.log(age);
// }
// getAge()



//Question  N0 - 67


// const sum = eval('10*10+5');
// console.log(sum);


//Question  N0 - 68



// How long is cool_secret accessible?

// sessionStorage.setItem('cool_secret',123);


//Question  N0 - 69

// const obj = {1: "a", 2: "b", 3: "c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));


//Question  N0 - 70


// const obj = {1: "a", 2: "b", 1: "c"};
// console.log(obj);


//Question  N0 - 71


// for(let i=1; i<5;i++)
// {
//   if(i==3) continue;
//   console.log(i);
// }


//Question  N0 - 72


// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('second'));
// const baz = () => console.log('Third');

// foo();
// bar();
// baz();



