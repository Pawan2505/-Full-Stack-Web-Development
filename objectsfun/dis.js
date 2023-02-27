//Camelcase -> numberOfStudents

// function createRectangle(len, bre) {

//     return rectangle = {
//         length: len,
//         breadth:bre 
//     };
    
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);


                                                                                //constructor function 

//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents

//constructor function -> prop/methods -> intialise/Define

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
  
// }


// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);


                                                                    //Object are dynamic -Dynamic Nature of object

                                                                    // rectangleObject.color = 'yellow';  //Insert Object
                                                                    // console.log(rectangleObject);
                                                                    
                                                                    // delete rectangleObject.color;  //Remove Object
                                                                    // console.log(rectangleObject);

                                                                               //Constrution Property.


                                                                        //        let Rectangle1 = new Function(
                                                                        //         'length', 'breadth',
                                                                        //    ` this.length = length;
                                                                        //     this.breadth = breadth;
                                                                    
                                                                        //     `);
                                                                            
                                                                        //                                                                                 //object creation using Rectangle1
                                                                        //     let rect = new Rectangle1(2,3);
                                                                            
                                                                        //     // rect.length;
                                                                            
                                                                        //     console.log(rect);
                                                                            
                                                                            
                                                                            // rectangle.length;
                                                                            // rectangle.breadth;
                                                                            
                                                                            // rectangle.draw();
                                                                            
          // Primitive type
// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);
                                                                 

// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);            


// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

                                                                    //for-in loop 

                                                                    // let rectangle = {
                                                                    //     length:2,
                                                                    //     breadth:4
                                                                    // };
                                                                    
                                                                    
                                                                    // for(let key in rectangle ) {
                                                                    //     //keys are reflected through key variable 
                                                                    //     //values are reflected through rectangle[key]
                                                                    //     console.log(key,rectangle[key]);
                                                                    // }


                                                                                                        //for-of loop

// let rectangle = {
//     length:2,
//     breadth:4
// };

// // for(let key of Object.entries(rectangle)) {
// //     console.log(key);
// // }

// //Also we can Check the key is present or not
// if('len' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }



                                                                        //object - colone #1 ----Iteration Method
                                                                        // let src = {
                                                                        //     a:10,
                                                                        //     b:20,
                                                                        //     c:30
                                                                        // };
                                                                        
                                                                        // let dest = {};
                                                                        
                                                                        // for(let key in src) {
                                                                        //     dest[key] = src[key];
                                                                        // }
                                                                        
                                                                        // console.log(dest);
                                                                        
                                                                        
                                                                        // //Check Object Clone Properly or not
                                                                        // src.a++;
                                                                        // console.log(dest);
                                                                        
   //Object Cloning #2 -----------Assign Method

                                                                        let src = {
                                                                            a:10,
                                                                            b:20,
                                                                            c:30
                                                                        };
                                                                        
                                                                        let src2 = { value: 25};
                                                                        
                                                                        let dest = Object.assign({}, src,src2);
                                                                        
                                                                        console.log(dest);
                                                                        
                                                                        // Check Object Clone Properly or not
                                                                        
                                                                        src.a++;
                                                                        
                                                                        console.log(dest);