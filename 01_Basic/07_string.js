const name = "Dhruba Mondal"
const repocount = 50

console.log(name + repocount + "Salary");  // This Old type declaration


console.log(`Hello My Name Is ${name} And My salary is ${repocount}`); // This is syntax is redable  *String Interpulation*




const gamename = new String('Dhruba')
console.log(gamename);





const gameName = new String('dHRUBA-Dc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Dhruba    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));