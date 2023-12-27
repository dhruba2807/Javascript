//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

//synatx

(function () {
    // …
  })();
  
  (() => {
    // …
  })();
  
  (async () => {
    // …
  })();


//      GLOBAL SCOPE POLUTION SE  PROBLEM HOTI HE 
//  GLOBAL SCOPE R POLUTION KO SAF KARNE KE LIYE   USE HOTA HAI

 




  const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
