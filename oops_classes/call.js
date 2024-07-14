function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
// SetUsername is a constructor-like function that takes a username parameter.
// Inside the function, this.username assigns the username to the object being created.
// It logs "called" to the console to indicate that the function was executed.

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}
// createUser is a constructor function that takes username, email, and password as parameters.
// Inside this function:
// SetUsername.call(this, username) calls the SetUsername function in the context of the current object (this), effectively setting the username property on the new object being created.
// this.email and this.password assign the email and password to the object being created.

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);