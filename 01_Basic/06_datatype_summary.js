

// HOW YOU STORE DATA IN MEMORY AND HOW YOU ACCESS THE MEMORY
// IN THIS CINDITION THERE ARE TWO DIFFERENT TYPE OF DATA TYPE :
// 1.PREMETIVE =>  CALL BY VALUE (ORGINAL VALUE DOES NOT CHANGE ONLY COPY  VALUE CHANGE)
        /*
                THERE ARE 7 TYPE OF PRIMITVE DATA TYPE:----
                    1.  STRING ,NUMBER,NULL,BOOLEAN,UNDEFINED,SYMBOL
                        BIGINIT
                        ex======*/
 const score = 100
 console.log(typeof score)
const scoreValue = 100.3
console.log(typeof scoreValue )
const isLoggedIn = false
console.log(typeof isLoggedIn)
const outsideTemp = null
console.log(typeof outsideTemp)
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof anotherId )


console.log(id === anotherId);
     // **  JAVASCRIPT STATICALYY DEFINED **


//2.NOT PREMETIVE/REFERENCE => CALL BY REFERENCE()
            ARRAY,OBJECT,FUNCTION
          //  ex :-----
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros)
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj )
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction)

console.log(typeof anotherId);



// 4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".
// 11. Assert: val is an Object.
// 12. NOTE: This step is replaced in section B.3.6.3.
// 13. If val has a [[Call]] internal slot, return "function".
// 14. Return "object".
// */

