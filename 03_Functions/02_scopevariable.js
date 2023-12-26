{
    var x = 1;
  }
  console.log(x); // 1
  

  {
    const x = 1;
  }
  console.log(x); // ReferenceError: x is not defined
  


  const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);




//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);



                //NESTED SCOPE
                function one(){
                    const username = "hitesh"
                
                    function two(){
                        const website = "youtube"
                        console.log(username);
                    }
                    // console.log(website);
                
                     two()
                
                }
                
                // one()
                
                if (true) {
                    const username = "hitesh"
                    if (username === "hitesh") {
                        const website = " youtube"
                        // console.log(username + website);
                    }
                    // console.log(website);
                }
                
                // console.log(username);
                
                
                // ++++++++++++++++++ interesting ++++++++++++++++++
                
                
                console.log(addone(5))
                
                function addone(num){
                    return num + 1
                }
                
                
                
                addTwo(5)
                const addTwo = function(num){
                    return num + 2
                }