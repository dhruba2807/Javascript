let mydate = new Date()
    console.log(mydate);
    console.log(mydate.toString());
    console.log(mydate.toDateString());
    console.log(mydate.toLocaleString());


    // CREATE DATE 
    let my_createdate = new Date(2023,12,25)
    console.log(my_createdate.toDateString());



    // let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

    //CREATE DATE AND TIME
    let my_createtime= new Date(2023,12,25,5,3)
    console.log(my_createtime.toLocaleString());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));  





let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})