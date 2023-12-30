// for...of statement


// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

// synatax

// for (variable of object)
//   statement



const arr1 = [3, 5, 7];
arr1.fool = "hello";

for (const i in arr1) {
  console.log(i);
}
// "0" "1" "2" "foo"
for (const i of arr1) {
  console.log(i);
}
// Logs: 3 5 7





const arr =[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const  greetings = "hello world!!";
for (const greet of greetings) {
console.log(`Each char is ${greet}`)

}






                        // Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2




const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1






// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//this synatax not working in forof loop because myobject meaN[OBJECT] not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }