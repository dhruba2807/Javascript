const user = {
    username: "DHURBA",
    loginCount:15,
    signedIn: false,


    getUserDetails: function(){
        // console.log(user.username) // This would log "DHURBA"
        // console.log(user.getUserDetails()); // This would log the entire user object


        // getUserDetails: Logs the context (this) of the user object to the console. When called, it will output the entire user object.
        console.log(this);
    }

}


// console.log(user.username) // This would log "DHURBA"
// console.log(user.getUserDetails()); // This would log the entire user object
// console.log(this); // In the global context, this would log the global object (e.g., `window` in a browser)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    // this.username: Sets the username of the new user object to the passed parameter.
    // this.loginCount: Sets the login count of the new user object to the passed parameter.
    // this.isLoggedIn: Sets the sign-in status of the new user object to the passed parameter.
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}


const userOne = new User("Dhruba",28, true)
const userTwo = new User("DhrubaMondal", 2004, false)

console.log(userOne.constructor);
// This logs the constructor function of userOne, which will be User. This is useful to verify that the userOne object was created using the User constructor function.

//console.log(userTwo);


// The user object is a simple object literal with properties and a method to log the object.
// The User constructor function is used to create multiple user objects with specific properties and a method to log a welcome message.
// userOne and userTwo are instances of the User constructor, each with their own properties and methods.