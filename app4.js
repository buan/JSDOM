/*var listname=document.querySelector(".list-name");
listname.addEventListener('click',function(e){
   console.log(e.target);
});*/

/*
var delete1=document.querySelectorAll("#delete");
Array.from(delete1).forEach(function(delete1){
delete1.addEventListener('click',function(e){

    //console.log(delete1.parentElement);
    delete1.parentElement.removeChild(delete1);
    
});
});
*/

var delete1=document.querySelector(".list-name");
delete1.addEventListener("click",function(e){
   if(e.target.className=="delete") {
       const li=e.target.parentElement.parentElement;
       delete1.removeChild(li);
   }
});

var google=document.querySelector("#google-trav");
google.addEventListener('click',function(e){
    e.preventDefault();
    console.log("Default behaviour prevented");
})