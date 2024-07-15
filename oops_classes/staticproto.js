class user {
    constructor(username){
        this.username = username;
    }
    loginme(){
        console.log(`username: ${this.username}`)
    }

// In JavaScript, the static keyword is used to define a method or property that belongs to the class itself rather than to instances of the class. These static methods and properties can be called without creating an instance of the class.
  static   createid(){
        return `123`;
        // static createid() is a static method that belongs to the User class itself, not to instances of the class.
    }
}
const dhurba = new user("Dhurba");
//call the static method;
console.log(dhurba.createid());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }

    // class Teacher extends User:

// This line declares that Teacher is a subclass of User. Teacher inherits all properties and methods from User.
// constructor(username, email):

// This is the constructor for the Teacher class. It takes two parameters: username and email.
// super(username):

// The super keyword is used to call the constructor of the superclass (User). This initializes the username property in the User class.
// this.email = email:

// This line initializes the email property specific to the Teacher class.
}

const iphone = new Teacher("iphone", "i@phone.com")
//This line attempts to call the createId method on the instance iphone. However, createId is a static method in the User class, meaning it belongs to the class itself, not to any instances of the class. This causes an error because static methods cannot be called on instances.
console.log(iphone.createId());