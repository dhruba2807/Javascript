
// The forEach() method of Map instances executes a provided function once per each key/value pair in this map, in insertion order.

// Syntax

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// Parameters
// callbackFn
// A function to execute for each entry in the map. The function is called with the following arguments:

// value
// Value of each iteration.

// key
// Key of each iteration.

// map
// The map being iterated.

// The forEach method executes the provided callback once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value undefined.

// callback is invoked with three arguments:

// the entry's value
// the entry's key
// the Map object being traversed
// If a thisArg parameter is provided to forEach, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

// Each value is visited once, except in the case when it was deleted and re-added before forEach has finished. callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.


function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`);
  }
  new Map([
    ["foo", 3],
    ["bar", {}],
    ["baz", undefined],
  ]).forEach(logMapElements);
  // Logs:
  // "map.get('foo') = 3"
  // "map.get('bar') = [object Object]"
  // "map.get('baz') = undefined"
  






  const coding = ["js", "ruby", "java", "python", "cpp"]



// TWO DIFFERNET TYPE DECLARATION BUT SAME OUPUT

// coding.forEach( function  (item) {
//     console.log(item);   
// })


// coding.forEach ((item) => {
//         console.log(item);
// })

coding.forEach( (index,arr,key,value)    =>  {
    console.log(arr,value,key,index);
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
} )