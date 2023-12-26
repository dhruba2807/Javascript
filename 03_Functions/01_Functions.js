function myname(){

console.log("D");
console.log("H");
console.log("R");
console.log("U");
console.log("B");
console.log("A");
}
myname()




// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
//************************************************************ */
                            //SQUARE OF TWO  NUMBERS 
const square = function (number) {
    return number * number;
    };

     console.log(square(4)); // 16

//********************************************************** */
                    //ADD TWO NUMBER USING FUNCTION
    function addTwoNumbers(number1, number2){

        // let result = number1 + number2
        // return result
        return number1 + number2
    }
    
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

//***************************** */

function loginusername(username){
        if(username === undefined){
            console.log("Please Enter A Valid Name")
            return
        }
        return `${username} you are in page`
}
console.log(loginusername("Dhruba"))


//************************************* */

            ///...num1 (this is a rest operator )  MULTIPLE VALUE PASS IN A SINGLE OPERATOR REST OPERATOR {{{...num1}}}
function addCartPrice(val1, val2, ...num1){
    return num1
}// console.log(calculateCartPrice(200, 400, 500, 2000))


// *********************************************
          // this is a object   
const user = {
    username: "Dhruba",
    prices: 500
}
                //object using function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)

//********************************************** */


handleObject({
    username: "Ram",
    price: 400
})

const NewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));