// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN(not a number)

//truthy values
// "0",  'false' , " " , [] , {} , function(){}

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)


        //OBJECT IN IF-ELSE
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


    //EMPTY OBJECT
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let value;
// value = null ?? 10
// value = undefined ?? 15
// value = 5 ?? 10
val1 = null ?? 10 ?? 20 // assign only first value



console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 50
iceTeaPrice <= 80    ?  console.log("less than 80") : console.log("more than 80")