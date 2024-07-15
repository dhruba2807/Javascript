class user{
    constructor(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    encryptPassword(){
        return `${this.password}xyz`
    }
    changeusername(){
     return             `${this.username.toUpperCase()}`  
    }
}
const newuser = new user("dhruba","456","dhurba@gmail.com")
console.log(newuser.encryptPassword());
console.log(newuser.changeusername());


//jodi class method ta na thakto tahole ei process hoto

function user1(username,password,email){
    this.username = username;
    this.password = password;
    this.email = email;
}

user1.prototype.encryptPassword = function(){
       return `${this.password}@abcd`
}
user1.prototype.changeusername = function(){
    return             `${this.username.toUpperCase()}` 
}

const seconduser = new user1("ram","2807","ram@gmail.com")
console.log(seconduser.encryptPassword());
console.log(seconduser.changeusername());



class userthree{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}
class teacher extends userthree{
    constructor(username,email,pass){
        //super is keyword
//the super keyword in JavaScript is used to call the constructor or methods of a parent class. When used inside a subclass, super gives access to the parent class's methods and properties.
        super(username)

        this.email = email
        this.pass = pass
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// Creating an instance of userthree
let user2 = new userthree('Alice');
user2.logme(); // Output: username is Alice

// Creating an instance of teacher
let teacher1 = new teacher('Bob', 'bob@example.com', 'securepass');
teacher1.logme(); // Output: username is Bob
console.log(teacher1.email); // Output: bob@example.com
console.log(teacher1.pass); // Output: securepass








const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);