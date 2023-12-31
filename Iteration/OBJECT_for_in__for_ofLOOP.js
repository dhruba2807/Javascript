// object in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "roman",
    swift: "swift dezire"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


 //maps not woeking in for in loops 




            // *********The for...in*******
//  statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement

for (variable in object)
  statement



  // Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.

// Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).
                    // EX:-
// function dumpProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     result += `${objName}.${i} = ${obj[i]}<br>`;
//   }
//   result += "<hr>";
//   return result;
// }




//********for...of statement******


// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.


for (variable of object)
  statement



  const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7



// The for...of and for...in statements can also be used with destructuring. For example, you can simultaneously loop over the keys and values of an object using Object.entries().

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2




