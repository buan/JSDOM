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
    
});

   function clickfunc(e)
    {
        console.log(e);//you will get all the event list
        console.log(e.type)//which event is triggered
        console.log(e.altKey);//return false if alt key isnt pressed
        console.log(e.offsetX)//shows the cordinate protion of the element clicked for X axis.offsetY for Y axis
        console.log(e.target);//targeted element.button in our case
        click.previousElementSibling.textContent="Facebook";//change url from Google to Facebook
    }
    var click=document.querySelector("#clickme");
    click.addEventListener("click",clickfunc);


function hoverme(e)
{
   var show=document.querySelector("#show"); 
    //show.textContent="X="+e.offsetX+"Y="+e.offsetY;
    hover.style.background="rgb("+e.offsetX+","+e.offsetY+",40)";
}
var hover=document.querySelector("#change-color");
hover.addEventListener("mousemove",hoverme);


//select event
var vv=document.querySelector("select")
vv.addEventListener("change",function(e){
console.log(e.target.value);
})