// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).


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






const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ADD 10 IN ALL NUMBERS    USING MAP METHOD

// const newNums = myNumers.map( (num) => { return num + 10})


            // CHANNING METHOD
const newNums = myNumers
                .map((num) => num * 10 ) 
                .map( (num) => num + 1) // AFTER MULTIPLY THEN ADD
                 .filter( (num) => num >= 40) //AFTER MULTIPLY ADD THEN CHECK

console.log(newNums);