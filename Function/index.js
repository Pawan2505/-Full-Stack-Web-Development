


                                                        //function call or invoke
// run();


// run();
// run();                                                     //function declaration
                                                         
// function run() {
//     console.log('running');
// }

// run();

// stand();
//                                                            //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// walk();
// walk();
// let jump = stand;

// jump();

// stand();
                                                             //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

  
// let jump = stand2;

// jump();

// stand2();


// let x = 1;
// x = 'a';

// console.log(x);

//                                                 // Function Argument (Used for special objects.)

// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// console.log(sum(1,2,6));
// console.log(sum(1));
// console.log(sum(9));
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);

                                                                            //Rest Operator

// function sum(num, value) {
//     console.log(...args);
// }

// sum(1,2,3,4,5,6);




                                                                                //Default Parameters

                                                                           
                                                                                
// function interest(p,r=6,y=9) {
//     return p*r*y/100;
// }


// console.log(interest(1000,undefined, undefined));
// console.log(interest(1,0));


                                                                    //GETTER SETTER

                                                            //getter -> access properties

                                                            //setter -> change or mutate properties





                                                        //     let person = {
                                                        //         fName : 'Love',
                                                        //         lName : 'Babbar',
                                                        //         get fullName() {
                                                        //             return `${person.fName} ${person.lName}`;
                                                        //         },
                                                        //         set fullName(value) {
                                                                
                                                        //             let parts = value.split(' ');
                                                        //             this.fName = parts[0];
                                                        //             this.lName = parts[1];
                                                        //         }
                                                        //     };

                                                        //     person.fullName ='Rajeev Kushwaha'
                                                        // console.log(person.fullName);


                                                        //Error Handling.


                                        //Try and Catch




// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// try {
//         person.fullName = true;
//     }
//     catch (e) {
//         alert(e);
//     }

// console.log(person.fullName);

// console.log(person);


//issue - > read only





// console.log(person.fullName);


// {
//     let a = 5;
// }
// console.log(a);
// var a = 5;
// function walk()
//  {

//     console.log(a);
// }


// walk();



// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     var a = 15;
// }

// console.log(a);

// function a() {
//     const ab  = 5;
// }
// const ab = 5;
// function b() {
//     const ab = 5;
// }

//sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);

// let arr = [-1,-2,-3,-4];

// let total = 0;

// for(let value of arr) 
//     total = total + value;

// console.log(total);
                                                
                                                                //Redfuce function

// let arr = [-1,-2,-3,-4];

// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);

// console.log("PRINTING TOTAL SUM:")
// console.log(totalSum);




// function compare()
// {
//     int num=2;
//     char b=2;
//     if(a==b)
//         return true;
//     else
//         return false;
// }
// let a = 10;
//  b = a;
// switch(a===b)  
// {  
//    case a: console.log("Rajeev Bhaiya aaj mote lg rhe hai..");
// }  


var count =0;  
while (count <10)  
{  
     console.log(count)  
     count++;  
}  