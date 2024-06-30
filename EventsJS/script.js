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


let parase = document.getElementById('paras');

for(let i = 0; i<parase.length; i++){
   let para = parase[i];
   para.addEventListener('click',function(){
      alert("You have Clicked on Para: " + (i+1));

   })
}








    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
                        //REMOVE THE IMAGE 
   document.querySelector('#images').addEventListener('click', function(e){
      console.log(e.target.tagName);
      if (e.target.tagName === 'IMG') {
         console.log(e.target.id);
         let removeIt = e.target.parentNode
         removeIt.remove()
         //ANOTHER APPROACH
             //removeIt.parentNode.removeChild(removeIt)
      }
   });

   