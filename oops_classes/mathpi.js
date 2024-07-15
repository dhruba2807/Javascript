const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
// Object.getOwnPropertyDescriptor:

// This method retrieves the property descriptor for the property "PI" from the Math object.
// Math.PI:

// Math.PI is a constant in JavaScript that represents the value of π (approximately 3.14159).
// Output:

// The descriptor variable will contain an object that describes the property attributes of Math.PI.


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const coffe = {
    name:'Black Coffe',
    price:300,
    isavailable:true

}
console.log(Object.getOwnPropertyDescriptor(coffe));
//The Output of the code is undefined because the coffe  name price is not defined

console.log(Object.getOwnPropertyDescriptor(coffe,"name"
));
console.log(Object.getOwnPropertyDescriptor(coffe,"price"
));


Object.defineProperty(coffe,`name`,{
    writable: false,
    enumerable: false

})




console.log(Object.getOwnPropertyDescriptor(coffe, "name"));

for (let [key, value] of Object.entries(coffe)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}