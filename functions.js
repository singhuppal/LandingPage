function callThreeTimes(f){
    f();
    f();
    f();
}

function happy(){
    console.log(':)');
}

function sad(){
    console.log(':(');
}


//Function that accepts other functions as arguments
function pickOne(f1,f2){
    let random = Math.random();
    if (random < 0.5){
        f1();
    } else {
        f2();
    }
}

//Function that return a function
function multiplyBy(num){
    return function (x) {
        return x * num;
    }
}

const triple = multiplyBy(3);


//example 2
function makeBetweenFunction(minAge, maxAge){
    return function (userAge) {
        return userAge>minAge && userAge<maxAge;
    }
}

const isChild = makeBetweenFunction(18,100);
//makeBetweenFunction will return:      
    //function (userAge) {
    //return userAge>minAge && userAge<maxAge;
    //}
                                          
//we are storing this function into a variable called isChild (function expression)
    //const isChild = function (userAge) {
    //return userAge>minAge && userAge<maxAge;
    //}

//and calling isChild()

//benefit of returning a funcion


//Callback Function
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("HAHAHAHAHA")
}

callTwice(laugh); // <-- this is referred to as a call-back function

//Callback anonymous function with a buttons
const btn = document.querySelector('button');
btn.addEventListener('click',function() {alert('Please login')});
