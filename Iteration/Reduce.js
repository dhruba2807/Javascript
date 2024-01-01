                    // Array.prototype.reduce()
 // The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).



                        // Syntax

// reduce(callbackFn)
// reduce(callbackFn, initialValue)


                        // Parameters
            // callbackFn
// A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

                // accumulator
// The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

                // currentValue
// The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

            // currentIndex
// The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

// array
// The array reduce() was called upon.







const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10




                        // Edge cases
// If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

// If *initialValue* is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

// If *initialValue* is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError


//Example
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);



const Number = [1,2,3,4,5,6,7]

const mytotal = Number.reduce(function (acc,currval){
    console.log(`acc:${acc}and currval: ${currval}`);
    return acc*currval
},0)





// reduce methods using Arrow Function  And Best Method
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



                            // Object + Reduce

     const bikeshopping =[
            {
                    bikename : "Mt-15",
                price:150000
            },
            { 
                bikename : "Ktm-rc 390",
                price:250000
            },
            {
                    bikename : " Gt-650",
                price:350000
            },
            { 
                bikename : "Panicale-v4",
                price:850000
            }
    ]



const priceToPay = bikeshopping.reduce((acc, item) => acc + item.price, 0)
const bikename = bikeshopping.reduce((acc, item) => acc + item.bikename, 0)

console.log(price);