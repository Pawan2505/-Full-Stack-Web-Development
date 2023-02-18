

                                                                      //In-Built Objects && Array

                                                                                  //  Math:
   
  //Math.random();    //-generated random number.


//   Math.PI; -Print pi value.


//   Math.round(); - round the number.
                    //- Math.round(7.8) = 8; and Math.round(6.4) = 6;


//   Math.max(); - give max value.


//   Math.min(); - give min value.


//   Math.abs(); - Converted -ve value to +ve value and +ve value into +ve value.



                                                                // String :
                                                                             //   - String Primitive hote hai.

                                                                              //Primitive string -

// let lastName = 'Pawan';

// console.log(typeof(lastName));


                                                                            // String use like object in this way-

  // let lastName = new String('Pawan');
  
  // console.log(typeof(lastName));

//  console.log(lastName.startsWith('aw'));
//  console.log(lastName.startsWith('Maurya'));
//  console.log(lastName.endsWith('wan'));
//  console.log(lastName.endsWith('ma'));
//  console.log(lastName.length);
//  console.log(lastName.indexOf('a'));
//  console.log(lastName.toLowerCase());
//  console.log(lastName.toUpperCase());
//  console.log(lastName.trim());
//  console.log(lastName.replace('Pawan','Maurya'));
 



                                                    // Template Literal 

                                                    //               -Template literals are literals delimited with backtick (`) characters,
                                                    //                   allowing for multi-line strings, string interpolation with
                                                      //                             embedded expressions


    // Example - 1

// let lastName = 'Rajeev khu' ; 
// let message = 
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Pawan`;

// // console.log(message);

//                                                       // Split() Method

// let words = message.split(' ');
//  console.log(words);



                                                                                //Date and Time


// let date = new Date();


// let date2 = new Date('June 20 1997 07:15');

// let date3 = new Date(1998, 11, 20, 7);


// date3.setFullYear(1947);

// console.log(date3);
// console.log(date2);
// console.log(date);


                                                    //Array  --Object type,  -- Refrance type,  --Collection of items.

                                                                            // 1. Adding new elements.
                                                                            // 2. Finding elements.
                                                                            // 3. Removing elements.
                                                                            // 4. Spliting elements.
                                                                            // 5. Combining elements.


                        // Example - 1   (example of array.)   

// let numbers = [1,4,5,7];

// console.log(numbers);


                                                                      // Array Method - Insertion Method
                                                                                             // Three way we can use Insertion Method
                                                                                                    //      1. end -> push
                                                                                                    //      2. beginning -> unshift

                                                                                                     //      3. middle -> splice  
                                                                                                     

                                         //      1. end -> push
  
  // let number = [1,4,5,7];
  // number.push(9);
  // console.log(number);

                                             //      2. beginning -> unshift

  // let number = [1,4,5,7];
  // number.unshift(90);
  // console.log(number);                                         


                                                  //      3. middle -> splice  

    //--- 2-is index after 2nd index we added another data -------and 0 -is deliting value.
// let number = [1,4,5,7];
//   number.splice(2,0,'a','b','c');  
//   console.log(number);        




                                                    // ***********Searching Array (for finding elements.)**********


//Example - 1

// let numbers = [1,4,5,7];

// console.log(numbers);
//                                                             // Method-1 -----searching the array elements
                                                    // array.indexof(elements) are used for searching elements of array.
// console.log(numbers.indexOf(2));                  // if 9 is not present in array then output is -1 show.

// // //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1)                       // Apply conditional loop ---to finding the elements are present or not.
    // console.log("present");

// console.log(numbers.includes(5));               // Method -2 ------for searching array elements.------[array.include() Methods.]

// console.log(numbers.indexOf(4, 2) );           // This statments search the array elements 4 after second index.



//Example -2

// let courses = [                                     // This array store object as elements.
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

// console.log( courses.includes( {no:1, naam:'Love'} ) );                  //------console.log( courses.includes( {no:1, naam:'Love'} ) );   
                                                                         //  ------This search object is diffrent from courses array object elements.






                                        // *****Removing Elements.*********

                                                                            // //end
                                                                                        // numbers.pop();
                                                                            // //beginning
                                                                                         // numbers.shift();
                                                                            // //middle
                                                                                        // numbers.splice();

    //end
    // numbers.pop();    
    
    // let numbers = [1,2,3,4,5,6,7];
    // console.log(numbers);

    // numbers.pop();
    // console.log(numbers);


                                                                        //beginning
                //                                                         // numbers.shift();

                //  let numbers = [1,2,3,4,5,6,7];
                //  console.log(numbers);
             
                //  numbers.shift();
                //  console.log(numbers);



                                                                        //middle
                                                                         // numbers.splice();  
                                                                         
// let numbers = [1,2,6,4,5];
// // let numbers2 = numbers;
// numbers.splice(3,1); // removing element from middle.
// // numbers = [];
// // numbers.length = 0;                                 //*********Emptying an array************
// numbers.splice(2,numbers.length);                //*********Emptying an array************
// // numbers.splice(3);

// console.log(numbers)



                                                    //*******Combining and slicing arrays*********/


                                                     //*******Combining arrays*********/


// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);      



                                                    // *********Slicing arrays */


// let marks = [10,20,30,40,50,60,70,80];
// // // let sliced = marks.slice();
// // let sliced = marks.slice(2);
// let sliced = marks.slice(3,5);
// console.log(sliced);



                                                //**************Spread Operator**********/


// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// // console.log(combined);

//                                                             //copy kaise create karu
                                                                                
//                 let another = [...combined];  
//                 console.log(another);    
                
                


                                                                    //*********Iterating an array***********/

                                                                    //For-of loop

// let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// }                                                                    


                                                                    // For-each loop


// let arr = [10,20,30,40,50];
// // arr.forEach(function(number){                          //Call back function.
// //     console.log(number);
// // });
// arr.forEach(number=> console.log(number));  // Convert into Arrow function





                                                                //**************Joining Array*************/





// let numbers = [10,20,30,40,50];
// const joined = numbers.join('_');

// console.log(joined);                                                                


                                                            //***********Splitting array**********/


// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);         



                                                            //*********Sorting Array**********/   -----------try again.


// let numbers = [5,10,4,40];

// numbers.sort();           // numbers first convert into string then sort.

// console.log(numbers);

// numbers.reverse();       // numbers first convert into string then reverse.
// console.log(numbers);



                                                    //***********Filtering Array*********/


// let numbers = [1,2,-1,-4];

// // let filtered = numbers.filter(function(value){
// //     return value>=0;
// // })

// let filtered =  numbers.filter(value => value >= 0);      //function converted into Arrow function

// console.log(filtered);                                                    




                                                    //*********Mappimg Array************/

//     let numbers = [7,8,9,10];
// // console.log(numbers);

// // let items = numbers.map(
// //     function(value){
// //         return 'student_no'+value;
// //     });

// let items = numbers.map(value => 'student_no' + value);   //Function converting into Arrow funtion.

// console.log(items);
               