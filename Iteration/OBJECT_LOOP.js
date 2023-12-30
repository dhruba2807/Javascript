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

                // for...in statement
// The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks 


            //syntax
for (variable in object)
statement




function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
      result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
  }
  

  //maps not woeking in for in loops 
  
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
