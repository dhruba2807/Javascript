// singleton
// Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Dhruba",
    "full name": "Dhruba Mondal",
//mySym : "key1"  {{This Is Wrong type declaration of symbol
// this print string }}

    [mySym]: "mykey1", //this type of {symbol}
    age: 18,
    location: "Jaipur",
    email: "Dhruba@google.com",
    isLoggedIn: false,
    lastDays: ["Monday", "Saturday"]
}


console.log(JsUser.email)

//**this Is right type to print objects */
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])




JsUser.email = "dhruba@xyz.com"
// Object.freeze(JsUser) //freeze means value not change
JsUser.email = "dhruba@abc.com"
// console.log(JsUser);


// function object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());