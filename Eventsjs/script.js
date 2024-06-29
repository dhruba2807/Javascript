// document.getElementById('ram').onclick = function(){
//     alert("jay Shree Ram")
// }
document.getElementById('ram').addEventListener('click', function () {
    alert("Jay shree Ram")
});
document.getElementById('mahadev').addEventListener('click',function(){
    alert("Jay Mahakal")
})


// CHANGE THE TEXT HELLO WORLD TO JAVASCRIPT


function changetext(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Namaste Javascript";

}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click',changetext);





///     MOUSE (IN OVER AND CLICKED) FUNCTION TO CHANGE THE PAGE 

document.addEventListener('mouseover',infunction);
document.addEventListener('click',clickfunction);
document.addEventListener('mouseout', outfunction);


 function infunction(){
    document.getElementById('demo').innerHTML="Mouse IN??"
 }
 function clickfunction(){
    document.getElementById('demo').innerHTML="|Clicked|"
 }
 function outfunction(){
    document.getElementById('demo').innerHTML = "@@@Moused out!!!"
 }




 // CHANGE THE BACKGROUND COLOR
 document.addEventListener('click',function(){
    document.body.style.backgroundColor = "skyblue"
 });



          //REMOVE THE EVENT
 // Add an event listener
document.addEventListener("mousemove", myFunction);

// Remove event listener
document.removeEventListener("mousemove", myFunction);


