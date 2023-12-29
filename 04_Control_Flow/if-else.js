// if


const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// === check value and datatype
                
//data type testing constant and let only scope variable
const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);
const score1 = 200
if (score1 > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// var = scope global 
console.log(`User power: ${power}`);
const score2 = 200
if (score2 > 100) {
    var power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }



// if-else in one line
//this is not a right  practice

// const value = 100
// if(value>50) console.log("Test") ,console.log("Test2");




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



