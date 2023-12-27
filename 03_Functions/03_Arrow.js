//An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:


//              SYNTAX
() => expression

param => expression;

(param) => expression;

(param1, paramN) => expression;

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}



        //THIS OPERATOR USES REFER  CURRENT CONTENT REFER KORE

const user ={
    username:"dhruba",
    price:999,

    message:function(){
        console.log(`${this.username},welcome to Web Page`)
    }

}
user.message()




// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }



function x(){
    console.log(this)
}

x()


//**IF YOU PUT {CURLIBRACES} THEN YOU MUST USE RETURN  */
const addTwo = (num1, num2) => {
        return num1 + num2
     }


    // const addTwo = (num1, num2) =>  num1 + num2
    
    //***IF YOU USE [=> ARROW OPEARTOR ]  THEN DON`T NEED TO WRITE RETURN*/

    // const addTwo = (num1, num2) => ( num1 + num2 )

    //OBJECT RETURN  USING arrow OPERATOR
    const name = (name1,name2) =>({username:"dhruba"})

                    //******************** */

    // Using arrow functions using ARRAY

    // An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
