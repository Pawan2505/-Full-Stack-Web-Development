let meraPromise1 = new Promise(funtion(resolve, reject){
    setTimeout(function() {
        console.log('I am inside Promise1');
    },5000);

    //resolve(2223);
    reject(new Error('Bhaishab Error aaye hai'));
});

meraPromise1.then((value) => {console.log(value)});

meraPromise1.catch((error) => {console.log("Recieved an Error")});

console.log('Pehla');