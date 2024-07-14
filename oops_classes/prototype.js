// let myName = "Dhruba     "
// let mychannel = "DMO     "
// These lines define two string variables, myName and mychannel, each containing trailing spaces.


// console.log(myName.trueLength);

//define a array



let myHeros = ["thor", "ironman"]

// heroPower is an object with properties thor and spiderman, and a method getSpiderPower which logs Spiderman's power to the console.
let heroPower = {
    thor: "hammer",
    ironman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.ironman}`);
    }
}
// Object.prototype.dhurba: This method is added to the prototype of all objects, meaning any object can now call the hitesh method.
Object.prototype.dhruba = function(){
    console.log(`dhurba is present in all objects`);
}

// Array.prototype.heydhurba: This method is added to the prototype of all arrays, meaning any array can now call the heyHitesh method.

Array.prototype.heydhurba = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.dhruba()
// myHeros.dhurba()
// myHeros.heydhurba()
// heroPower.heydhurba()
// heroPower.dhruba() and myHeros.dhruba() will both log the message because they are objects and arrays, respectively.
// myHeros.heydhurba() will log the message because it's an array.
// heroPower.heydhurba() will throw an error because heroPower is not an array.

// The heroPower object now has a getSpiderPower method that logs Ironman's power.
// Added dhruba method to all objects via Object.prototype.
// Added heydhurba method to all arrays via Array.prototype.
// Demonstrated usage of these prototype methods and noted the expected outcomes.








// inheritance

const User = {
    name: "dhurba",
    email: "dhruba@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// User, Teacher, TeachingSupport, and TASupport are defined as objects.
// Teacher is set to inherit from User using Teacher.__proto__ = User.
// TASupport inherits from TeachingSupport using the __proto__ property.
// Using Object.setPrototypeOf, TeachingSupport is set to inherit from Teacher.

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength(); // Logs the trimmed length of the string
"hitesh".trueLength(); // Logs the trimmed length of the string
"iceTea".trueLength(); // Logs the trimmed length of the string



// String.prototype.trueLength: This method calculates and logs the length of a string after trimming whitespace.
// The method is called on three different strings to demonstrate its functionality.