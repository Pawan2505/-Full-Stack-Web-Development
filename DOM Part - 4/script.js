    // Adding 100 para.

// for(let i=1; i<=100;i++)   
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);
// } 


// Optimising a bit.

// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++)
// {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);


// Standard way chahiye ise run krne k liye-------[Performance]

// Performance - standard way to measure how long your code taken to run.



// Perfomance.now()---very accurate function.


// const t1 = performance.now();

// for(let i=1; i<=100;i++)   
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);
// } 


// const t2 = performance.now();
// console.log("this took "+ (t2-t1)+" ms");


// Output- Open Console in brosure  =>this took 0.5 ms
 

            // Again Check.

// const t3 = performance.now();

// for(let i=1; i<=100;i++)   
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);
// } 

// const t4 = performance.now();
// console.log("this took "+ (t4-t3)+" ms");




                //Doument Fragment.



// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);   // 1 reflow , 1 repaint.



            // The Call Stack.


        // Single - threading => Onr command run at a time.
        // Apki javascript ek single threaded language hai-----iska mtlb one command processing at a time.




                        //synchronus function
        // function addPara(){
        //     let para = document.createElement('p');
        //     para.textContent = 'Js is single';
        //     document.body.appendChild(para);
        // }

        // function appendNewMessage(){
        //     let para = document.createElement('p');
        //     para.textContent = 'Kya haal chal';
        //     document.body.appendChild(para);
        // }
        // addPara();
        // appendNewMessage();




        // synchronus function-----function invoke line by line or step by step.


        // Observation --- 1. 'run - to - completion nature of code.
     //                    2. JavaScript does not excute multiple line at same time.
     



                           // Call Stack



    // setTimeout(function(){
    //     console.log('Hello Everyone');
    // },5000);                             // 5sec baad output dega.


    