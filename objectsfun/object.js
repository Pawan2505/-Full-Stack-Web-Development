

                                                                                // object create


let rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


                                                                                //Method of Creating Object?

                                                                                //factory function 
//Camelcase -> numberOfStudents

function createRectangle(len, bre) {

    const rectangle = {
        length: len,
        breadth:bre ,

        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(5, 4);
let rectangle2 = createRectangle(2,3);
let rectangle3 = createRectangle(7,9);



                                                                                //constructor function 

//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents

//constructor function -> prop/methods -> intialise/Define

function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw= function() {
        console.log('drawing');
    }
}


//object creation using constrcutor function
let rectangleObject = new Rectangle(4,6);

                                                                    //Object are dynamic -Dynamic Nature of object

rectangleObject.color = 'yellow';  //Insert Object
console.log(rectangleObject);

delete rectangleObject.color;  //Remove Object
console.log(rectangleObject);


                                                                                //Constrution Property.


let Rectangle1 = new Function(
    'length', 'breadth',
`this.length = length;
this.breadth = breadth;
this.draw= function() {
    console.log('drawing');
}`);

                                                                            //object creation using Rectangle1
let rect = new Rectangle1(2,3);

rect.length;

console.log(rect);


rectangle.length;
rectangle.breadth;

rectangle.draw();



                                                                                     // Function of Object
                                            
                                                                                     // Primitive type
let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);


                                                                                 //Reference type

   
let a1 = { value: 10};
let b1 = a1;

a1.value++;

console.log(a1.value);
console.log(b1.value);            

// Example2

let a2 = 10;

function inc(a2) {
    a2++;
}

inc(a2);

console.log(a2);


//Example

let a3 = {value:10 };

function inc(a3) {
    a3.value++;
}

inc(a3);

console.log(a3.value);


                                                                    //for-in loop 

let rectangle01 = {
    length:2,
    breadth:4
};


for(let key in rectangle01 ) {
    //keys are reflected through key variable 
    //values are reflected through rectangle[key]
    console.log(key,rectangle01[key]);
}


                                                                            //for-of loop

let rectangle02 = {
    length:2,
    breadth:4
};

for(let key of Object.entries(rectangle02)) {
    console.log(key);
}

//Also we can Check the key is present or not
if('length' in rectangle02) {
    console.log('Present');
}
else {
    console.log('Absent');
}



                                                                        //object - colone #1 ----Iteration Method
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src) {
    dest[key] = src[key];
}

console.log(dest);


//Check Object Clone Properly or not
src.a++;
console.log(dest);


                                                                        //Object Cloning #2 -----------Assign Method
let src = {
    a:10,
    b:20,
    c:30
};

let src2 = { value: 25};

let dest = Object.assign({}, src, src2);

console.log(dest);

// Check Object Clone Properly or not

src.a++;

console.log(dest);


                                                                        //Object Cloning #3 ----------------Spread Method
let src = {
    a: 10,
    b:20,
    c:30
};

let dest = {...src};

console.log(dest);


//Check Object Clone Properly or not
src.a++;

console.log(dest);

