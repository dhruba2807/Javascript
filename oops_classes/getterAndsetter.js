// avaScript Getter
// In JavaScript, getter methods are used to access the properties of an object.

// Defining Getters and Setters: Getters and setters are defined using the get and set keywords respectively. When you define a getter or setter, you are actually defining a method that is associated with a particular property of an object. 



const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error



// In the above program, a getter method getName() is created to access the property of an object.

// get getName() {
//     return this.firstName;
// }
// Note: To create a getter method, the get keyword is used.

// And also when accessing the value, we access the value as a property.

// student.getName;
// When you try to access the value as a method, an error occurs.

// console.log(student.getName()); // error



// JavaScript Setter
// In JavaScript, setter methods are used to change the values of an object





// JavaScript Object.defineProperty()
// In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,

const student1 = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student1.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student1.firstName); // Sarah
// Run Code
// In the above example, Object.defineProperty() is used to access and change the property of an object.

// The syntax for using Object.defineProperty() is:

// Object.defineProperty(obj, prop, descriptor)
// The Object.defineProperty() method takes three arguments.

// The first argument is the objectName.
// The second argument is the name of the property.
// The third argument is an object that describes the property.